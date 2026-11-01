// Iconos Phosphor auto-alojados como sprite SVG (assets/icons.svg).
//
// 1. Convierte cualquier <i class="ph ph-NOMBRE ..."></i> (o ph-fill) de las páginas
//    en <svg class="icon ..."><use href="/assets/icons.svg#ph-NOMBRE"></use></svg>.
// 2. Genera assets/icons.svg solo con los iconos que se usan.
//
// Antes se cargaban 2 hojas de estilo + 2 fuentes de iconos desde unpkg (~300 KB que
// bloqueaban el renderizado). Ahora es un único SVG pequeño y cacheable.
//
// Uso: npm run build:icons (incluido en npm run build)
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CORE = join(ROOT, 'node_modules', '@phosphor-icons', 'core', 'assets');

const files = [
  'index.html', 'aviso-legal.html', 'politica-privacidad.html', 'politica-cookies.html',
  'scripts/build-servicios.mjs',
  ...globSync('servicios/*/index.html', { cwd: ROOT })
];

const I_TAG = /<i class="(ph|ph-fill) ph-([a-z0-9-]+)([^"]*)"([^>]*)><\/i>/g;
const USE = /#(ph(?:-fill)?)-([a-z0-9-]+)"/g;
const used = new Set();

for (const f of files) {
  const path = join(ROOT, f);
  let src = await readFile(path, 'utf8');
  const out = src.replace(I_TAG, (_, weight, name, extra, attrs) => {
    const cleanAttrs = attrs.replace(/\s*aria-hidden="true"/g, '');
    return `<svg class="icon${extra}"${cleanAttrs} aria-hidden="true"><use href="/assets/icons.svg#${weight}-${name}"></use></svg>`;
  });
  for (const m of out.matchAll(USE)) used.add(`${m[1]}|${m[2]}`);
  if (out !== src) {
    await writeFile(path, out, 'utf8');
    console.log('✓ iconos convertidos en ' + f);
  }
}

const symbols = [];
for (const key of [...used].sort()) {
  const [weight, name] = key.split('|');
  const file = weight === 'ph-fill' ? join(CORE, 'fill', `${name}-fill.svg`) : join(CORE, 'regular', `${name}.svg`);
  const svg = await readFile(file, 'utf8');
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').trim();
  symbols.push(`<symbol id="${weight}-${name}" viewBox="0 0 256 256">${inner}</symbol>`);
}
await writeFile(join(ROOT, 'assets', 'icons.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">\n${symbols.join('\n')}\n</svg>\n`, 'utf8');
console.log(`✓ assets/icons.svg (${symbols.length} iconos)`);
