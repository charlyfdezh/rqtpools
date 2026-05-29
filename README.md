# RQT Pools

Sitio web profesional de **RQT Pools**, empresa de mantenimiento de piscinas en Madrid.

🌐 [rqtpools.com](https://rqtpools.com) · 📞 +34 678 13 70 51

---

## Servicios

- Mantenimiento integral de piscinas
- Tratamiento y equilibrio del agua
- Cambio de lecho filtrante
- Instalación de filtros y depuradoras
- Lonas y cubiertas
- Reparación de equipos
- Detección de fugas
- Apertura y cierre de temporada
- Mantenimiento para comunidades y hoteles

## Stack técnico

- **HTML5** estático (un solo archivo `index.html` + páginas legales)
- **Tailwind CSS** vía CDN (paleta de marca: navy `#102A43` + teal `#00A3C4`)
- **Bunny Fonts** (alternativa privacy-friendly a Google Fonts)
- **Phosphor Icons** vía CDN
- **JavaScript vanilla** (cuestionario multi-paso, banner de cookies, animaciones)
- **JSON-LD** estructurado (LocalBusiness + FAQPage) para SEO

## Estructura

```
rqtpools/
├── index.html                    # Landing principal
├── aviso-legal.html              # Aviso legal (LSSI-CE)
├── politica-privacidad.html      # Política de privacidad (RGPD)
├── politica-cookies.html         # Política de cookies
├── robots.txt                    # Directrices para rastreadores
├── sitemap.xml                   # Mapa del sitio para Google
└── README.md
```

## Características

- ✅ Diseño responsive
- ✅ SEO optimizado (meta tags, JSON-LD, sitemap, keywords Madrid)
- ✅ RGPD compliant (banner cookies + páginas legales + consentimiento)
- ✅ Cuestionario multi-paso que envía por WhatsApp o correo
- ✅ Botón flotante de WhatsApp permanente
- ✅ Accesibilidad (aria-labels, reduced-motion, contrastes WCAG AA)

## Desarrollo local

Al ser HTML estático, puedes abrir `index.html` directamente o servirlo con cualquier servidor:

```bash
# Opción 1: Python
python -m http.server 4173

# Opción 2: Node
npx serve -l 4173
```

Luego abre [http://localhost:4173](http://localhost:4173).

## Despliegue

Cualquier hosting de archivos estáticos funciona:

- **Netlify**: arrastra la carpeta a netlify.com
- **Vercel**: `vercel deploy` desde la carpeta
- **GitHub Pages**: activar Pages en Settings del repo
- **Hosting clásico**: subir por FTP a la raíz del dominio

## TODO / Roadmap

- [ ] Rellenar marcadores `[xxx]` en las páginas legales con datos fiscales reales
- [ ] Subir favicon en PNG (actualmente SVG inline)
- [ ] Crear imagen Open Graph `og-image.jpg` (1200×630px)
- [ ] Configurar Google Business Profile en Madrid
- [ ] Integrar Formspree o Brevo para almacenar leads
- [ ] Crear páginas dedicadas por servicio (`/servicios/cambio-lecho-filtrante`, etc.)
- [ ] Añadir Google Search Console y enviar sitemap

---

© 2026 RQT Pools. Todos los derechos reservados.
