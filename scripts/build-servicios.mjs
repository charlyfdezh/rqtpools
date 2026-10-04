// Genera las páginas de servicio (/servicios/<slug>/index.html) y el sitemap.xml
// a partir de scripts/servicios-data.mjs.
//
// Uso:  npm run build:pages   (después ejecuta npm run build:css)
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICIOS, ZONAS } from './servicios-data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://rqtpools.com';
const HOY = new Date().toISOString().slice(0, 10);
const bySlug = Object.fromEntries(SERVICIOS.map((s) => [s.slug, s]));

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ld = (obj) => '  <script type="application/ld+json">\n' + JSON.stringify(obj, null, 2).split('\n').map((l) => '  ' + l).join('\n') + '\n  </script>';

const LOGO = (color, aria) => `<svg viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto" ${aria ? 'role="img" aria-label="RQT Pools"' : 'aria-hidden="true"'}>
          <text x="0" y="34" font-family="'Outfit',sans-serif" font-weight="800" font-size="34" letter-spacing="-1" fill="${color}">RQT</text>
          <path d="M2 41 C 14 34, 28 46, 42 40 C 54 35, 62 43, 72 40" stroke="#1a8fb8" stroke-width="3.2" fill="none" stroke-linecap="round" />
          <path d="M4 46 C 16 39, 30 51, 44 45 C 56 40, 64 48, 73 45" stroke="#00c2d4" stroke-width="2.6" fill="none" stroke-linecap="round" opacity="0.9" />
          <text x="86" y="34" font-family="'Outfit',sans-serif" font-weight="700" font-size="22" letter-spacing="1" fill="#00A3C4">Pools</text>
        </svg>`;

function page(s) {
  const url = `${SITE}/servicios/${s.slug}/`;
  const [w, h] = s.imagenSize;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url + '#service',
    name: s.h1,
    serviceType: s.nombre,
    description: s.intro,
    url,
    image: `${SITE}/assets/img/${s.imagen}`,
    provider: { '@type': 'LocalBusiness', '@id': `${SITE}/#business`, name: 'RQT Pools', telephone: '+34678137051', url: `${SITE}/` },
    areaServed: ZONAS.map((z) => ({ '@type': 'City', name: z.replace(' capital', '') })),
    offers: { '@type': 'Offer', description: 'Presupuesto gratuito y sin compromiso', priceCurrency: 'EUR', url: `${SITE}/#cuestionario` }
  };
  const schemaPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: s.title,
    description: s.description,
    inLanguage: 'es-ES',
    dateModified: HOY,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': url + '#service' },
    primaryImageOfPage: `${SITE}/assets/img/${s.imagen}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/#servicios` },
        { '@type': 'ListItem', position: 3, name: s.nombre, item: url }
      ]
    }
  };
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };

  const incluye = s.incluye.map((i) => `            <li class="flex items-start gap-3"><i class="ph-fill ph-check-circle mt-0.5 shrink-0 text-[20px] text-brandDeep" aria-hidden="true"></i><span>${esc(i)}</span></li>`).join('\n');
  const extra = s.extra.map((e) => `
      <section class="mt-14">
        <h2 class="font-display text-2xl font-800 tracking-tight md:text-3xl">${esc(e.h2)}</h2>
        <div class="mt-4 text-[16px] leading-relaxed">
${e.html}
        </div>
      </section>`).join('\n');
  const proceso = s.proceso.map(([t, d], i) => `          <li class="bg-white p-6">
            <span class="font-display text-4xl font-800 text-brand/30">0${i + 1}</span>
            <h3 class="mt-3 font-display text-lg font-700">${esc(t)}</h3>
            <p class="mt-1.5 text-sm text-muted">${esc(d)}</p>
          </li>`).join('\n');
  const faqs = s.faqs.map(([q, a]) => `          <details class="group p-5 sm:p-6">
            <summary class="flex items-center justify-between gap-4 font-display text-lg font-700">${esc(q)} <i class="ph ph-caret-down faq-chevron text-brandDeep" aria-hidden="true"></i></summary>
            <p class="mt-3 text-muted">${esc(a)}</p>
          </details>`).join('\n');
  const relacionados = s.relacionados.map((r) => `          <a href="/servicios/${r}/" class="flex items-center justify-between gap-3 rounded-[1.25rem] border border-line bg-white p-5 font-700 transition hover:border-brand hover:text-brandDeep">${esc(bySlug[r].nombre)} <i class="ph ph-arrow-right text-brandDeep" aria-hidden="true"></i></a>`).join('\n');
  const otros = SERVICIOS.map((o) => `          <li><a href="/servicios/${o.slug}/" class="transition hover:text-white">${esc(o.nombre)}</a></li>`).join('\n');

  return `<!doctype html>
<!-- Página generada por scripts/build-servicios.mjs. No la edites a mano: cambia scripts/servicios-data.mjs y ejecuta npm run build:pages -->
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'none'; style-src 'self' 'unsafe-inline' https://fonts.bunny.net https://unpkg.com; font-src 'self' https://fonts.bunny.net https://unpkg.com; img-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />

  <title>${esc(s.title)}</title>
  <meta name="description" content="${esc(s.description)}" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="RQT Pools" />
  <meta property="og:title" content="${esc(s.title)}" />
  <meta property="og:description" content="${esc(s.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE}/assets/img/og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#102A43" />

  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="preload" as="image" fetchpriority="high" href="/assets/img/${s.imagen}" />
  <link rel="preconnect" href="https://fonts.bunny.net" crossorigin />
  <link href="https://fonts.bunny.net/css?family=outfit:400,500,600,700,800|manrope:400,500,600,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" integrity="sha384-6p9AefaqUhEVheRlj1mpAkbngHXy9mbYMrIdcIt4Jlc9lOLIablJq3bBsLOjGwZ7" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" integrity="sha384-pPVoXE8ft+zxKtxIDDI7SfTK6y95NHm4qa+hKEg/hs8VkjW5IP+9/dGOPCbDpUPl" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/assets/styles.css" />
  <style>
    body { font-family: 'Manrope', sans-serif; }
    .font-display { font-family: 'Outfit', sans-serif; }
    details > summary { list-style: none; cursor: pointer; }
    details > summary::-webkit-details-marker { display: none; }
    details[open] .faq-chevron { transform: rotate(180deg); }
    .faq-chevron { transition: transform .25s ease; }
  </style>

${ld(schemaService)}
${ld(schemaPage)}
${ld(schemaFaq)}
</head>

<body class="bg-page text-ink antialiased selection:bg-brand/20">

  <header class="sticky top-0 z-40 border-b border-line/70 bg-page/90 backdrop-blur-md">
    <nav class="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
      <a href="/" class="flex items-center text-ink" aria-label="RQT Pools - Inicio">
        ${LOGO('currentColor', false)}
      </a>
      <div class="hidden items-center gap-8 lg:flex">
        <a href="/#servicios" class="text-sm font-600 text-muted transition hover:text-ink">Servicios</a>
        <a href="/#zonas" class="text-sm font-600 text-muted transition hover:text-ink">Zonas</a>
        <a href="/#faq" class="text-sm font-600 text-muted transition hover:text-ink">Preguntas</a>
        <a href="tel:+34678137051" class="flex items-center gap-2 text-sm font-700 text-brandDeep"><i class="ph ph-phone-call text-[18px]" aria-hidden="true"></i> 678 13 70 51</a>
        <a href="/#cuestionario" class="rounded-full bg-brandDeep px-5 py-2.5 text-sm font-700 text-white shadow-sm transition hover:bg-ink">Pedir presupuesto</a>
      </div>
      <div class="flex items-center gap-2 lg:hidden">
        <a href="tel:+34678137051" aria-label="Llamar al 678 13 70 51" class="inline-flex h-10 items-center gap-2 rounded-full bg-brandDeep px-4 text-sm font-700 text-white shadow-sm"><i class="ph-fill ph-phone-call text-[18px]" aria-hidden="true"></i> Llamar</a>
        <a href="/#cuestionario" class="hidden h-10 items-center rounded-full border sm:inline-flex border-line bg-white px-4 text-sm font-700 text-ink">Presupuesto</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="border-b border-line bg-white">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-12 lg:pb-20 lg:pt-12">
        <div class="lg:col-span-7">
          <nav aria-label="Ruta de navegación" class="mb-6 text-sm text-muted">
            <ol class="flex flex-wrap items-center gap-1.5">
              <li><a href="/" class="hover:text-ink">Inicio</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/#servicios" class="hover:text-ink">Servicios</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" class="font-600 text-ink">${esc(s.nombre)}</li>
            </ol>
          </nav>
          <h1 class="font-display text-4xl font-800 leading-[1.08] tracking-tight md:text-5xl">${esc(s.h1)}</h1>
          <p class="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">${esc(s.intro)}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/#cuestionario" class="inline-flex items-center justify-center gap-2 rounded-full bg-brandDeep px-7 py-3.5 font-700 text-white shadow-sm transition hover:bg-ink"><i class="ph ph-clipboard-text text-[20px]" aria-hidden="true"></i> Pedir presupuesto gratis</a>
            <a href="tel:+34678137051" class="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 font-700 text-ink transition hover:border-brand hover:text-brandDeep"><i class="ph ph-phone-call text-[20px]" aria-hidden="true"></i> 678 13 70 51</a>
          </div>
        </div>
        <div class="lg:col-span-5">
          <img src="/assets/img/${s.imagen}" alt="${esc(s.imagenAlt)}" width="${w}" height="${h}" class="h-[260px] w-full rounded-[1.5rem] object-cover shadow-xl shadow-brand/10 sm:h-[360px]" fetchpriority="high" />
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
      <section>
        <h2 class="font-display text-2xl font-800 tracking-tight md:text-3xl">${esc(s.incluyeTitulo)}</h2>
        <ul class="mt-5 space-y-3 text-[16px]">
${incluye}
        </ul>
      </section>
${extra}

      <section class="mt-14">
        <h2 class="font-display text-2xl font-800 tracking-tight md:text-3xl">Cómo trabajamos</h2>
        <ol class="mt-5 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-3">
${proceso}
        </ol>
      </section>

      <section class="mt-14">
        <h2 class="font-display text-2xl font-800 tracking-tight md:text-3xl">Preguntas frecuentes</h2>
        <div class="mt-5 divide-y divide-line rounded-[1.25rem] border border-line bg-white">
${faqs}
        </div>
      </section>

      <section class="mt-14 rounded-[1.25rem] border border-brand/15 bg-tint p-6">
        <h2 class="font-display text-xl font-800">Zonas donde trabajamos</h2>
        <p class="mt-2 text-muted">${esc(s.nombre)} en ${ZONAS.join(', ')} y alrededores de la Comunidad de Madrid. Lunes a sábado, de 8:00 a 20:00.</p>
      </section>

      <section class="mt-14">
        <h2 class="font-display text-2xl font-800 tracking-tight md:text-3xl">Otros servicios</h2>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
${relacionados}
        </div>
      </section>
    </div>

    <section class="bg-brandDeep">
      <div class="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8">
        <h2 class="mx-auto max-w-2xl font-display text-3xl font-800 tracking-tight text-white">Pide tu presupuesto sin compromiso</h2>
        <p class="mx-auto mt-3 max-w-xl text-white/85">Te respondemos en 24-48h laborables.</p>
        <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/#cuestionario" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-700 text-brandDeep shadow-sm transition hover:bg-tint"><i class="ph ph-clipboard-text text-[20px]" aria-hidden="true"></i> Pedir presupuesto</a>
          <a href="https://wa.me/34678137051" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-700 text-white transition hover:bg-white/20"><i class="ph-fill ph-whatsapp-logo text-[22px]" aria-hidden="true"></i> Escríbenos por WhatsApp</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-ink text-white/80">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      <div>
        <a href="/" class="flex items-center" aria-label="RQT Pools - Inicio">
          ${LOGO('#ffffff', true)}
        </a>
        <p class="mt-4 max-w-sm text-sm text-white/65">Mantenimiento, tratamiento del agua y reparación de piscinas en Madrid para particulares, comunidades y negocios.</p>
      </div>
      <div>
        <p class="mb-4 font-display text-sm font-700 uppercase tracking-wide text-white">Servicios</p>
        <ul class="space-y-2.5 text-sm">
${otros}
        </ul>
      </div>
      <div>
        <p class="mb-4 font-display text-sm font-700 uppercase tracking-wide text-white">Contacto</p>
        <ul class="space-y-3 text-sm">
          <li><a href="tel:+34678137051" class="transition hover:text-white">+34 678 13 70 51</a></li>
          <li><a href="https://wa.me/34678137051" target="_blank" rel="noopener" class="transition hover:text-white">WhatsApp</a></li>
          <li><a href="mailto:hola@rqtpools.com" class="transition hover:text-white">hola@rqtpools.com</a></li>
        </ul>
      </div>
      <div>
        <p class="mb-4 font-display text-sm font-700 uppercase tracking-wide text-white">Información</p>
        <ul class="space-y-3 text-sm">
          <li>Lun a Sáb, 8:00 - 20:00</li>
          <li>Madrid y alrededores</li>
          <li><a href="/#cuestionario" class="font-700 text-white">Pedir presupuesto</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/55 sm:flex-row sm:px-8">
        <p>© 2026 RQT Pools. Todos los derechos reservados.</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <a href="/aviso-legal.html" class="transition hover:text-white">Aviso legal</a>
          <a href="/politica-privacidad.html" class="transition hover:text-white">Política de privacidad</a>
          <a href="/politica-cookies.html" class="transition hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/34678137051" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp"
     class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1ebe5d] text-white shadow-lg shadow-black/20 transition hover:scale-105">
    <i class="ph-fill ph-whatsapp-logo text-[30px]" aria-hidden="true"></i>
  </a>
</body>
</html>
`;
}

function sitemap() {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly' },
    ...SERVICIOS.map((s) => ({ loc: `${SITE}/servicios/${s.slug}/`, priority: '0.8', changefreq: 'monthly' })),
    ...['aviso-legal.html', 'politica-privacidad.html', 'politica-cookies.html'].map((p) => ({ loc: `${SITE}/${p}`, priority: '0.2', changefreq: 'yearly' }))
  ];
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${HOY}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n') +
    '\n</urlset>\n';
}

for (const s of SERVICIOS) {
  const out = join(ROOT, 'servicios', s.slug, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, page(s), 'utf8');
  console.log('✓ servicios/' + s.slug + '/');
}
await writeFile(join(ROOT, 'sitemap.xml'), sitemap(), 'utf8');
console.log('✓ sitemap.xml');
