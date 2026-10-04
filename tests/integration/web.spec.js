import { test, expect } from '@playwright/test';

// Marca el consentimiento de cookies antes de cargar para que el banner no estorbe
async function dismissCookiesBeforeLoad(page) {
  await page.addInitScript(() => {
    try { localStorage.setItem('rqt-cookie-consent', 'accepted'); } catch (e) {}
  });
}

// Intercepta window.open para no abrir WhatsApp de verdad y poder inspeccionar la URL
async function stubWindowOpen(page) {
  await page.addInitScript(() => {
    window.__lastOpen = null;
    window.open = (url) => { window.__lastOpen = url; return null; };
  });
}

// Rellena el paso 4 con datos válidos. Email obligatorio: por defecto pone uno válido.
// Pasa email:null para dejarlo vacío a propósito (tests de validación).
async function fillStep4(page, { email = 'laura@correo.com' } = {}) {
  await page.fill('#q-nombre', 'Laura Giménez');
  await page.fill('#q-localidad', 'Pozuelo');
  await page.fill('#q-telefono', '600112233');
  if (email) await page.fill('#q-email', email);
  await page.check('#q-privacy');
}

// Avanza por los pasos 1-3 seleccionando una opción en cada uno
async function goToStep4(page) {
  await page.click('.opt[data-group="servicio"][data-value="Detección de fugas"]');
  await expect(page.locator('.quiz-step[data-step="2"]')).toBeVisible();
  await page.click('.opt[data-group="tipo"][data-value="Spa o jacuzzi"]');
  await expect(page.locator('.quiz-step[data-step="3"]')).toBeVisible();
  await page.click('.opt[data-group="cuando"][data-value="Esta semana"]');
  await expect(page.locator('.quiz-step[data-step="4"]')).toBeVisible();
}

test.describe('Carga y estructura', () => {
  test('la home carga con el título correcto', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page).toHaveTitle(/Mantenimiento Integral de Piscinas \| RQT Pools/);
  });

  test('el logo SVG y la navegación están presentes', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page.locator('header svg').first()).toBeVisible();
    await expect(page.locator('header a[href="#servicios"]').first()).toBeVisible();
    await expect(page.locator('header a[href="#cuestionario"]').first()).toBeVisible();
  });

  test('el logo del footer está presente (SVG con aria-label RQT Pools)', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const logo = page.locator('footer svg[aria-label="RQT Pools"]');
    await expect(logo).toHaveCount(1);
    await logo.scrollIntoViewIfNeeded();
    await expect(logo).toBeVisible();
  });

  test('existe el schema WebSite con el nombre RQT Pools', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const website = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'WebSite');
    expect(website).toBeTruthy();
    expect(website.name).toBe('RQT Pools');
  });

  test('el icono del jacuzzi usa una clase válida de Phosphor (ph-bathtub)', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const icon = page.locator('.opt[data-value="Spa o jacuzzi"] i');
    await expect(icon).toHaveClass(/ph-bathtub/);
  });

  test('el botón flotante de WhatsApp apunta al número correcto', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const fab = page.locator('a[aria-label="Escríbenos por WhatsApp"]');
    await expect(fab).toHaveAttribute('href', /wa\.me\/34678137051/);
  });
});

test.describe('Banner de cookies', () => {
  test('aparece al entrar y se oculta al aceptar (y persiste)', async ({ page }) => {
    await page.goto('/');
    const banner = page.locator('#cookie-banner');
    await expect(banner).toBeVisible({ timeout: 5000 });
    await page.click('#cookie-accept');
    await expect(banner).toBeHidden();
    const consent = await page.evaluate(() => localStorage.getItem('rqt-cookie-consent'));
    expect(consent).toBe('accepted');
  });
});

test.describe('Cuestionario - navegación', () => {
  test('seleccionar una opción avanza de paso y actualiza el progreso', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page.locator('#quizStepLabel')).toHaveText('Paso 1 de 4');
    await page.click('.opt[data-group="servicio"][data-value="Detección de fugas"]');
    await expect(page.locator('.quiz-step[data-step="2"]')).toBeVisible();
    await expect(page.locator('#quizStepLabel')).toHaveText('Paso 2 de 4');
  });

  test('el botón Atrás vuelve al paso anterior', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await page.click('.opt[data-group="servicio"][data-value="Detección de fugas"]');
    await expect(page.locator('.quiz-step[data-step="2"]')).toBeVisible();
    await page.click('#quizBack');
    await expect(page.locator('.quiz-step[data-step="1"]')).toBeVisible();
    await expect(page.locator('#quizStepLabel')).toHaveText('Paso 1 de 4');
  });
});

test.describe('Cuestionario - validación', () => {
  test('teléfono OBLIGATORIO: enviar sin teléfono muestra error y no avanza', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    // Rellenamos todo menos el teléfono
    await page.fill('#q-nombre', 'Ana');
    await page.fill('#q-localidad', 'Madrid');
    await page.check('#q-privacy');
    await page.click('#send-wa');
    await expect(page.locator('[data-err="telefono"]')).toBeVisible();
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeHidden();
  });

  test('privacidad OBLIGATORIA: sin aceptar muestra error', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await page.fill('#q-nombre', 'Ana');
    await page.fill('#q-localidad', 'Madrid');
    await page.fill('#q-telefono', '600112233');
    await page.click('#send-wa');
    await expect(page.locator('[data-err="privacy"]')).toBeVisible();
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeHidden();
  });

  test('email OBLIGATORIO: vacío muestra error y no avanza', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page, { email: null }); // sin email a propósito
    await page.click('#send-wa');
    await expect(page.locator('[data-err="email"]')).toBeVisible();
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeHidden();
  });

  test('email OBLIGATORIO: formato inválido muestra error; corregido, continúa', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page, { email: 'esto-no-es-email' });
    await page.click('#send-wa');
    await expect(page.locator('[data-err="email"]')).toBeVisible();
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeHidden();
    // Corregimos el email
    await page.fill('#q-email', 'cliente@correo.com');
    await page.click('#send-wa');
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeVisible();
  });
});

test.describe('Cuestionario - envío', () => {
  test('WhatsApp: genera la URL con número y mensaje, y muestra confirmación', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page);
    await page.click('#send-wa');
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeVisible();
    const opened = await page.evaluate(() => window.__lastOpen);
    expect(opened).toContain('wa.me/34678137051');
    expect(decodeURIComponent(opened)).toContain('Detección de fugas');
    expect(decodeURIComponent(opened)).toContain('Teléfono: 600112233');
  });

  test('reiniciar: "Rellenar otra solicitud" vuelve al paso 1 con los campos limpios', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page);
    await page.click('#send-wa');
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeVisible();
    await page.click('#quiz-restart');
    await expect(page.locator('.quiz-step[data-step="1"]')).toBeVisible();
    await expect(page.locator('#quizNav')).toBeVisible();
    // Volvemos al paso 4 y comprobamos que está limpio
    await goToStep4(page);
    await expect(page.locator('#q-nombre')).toHaveValue('');
    await expect(page.locator('#q-telefono')).toHaveValue('');
    await expect(page.locator('#q-privacy')).not.toBeChecked();
  });
});

test.describe('Seguridad', () => {
  test('la home declara Content-Security-Policy con frame-ancestors none', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const csp = await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content');
    expect(csp).toBeTruthy();
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
  });

  test('los recursos de Phosphor (unpkg) usan integridad SRI', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const links = page.locator('link[href*="unpkg.com"]');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const integrity = await links.nth(i).getAttribute('integrity');
      expect(integrity).toMatch(/^sha384-/);
    }
  });

  test('existe el campo honeypot oculto y no es visible para el usuario', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const honeypot = page.locator('#q-website');
    await expect(honeypot).toHaveCount(1);
    await expect(honeypot).toBeHidden();
  });

  test('HONEYPOT: si un bot rellena el campo trampa, el envío se bloquea', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page);
    // Simula un bot rellenando el campo oculto
    await page.evaluate(() => { document.getElementById('q-website').value = 'http://bot.example'; });
    await page.click('#send-wa');
    // No debe avanzar a la confirmación
    await expect(page.locator('.quiz-step[data-step="done"]')).toBeHidden();
    const opened = await page.evaluate(() => window.__lastOpen);
    expect(opened).toBeFalsy();
  });

  test('las páginas legales también declaran CSP', async ({ page }) => {
    for (const path of ['/aviso-legal.html', '/politica-privacidad.html', '/politica-cookies.html']) {
      await page.goto(path);
      const csp = await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content');
      expect(csp, 'CSP en ' + path).toContain("frame-ancestors 'none'");
    }
  });
});

test.describe('Páginas legales', () => {
  test('los enlaces del footer llevan a las páginas legales', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page.locator('footer a[href="aviso-legal.html"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="politica-privacidad.html"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="politica-cookies.html"]').first()).toBeVisible();
  });

  test('la política de privacidad carga y muestra el correo de contacto correcto', async ({ page }) => {
    await page.goto('/politica-privacidad.html');
    await expect(page.locator('h1')).toHaveText('Política de privacidad');
    await expect(page.locator('a[href="mailto:hola@rqtpools.com"]').first()).toBeVisible();
  });
});

test.describe('Móvil', () => {
  test('la cabecera muestra el botón de llamar en móvil', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('header a[aria-label="Llamar al 678 13 70 51"]')).toBeVisible();
  });

  test('el menú móvil indica si está abierto (aria-expanded)', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('#menuBtn')).toHaveAttribute('aria-expanded', 'false');
    await page.click('#menuBtn');
    await expect(page.locator('#mobileMenu')).toBeVisible();
    await expect(page.locator('#menuBtn')).toHaveAttribute('aria-expanded', 'true');
  });
});

test.describe('Hero y contenido', () => {
  test('el hero se ve sin esperar a la animación de entrada (LCP)', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page.locator('h1').locator('xpath=ancestor::*[contains(@class,"reveal")]')).toHaveCount(0);
    await expect(page.locator('img[src="assets/img/hero.webp"]').locator('xpath=ancestor::*[contains(@class,"reveal")]')).toHaveCount(0);
  });

  test('no hay sección de opiniones', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    await expect(page.locator('#opiniones')).toHaveCount(0);
    await expect(page.locator('a[href="#opiniones"]')).toHaveCount(0);
  });

  test('el FAQPage del schema coincide con las preguntas visibles', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const faq = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'FAQPage');
    const visibles = (await page.locator('#faq summary').allTextContents()).map((t) => t.trim());
    expect(faq.mainEntity.map((q) => q.name)).toEqual(visibles);
  });

  test('teléfono con formato inválido muestra error', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await stubWindowOpen(page);
    await page.goto('/');
    await goToStep4(page);
    await fillStep4(page);
    await page.fill('#q-telefono', 'abc');
    await page.click('#send-wa');
    await expect(page.locator('[data-err="telefono"]')).toBeVisible();
    await expect(page.locator('#q-telefono')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#q-telefono')).toBeFocused();
  });
});

test.describe('Páginas de servicio (SEO)', () => {
  test('cada tarjeta de servicio enlaza a una página que existe, con H1, canonical y schema', async ({ page, request }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const hrefs = await page.locator('#servicios h3 a').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    expect(hrefs.length).toBe(9);
    for (const href of hrefs) {
      await page.goto('/' + href);
      await expect(page.locator('h1')).toHaveCount(1);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe('https://rqtpools.com/' + href);
      const types = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((b) => JSON.parse(b)['@type']);
      expect(types).toEqual(expect.arrayContaining(['Service', 'WebPage', 'FAQPage']));
    }
  });

  test('sitemap sin anclas (#) e incluye las páginas de servicio; robots y llms.txt existen', async ({ request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text();
    expect(sitemap).not.toContain('#');
    expect(sitemap).toContain('/servicios/cambio-lecho-filtrante/');
    expect((await request.get('/robots.txt')).ok()).toBe(true);
    const llms = await (await request.get('/llms.txt')).text();
    expect(llms).toContain('# RQT Pools');
  });
});

test.describe('Nombre del sitio e icono en Google', () => {
  test('WebSite se llama "RQT Pools" y no usa el dominio como nombre alternativo', async ({ page }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const website = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'WebSite');
    expect(website.name).toBe('RQT Pools');
    expect(JSON.stringify(website.alternateName)).not.toContain('.com');
  });

  test('el favicon es un archivo real (no data:) y se sirve correctamente', async ({ page, request }) => {
    await dismissCookiesBeforeLoad(page);
    await page.goto('/');
    const hrefs = await page.locator('link[rel="icon"]').evaluateAll((ls) => ls.map((l) => l.getAttribute('href')));
    expect(hrefs).toContain('/favicon.ico');
    for (const h of hrefs) {
      expect(h.startsWith('data:')).toBe(false);
      expect((await request.get(h)).ok(), h).toBe(true);
    }
  });
});
