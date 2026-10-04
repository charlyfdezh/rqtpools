// Contenido de las páginas de servicio (/servicios/<slug>/).
// Edita aquí el texto y regenera con: npm run build:pages
//
// Pautas de redacción (SEO + buscadores con IA):
//  - "intro" responde en 2-3 frases a la pregunta principal. Es lo que suelen citar
//    Google y ChatGPT/Gemini/Claude, así que debe entenderse sin leer nada más.
//  - Solo datos verdaderos y comprobables. Nada de cifras o reseñas inventadas.

export const ZONAS = ['Madrid capital', 'Pozuelo de Alarcón', 'Las Rozas de Madrid', 'Boadilla del Monte', 'Majadahonda', 'Alcobendas'];

export const SERVICIOS = [
  {
    slug: 'mantenimiento-piscinas-madrid',
    nombre: 'Mantenimiento de piscinas',
    title: 'Mantenimiento de Piscinas en Madrid | RQT Pools',
    description: 'Mantenimiento de piscinas en Madrid: limpieza semanal, control del agua y revisión de la depuradora. Sin permanencia. Presupuesto gratis: 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Madrid',
    intro: 'RQT Pools se encarga del mantenimiento periódico de piscinas particulares y comunitarias en Madrid y alrededores. En temporada de baño hacemos una visita semanal en la que limpiamos el vaso, ajustamos la química del agua y revisamos la depuradora, para que la piscina esté siempre lista para bañarse. Sin permanencia y con presupuesto cerrado.',
    imagen: 'servicio-particular.webp', imagenSize: [900, 600],
    imagenAlt: 'Piscina particular con el agua limpia tras el mantenimiento semanal',
    incluyeTitulo: 'Qué incluye cada visita',
    incluye: [
      'Limpieza del fondo y las paredes del vaso.',
      'Limpieza de la línea de flotación.',
      'Vaciado de los cestos de los skimmers y del prefiltro de la bomba.',
      'Medición y ajuste del pH y del desinfectante (cloro o sal).',
      'Lavado y enjuague del filtro cuando lo necesita.',
      'Revisión de la bomba, la depuradora y las horas de filtrado programadas.',
      'Aviso inmediato si vemos una avería o una pérdida de agua.'
    ],
    extra: [
      {
        h2: '¿Cada cuánto hay que hacer el mantenimiento?',
        html: `<p>En temporada de baño (aproximadamente de mayo a septiembre) lo recomendable es <strong>una visita a la semana</strong>: con calor y bañistas el agua consume desinfectante muy rápido y las algas aparecen en pocos días. Fuera de temporada basta con visitas más espaciadas, según el estado de la piscina, o con un <a href="/servicios/apertura-cierre-temporada-piscina/" class="font-700 text-brandDeep underline">invernaje</a> bien hecho.</p>`
      }
    ],
    proceso: [
      ['Nos cuentas tu caso', 'Rellenas el cuestionario o nos llamas. Te respondemos en 24-48h laborables.'],
      ['Visitamos la piscina', 'Vemos el tamaño, el estado del agua y los equipos, y te damos un precio cerrado.'],
      ['Visitas periódicas', 'Venimos con la frecuencia acordada y te avisamos si hay algo que reparar.']
    ],
    faqs: [
      ['¿Cada cuánto hay que mantener una piscina?', 'En temporada de baño lo habitual es una visita semanal. Fuera de temporada basta con un mantenimiento más espaciado para conservar el agua en buen estado.'],
      ['¿Hay permanencia?', 'No. El servicio de mantenimiento no tiene permanencia: puedes darlo de baja cuando quieras.'],
      ['¿Cuánto cuesta el mantenimiento de una piscina en Madrid?', 'Depende del tamaño de la piscina, de la frecuencia de las visitas y del estado del agua y los equipos. Por eso damos un presupuesto cerrado y sin compromiso después de conocer tu piscina.'],
      ['¿Trabajáis también fuera de Madrid capital?', 'Sí. Damos servicio en municipios de la Comunidad de Madrid como Pozuelo de Alarcón, Las Rozas, Boadilla del Monte, Majadahonda y Alcobendas, y alrededores.']
    ],
    relacionados: ['tratamiento-agua-piscina', 'apertura-cierre-temporada-piscina', 'mantenimiento-piscinas-comunidades']
  },

  {
    slug: 'tratamiento-agua-piscina',
    nombre: 'Tratamiento del agua',
    title: 'Tratamiento del Agua de Piscinas en Madrid | RQT Pools',
    description: 'Tratamiento del agua de la piscina en Madrid: ajuste de pH y cloro, agua verde o turbia y piscinas de sal. Presupuesto gratis. Tel. 678 13 70 51.',
    h1: 'Tratamiento del agua de la piscina',
    intro: 'Un agua bien tratada es transparente, no irrita los ojos ni la piel y no deja crecer algas. En RQT Pools medimos y ajustamos el pH, el desinfectante (cloro o sal) y la alcalinidad, y si el agua ya está verde o turbia aplicamos un tratamiento de choque para recuperarla. Trabajamos en Madrid y alrededores.',
    imagen: 'servicio-particular.webp', imagenSize: [900, 600],
    imagenAlt: 'Agua de piscina transparente y equilibrada',
    incluyeTitulo: 'Qué hacemos',
    incluye: [
      'Análisis del agua: pH, cloro libre, alcalinidad y, en piscinas de sal, nivel de sal.',
      'Ajuste del pH y del desinfectante con productos profesionales.',
      'Tratamiento de choque para agua verde, turbia o con algas.',
      'Revisión del filtrado: sin buena filtración ningún producto funciona.',
      'Control del clorador salino en piscinas de sal.'
    ],
    extra: [
      {
        h2: 'Valores de referencia del agua',
        html: `<p>Estos son los rangos orientativos que buscamos en cada visita. En piscinas de uso colectivo se aplican además los límites del Real Decreto 742/2013.</p>
<div class="mt-5 overflow-x-auto rounded-[1.25rem] border border-line bg-white">
  <table class="w-full text-left text-[15px]">
    <thead class="bg-tint text-ink"><tr><th class="px-5 py-3 font-700">Parámetro</th><th class="px-5 py-3 font-700">Rango orientativo</th><th class="px-5 py-3 font-700">Si se sale del rango</th></tr></thead>
    <tbody class="divide-y divide-line text-muted">
      <tr><td class="px-5 py-3 font-600 text-ink">pH</td><td class="px-5 py-3">7,2 – 7,6</td><td class="px-5 py-3">Con pH alto el cloro pierde eficacia; con pH bajo el agua irrita y corroe.</td></tr>
      <tr><td class="px-5 py-3 font-600 text-ink">Cloro libre</td><td class="px-5 py-3">0,5 – 2 mg/L</td><td class="px-5 py-3">Por debajo aparecen algas y bacterias; por encima, irritación.</td></tr>
      <tr><td class="px-5 py-3 font-600 text-ink">Alcalinidad total</td><td class="px-5 py-3">80 – 120 mg/L</td><td class="px-5 py-3">Si es baja el pH sube y baja sin control.</td></tr>
      <tr><td class="px-5 py-3 font-600 text-ink">Ácido isocianúrico</td><td class="px-5 py-3">Máx. 75 mg/L</td><td class="px-5 py-3">En exceso «bloquea» el cloro y el agua se enturbia.</td></tr>
    </tbody>
  </table>
</div>`
      },
      {
        h2: 'Problemas habituales y su causa',
        html: `<ul class="space-y-3 text-muted">
  <li><strong class="text-ink">Agua verde:</strong> algas por falta de desinfectante, pH alto, poco filtrado o mucho calor.</li>
  <li><strong class="text-ink">Agua turbia o lechosa:</strong> filtro sucio o con el <a href="/servicios/cambio-lecho-filtrante/" class="font-700 text-brandDeep underline">lecho filtrante</a> agotado, pH desequilibrado o exceso de estabilizante.</li>
  <li><strong class="text-ink">Olor fuerte a cloro y ojos rojos:</strong> suele indicar cloro combinado (cloraminas), es decir, falta de desinfección efectiva, no exceso de cloro.</li>
  <li><strong class="text-ink">Manchas o cal en las paredes:</strong> agua dura y pH alto.</li>
</ul>`
      }
    ],
    proceso: [
      ['Análisis', 'Medimos los parámetros del agua y revisamos el filtrado.'],
      ['Corrección', 'Ajustamos pH y desinfectante o aplicamos un tratamiento de choque.'],
      ['Seguimiento', 'Volvemos a medir hasta que el agua queda estable y transparente.']
    ],
    faqs: [
      ['¿Por qué se pone verde el agua de la piscina?', 'Por la proliferación de algas, que aparece cuando falta desinfectante, el pH está alto, el filtrado es insuficiente o hace mucho calor. Se recupera con un tratamiento de choque y corrigiendo la causa.'],
      ['¿Qué pH debe tener el agua de la piscina?', 'Entre 7,2 y 7,6. Es el rango en el que el cloro trabaja bien y el agua no irrita los ojos ni la piel.'],
      ['Si huele mucho a cloro, ¿es que hay demasiado?', 'Normalmente no. El olor fuerte procede del cloro combinado (cloraminas), que se forma cuando el cloro reacciona con la suciedad de los bañistas. Indica que hace falta más desinfección efectiva.'],
      ['¿Una piscina de sal también necesita mantenimiento?', 'Sí. El clorador salino produce cloro a partir de la sal, pero hay que controlar el pH (tiende a subir), el nivel de sal y limpiar la célula de cal periódicamente.']
    ],
    relacionados: ['mantenimiento-piscinas-madrid', 'cambio-lecho-filtrante', 'reparacion-equipos-piscina']
  },

  {
    slug: 'cambio-lecho-filtrante',
    nombre: 'Cambio de lecho filtrante',
    title: 'Cambio de Lecho Filtrante de Piscina en Madrid | RQT Pools',
    description: 'Cambio de arena o vidrio del filtro de la piscina en Madrid. Cuándo cambiar el lecho filtrante, señales y diferencias. Presupuesto gratis: 678 13 70 51.',
    h1: 'Cambio de lecho filtrante de la piscina',
    intro: 'El lecho filtrante es la carga de arena o vidrio que hay dentro del filtro de la piscina y que retiene la suciedad del agua. Con los años se compacta y deja de filtrar bien, por lo que suele cambiarse cada 4-6 años según el uso. En RQT Pools vaciamos el filtro, lo limpiamos, revisamos sus piezas interiores y lo rellenamos con carga nueva, sin necesidad de vaciar la piscina.',
    imagen: 'tecnicos.webp', imagenSize: [1000, 667],
    imagenAlt: 'Piscina con el filtro recién revisado y el agua transparente',
    incluyeTitulo: 'Cómo hacemos el cambio',
    incluye: [
      'Revisión previa del filtro, el manómetro y la válvula selectora.',
      'Vaciado completo de la carga antigua.',
      'Limpieza del interior del filtro y revisión de las crepinas (difusores).',
      'Carga nueva por capas: grava de soporte y arena de sílex o vidrio filtrante.',
      'Puesta en marcha con lavado y enjuague, y comprobación de la presión.'
    ],
    extra: [
      {
        h2: 'Señales de que hay que cambiarlo',
        html: `<ul class="space-y-3 text-muted">
  <li>• El agua sigue turbia aunque el pH y el cloro estén bien.</li>
  <li>• Tienes que lavar el filtro mucho más a menudo que antes.</li>
  <li>• La presión del manómetro sube muy rápido después de lavarlo.</li>
  <li>• Aparece arena en el fondo de la piscina (puede haber una crepina rota).</li>
  <li>• Han pasado más de 4-6 años desde el último cambio.</li>
</ul>`
      },
      {
        h2: '¿Arena o vidrio?',
        html: `<div class="grid gap-4 sm:grid-cols-2">
  <div class="rounded-[1.25rem] border border-line bg-white p-5"><h3 class="font-display text-lg font-700">Arena de sílex</h3><p class="mt-2 text-sm text-muted">La opción tradicional y más económica. Filtra bien, pero se compacta con el tiempo y necesita cambiarse con más frecuencia.</p></div>
  <div class="rounded-[1.25rem] border border-line bg-white p-5"><h3 class="font-display text-lg font-700">Vidrio filtrante</h3><p class="mt-2 text-sm text-muted">Cuesta más, pero filtra partículas más finas, se apelmaza menos y suele durar más que la arena. Además necesita menos lavados, lo que ahorra agua.</p></div>
</div>`
      }
    ],
    proceso: [
      ['Revisión', 'Comprobamos el filtro y te decimos si compensa cambiar la carga.'],
      ['Cambio', 'Vaciamos, limpiamos y rellenamos el filtro con la carga elegida.'],
      ['Puesta en marcha', 'Lavamos, enjuagamos y dejamos la depuradora funcionando.']
    ],
    faqs: [
      ['¿Cada cuánto hay que cambiar el lecho filtrante de la piscina?', 'El lecho filtrante (arena, vidrio o cristal) suele cambiarse cada 4-6 años, dependiendo del uso de la piscina y de la calidad del agua. Lo revisamos sin compromiso.'],
      ['¿Hay que vaciar la piscina para cambiar la arena del filtro?', 'No. El cambio se hace en el filtro, con la depuradora parada y las válvulas cerradas. La piscina se puede seguir usando en cuanto el equipo vuelve a funcionar.'],
      ['¿Es mejor la arena o el vidrio para el filtro?', 'El vidrio filtra más fino, dura más y necesita menos lavados, pero cuesta más. La arena de sílex es más económica. Te recomendamos uno u otro según el uso de tu piscina.']
    ],
    relacionados: ['instalacion-filtros-depuradoras', 'tratamiento-agua-piscina', 'reparacion-equipos-piscina']
  },

  {
    slug: 'instalacion-filtros-depuradoras',
    nombre: 'Filtros y depuradoras',
    title: 'Instalación de Filtros y Depuradoras de Piscina en Madrid | RQT Pools',
    description: 'Instalación y sustitución de filtros, bombas y depuradoras de piscina en Madrid. Te asesoramos según el volumen de tu piscina. Tel. 678 13 70 51.',
    h1: 'Instalación de filtros y depuradoras de piscina',
    intro: 'En RQT Pools instalamos y sustituimos bombas, filtros y depuradoras completas en Madrid y alrededores. Si tu equipo es antiguo, hace ruido o no consigue dejar el agua limpia, te asesoramos para elegir uno adecuado al volumen de tu piscina y lo dejamos instalado, programado y funcionando.',
    imagen: 'tecnicos.webp', imagenSize: [1000, 667],
    imagenAlt: 'Piscina con sistema de filtración y depuradora en funcionamiento',
    incluyeTitulo: 'Qué instalamos',
    incluye: [
      'Bombas de piscina, incluidas las de velocidad variable, que consumen menos.',
      'Filtros de arena o vidrio dimensionados para tu piscina.',
      'Depuradoras completas: bomba, filtro, válvula selectora y conexiones.',
      'Cuadro eléctrico y programación de las horas de filtrado.',
      'Sustitución de equipos antiguos por modelos más eficientes.'
    ],
    extra: [
      {
        h2: 'Cuándo conviene cambiar el equipo',
        html: `<ul class="space-y-3 text-muted">
  <li>• La bomba hace ruido, se calienta o salta el diferencial.</li>
  <li>• Hay fugas en la bomba o en la válvula selectora.</li>
  <li>• El filtro es demasiado pequeño y el agua no se limpia.</li>
  <li>• El equipo tiene muchos años y las reparaciones ya no compensan.</li>
</ul>
<p class="mt-4 text-muted">Si el problema tiene arreglo, te lo decimos: a veces basta con una <a href="/servicios/reparacion-equipos-piscina/" class="font-700 text-brandDeep underline">reparación</a> o un <a href="/servicios/cambio-lecho-filtrante/" class="font-700 text-brandDeep underline">cambio del lecho filtrante</a>.</p>`
      }
    ],
    proceso: [
      ['Valoración', 'Calculamos el volumen de la piscina y revisamos la instalación actual.'],
      ['Propuesta', 'Te recomendamos el equipo adecuado con un precio cerrado.'],
      ['Instalación', 'Montamos, conectamos, programamos y comprobamos que todo funciona.']
    ],
    faqs: [
      ['¿Instaláis depuradoras y filtros nuevos?', 'Sí, instalamos bombas, depuradoras y sistemas de filtración nuevos, además de sustituir equipos antiguos por modelos más eficientes.'],
      ['¿Cuántas horas al día hay que filtrar la piscina?', 'Una regla orientativa en verano es filtrar tantas horas como la mitad de la temperatura del agua (por ejemplo, 13 horas con el agua a 26 °C). Depende también del tamaño del equipo y del uso de la piscina.'],
      ['¿Merece la pena una bomba de velocidad variable?', 'Suele compensar en piscinas que filtran muchas horas, porque a baja velocidad consume bastante menos electricidad que una bomba convencional y hace menos ruido.']
    ],
    relacionados: ['cambio-lecho-filtrante', 'reparacion-equipos-piscina', 'mantenimiento-piscinas-madrid']
  },

  {
    slug: 'lonas-cubiertas-piscina',
    nombre: 'Lonas y cubiertas',
    title: 'Lonas y Cubiertas para Piscina a Medida en Madrid | RQT Pools',
    description: 'Lonas de invierno, cubiertas de verano y mantas térmicas para piscina, a medida e instaladas en Madrid. Presupuesto gratis: 678 13 70 51.',
    h1: 'Lonas y cubiertas para piscina a medida',
    intro: 'En RQT Pools suministramos e instalamos lonas y cubiertas para piscina hechas a medida en Madrid. Las lonas de invierno protegen la piscina cuando no se usa y reducen el mantenimiento; las cubiertas de verano y mantas térmicas reducen la evaporación y conservan el calor del agua.',
    imagen: 'cta-atardecer.webp', imagenSize: [1600, 1067],
    imagenAlt: 'Piscina al atardecer protegida con cubierta a medida',
    incluyeTitulo: 'Tipos de lonas y cubiertas',
    incluye: [
      'Lona de invierno: opaca, impide que entren hojas, suciedad y luz, y frena la aparición de algas.',
      'Cubierta de verano o manta térmica: retiene el calor del agua y reduce la evaporación.',
      'Fabricación a medida según la forma y el tamaño de tu piscina.',
      'Instalación y anclajes por nuestro equipo.'
    ],
    extra: [
      {
        h2: '¿Para qué sirve cada una?',
        html: `<div class="grid gap-4 sm:grid-cols-2">
  <div class="rounded-[1.25rem] border border-line bg-white p-5"><h3 class="font-display text-lg font-700">Lona de invierno</h3><p class="mt-2 text-sm text-muted">Se coloca en otoño, después del <a href="/servicios/apertura-cierre-temporada-piscina/" class="font-700 text-brandDeep underline">invernaje</a>, y se retira en primavera. Mantiene el agua más limpia y facilita mucho la apertura de la temporada.</p></div>
  <div class="rounded-[1.25rem] border border-line bg-white p-5"><h3 class="font-display text-lg font-700">Manta térmica</h3><p class="mt-2 text-sm text-muted">Se usa en temporada de baño cuando la piscina no está en uso. Conserva el calor del sol, reduce la evaporación y el consumo de productos químicos.</p></div>
</div>`
      }
    ],
    proceso: [
      ['Medición', 'Medimos tu piscina y te enseñamos las opciones.'],
      ['Fabricación', 'Encargamos la lona o cubierta a la medida exacta.'],
      ['Instalación', 'La colocamos con sus anclajes y te explicamos cómo usarla.']
    ],
    faqs: [
      ['¿Suministráis lonas y cubiertas para piscina?', 'Sí. Ofrecemos lonas de invierno, cubiertas de verano y mantas térmicas, hechas a medida e instaladas por nuestro equipo.'],
      ['¿Cuándo se pone la lona de invierno?', 'En otoño, cuando termina la temporada de baño y después de hacer el invernaje de la piscina. Se retira en primavera, antes de ponerla a punto.'],
      ['¿Una manta térmica calienta la piscina?', 'No calienta por sí misma, pero conserva el calor que el agua recibe del sol y evita que se pierda por la noche y por evaporación.']
    ],
    relacionados: ['apertura-cierre-temporada-piscina', 'mantenimiento-piscinas-madrid', 'mantenimiento-piscinas-comunidades']
  },

  {
    slug: 'reparacion-equipos-piscina',
    nombre: 'Reparación de equipos',
    title: 'Reparación de Bombas y Depuradoras de Piscina en Madrid | RQT Pools',
    description: 'Reparación de bombas, depuradoras, filtros y cloradores salinos de piscina en Madrid. Diagnóstico y presupuesto sin compromiso. Tel. 678 13 70 51.',
    h1: 'Reparación de bombas y equipos de piscina',
    intro: 'En RQT Pools diagnosticamos y reparamos averías en bombas, depuradoras, filtros y cloradores salinos de piscinas en Madrid. Si la bomba no arranca, hace ruido o pierde agua, o el clorador salino marca un error, revisamos el equipo y te decimos con claridad si compensa repararlo o sustituirlo.',
    imagen: 'tecnicos.webp', imagenSize: [1000, 667],
    imagenAlt: 'Equipos de depuración de piscina revisados por un técnico',
    incluyeTitulo: 'Averías que reparamos',
    incluye: [
      'Bomba que no arranca, se para o hace saltar el diferencial.',
      'Bomba ruidosa o que pierde agua por el cierre mecánico.',
      'Bomba que no ceba o en la que entra aire.',
      'Válvula selectora que pierde agua o funciona mal.',
      'Filtro con presión anormal en el manómetro.',
      'Clorador salino que no produce cloro o muestra un error.'
    ],
    extra: [
      {
        h2: '¿Reparar o sustituir?',
        html: `<p class="text-muted">Muchas averías se solucionan cambiando una pieza (rodamientos, cierre mecánico, condensador, juntas o la célula del clorador). Cuando el equipo es muy antiguo o la reparación cuesta casi lo mismo que uno nuevo, te lo decimos y te proponemos una <a href="/servicios/instalacion-filtros-depuradoras/" class="font-700 text-brandDeep underline">sustitución por un modelo más eficiente</a>.</p>`
      }
    ],
    proceso: [
      ['Diagnóstico', 'Revisamos el equipo y localizamos la causa de la avería.'],
      ['Presupuesto', 'Te explicamos las opciones y el precio antes de tocar nada.'],
      ['Reparación', 'Reparamos o sustituimos y comprobamos que todo funciona.']
    ],
    faqs: [
      ['¿Por qué hace ruido la bomba de la piscina?', 'Las causas más habituales son rodamientos desgastados, entrada de aire en el circuito, un prefiltro obstruido o falta de agua en la bomba. Conviene revisarla pronto para evitar que se queme el motor.'],
      ['¿Por qué el clorador salino no produce cloro?', 'Suele deberse a una célula incrustada de cal, a un nivel de sal bajo o a una célula que ha llegado al final de su vida útil. Revisamos el equipo y te decimos qué necesita.'],
      ['¿Reparáis equipos de cualquier marca?', 'Revisamos bombas, filtros, depuradoras y cloradores salinos de las marcas habituales. Si hay que pedir una pieza, te lo indicamos en el presupuesto.']
    ],
    relacionados: ['instalacion-filtros-depuradoras', 'deteccion-fugas-piscina', 'cambio-lecho-filtrante']
  },

  {
    slug: 'deteccion-fugas-piscina',
    nombre: 'Detección de fugas',
    title: 'Detección y Reparación de Fugas en Piscinas en Madrid | RQT Pools',
    description: '¿Tu piscina pierde agua? Detectamos y reparamos fugas en el vaso, tuberías y equipos en Madrid. Cómo saber si es fuga o evaporación. Tel. 678 13 70 51.',
    h1: 'Detección y reparación de fugas en piscinas',
    intro: 'Si tu piscina pierde más agua de lo normal, puede haber una fuga en el vaso, en las tuberías o en los equipos de depuración. En RQT Pools comprobamos primero si la pérdida es evaporación o una fuga real, localizamos el punto exacto y lo reparamos, en Madrid y alrededores.',
    imagen: 'servicio-particular.webp', imagenSize: [900, 600],
    imagenAlt: 'Piscina revisada para detectar pérdidas de agua',
    incluyeTitulo: 'Dónde suelen estar las fugas',
    incluye: [
      'Skimmers, boquillas de impulsión y sumideros.',
      'Focos y pasamuros.',
      'Tuberías enterradas del circuito de depuración.',
      'Bomba, filtro, válvula selectora y juntas del cuarto de depuración.',
      'Grietas o juntas deterioradas en el vaso.'
    ],
    extra: [
      {
        h2: '¿Fuga o evaporación? La prueba del cubo',
        html: `<p class="text-muted">Es normal que en verano la piscina pierda algunos milímetros de agua al día por evaporación. Para saber si hay una fuga, puedes hacer esta prueba:</p>
<ol class="mt-4 space-y-3 text-muted">
  <li><strong class="text-ink">1.</strong> Llena un cubo con agua de la piscina y colócalo en el primer escalón, de forma que quede sumergido parcialmente.</li>
  <li><strong class="text-ink">2.</strong> Marca el nivel del agua dentro del cubo y el nivel de la piscina por fuera.</li>
  <li><strong class="text-ink">3.</strong> Espera 24-48 horas sin bañarte y sin rellenar la piscina.</li>
  <li><strong class="text-ink">4.</strong> Si el nivel de la piscina ha bajado claramente más que el del cubo, hay una fuga.</li>
</ol>
<p class="mt-4 text-muted">Otras señales: tener que rellenar a menudo, humedades o charcos cerca de la piscina o en el cuarto de depuración, baldosas sueltas o aire en la bomba.</p>`
      }
    ],
    proceso: [
      ['Comprobación', 'Confirmamos que la pérdida no es solo evaporación.'],
      ['Localización', 'Revisamos el vaso, las piezas empotradas, el circuito y los equipos para encontrar el origen.'],
      ['Reparación', 'Reparamos la fuga y comprobamos que el nivel se mantiene.']
    ],
    faqs: [
      ['¿Cómo sé si mi piscina tiene una fuga?', 'Haz la prueba del cubo: coloca un cubo con agua en el escalón, marca ambos niveles y compáralos a las 24-48 horas. Si la piscina baja bastante más que el cubo, hay una fuga.'],
      ['¿Cuánta agua pierde una piscina por evaporación?', 'Depende del calor, el viento y el sol, pero en verano es normal perder algunos milímetros al día. Pérdidas mayores o constantes suelen indicar una fuga.'],
      ['¿Dónde suelen estar las fugas de una piscina?', 'Lo más habitual es en las piezas empotradas (skimmers, boquillas, focos), en las tuberías del circuito de depuración y en los equipos. Las grietas en el vaso son menos frecuentes.']
    ],
    relacionados: ['reparacion-equipos-piscina', 'mantenimiento-piscinas-madrid', 'mantenimiento-piscinas-comunidades']
  },

  {
    slug: 'apertura-cierre-temporada-piscina',
    nombre: 'Apertura y cierre de temporada',
    title: 'Invernaje y Puesta a Punto de Piscinas en Madrid | RQT Pools',
    description: 'Cierre de temporada (invernaje) y apertura de piscinas en Madrid. Qué incluye, cuándo hacerlo y cómo evitar el agua verde en primavera. Tel. 678 13 70 51.',
    h1: 'Invernaje y puesta a punto de la piscina',
    intro: 'En otoño hacemos el invernaje (cierre de temporada) de la piscina para que pase el invierno protegida, y en primavera la ponemos a punto para el baño. Así evitas encontrarte el agua verde en mayo, ahorras productos y alargas la vida del vaso y de los equipos. Damos este servicio en Madrid y alrededores.',
    imagen: 'cta-atardecer.webp', imagenSize: [1600, 1067],
    imagenAlt: 'Piscina al atardecer preparada para el cierre de temporada',
    incluyeTitulo: 'Cierre de temporada (invernaje)',
    incluye: [
      'Limpieza a fondo del vaso, la línea de flotación y los skimmers.',
      'Ajuste del pH y cloración de choque.',
      'Aplicación de producto de invernaje para frenar las algas.',
      'Lavado del filtro y ajuste de las horas de filtrado para el invierno.',
      'Protección de los equipos frente a las heladas.',
      'Colocación de la lona de invierno, si la tienes.'
    ],
    extra: [
      {
        h2: 'Apertura de temporada (puesta a punto)',
        html: `<ul class="space-y-3 text-muted">
  <li>• Retirada y limpieza de la lona de invierno.</li>
  <li>• Limpieza del fondo y las paredes, y recuperación del nivel de agua.</li>
  <li>• Revisión de la bomba, el filtro y el clorador antes del verano.</li>
  <li>• Equilibrado del agua y tratamiento de choque.</li>
  <li>• Programación del filtrado de verano.</li>
</ul>
<p class="mt-4 text-muted">Después puedes seguir con nuestro <a href="/servicios/mantenimiento-piscinas-madrid/" class="font-700 text-brandDeep underline">mantenimiento semanal</a> o encargarte tú.</p>`
      }
    ],
    proceso: [
      ['Reserva', 'Nos dices si quieres cierre, apertura o ambos.'],
      ['Visita', 'Hacemos el trabajo completo en tu piscina.'],
      ['Seguimiento', 'Te dejamos indicaciones y volvemos cuando toque.']
    ],
    faqs: [
      ['¿Cuándo hay que hacer el invernaje de la piscina?', 'En otoño, cuando termina la temporada de baño y el agua se enfría (como referencia, por debajo de unos 15 °C). En Madrid suele hacerse entre octubre y noviembre.'],
      ['¿Es mejor vaciar la piscina en invierno?', 'En general no. El agua protege el vaso de las heladas y de deformaciones del terreno. Lo recomendable es invernarla con agua y renovarla parcialmente cuando sea necesario.'],
      ['¿Hay que filtrar la piscina en invierno?', 'Sí, aunque muchas menos horas que en verano. Mantener algo de circulación ayuda a que el producto de invernaje se reparta y a evitar que se congelen las tuberías.']
    ],
    relacionados: ['lonas-cubiertas-piscina', 'mantenimiento-piscinas-madrid', 'tratamiento-agua-piscina']
  },

  {
    slug: 'mantenimiento-piscinas-comunidades',
    nombre: 'Comunidades y hoteles',
    title: 'Mantenimiento de Piscinas para Comunidades en Madrid | RQT Pools',
    description: 'Mantenimiento de piscinas de comunidades de vecinos, hoteles y negocios en Madrid. Contrato claro, control del agua y puesta a punto. Tel. 678 13 70 51.',
    h1: 'Mantenimiento de piscinas para comunidades de vecinos y hoteles',
    intro: 'En RQT Pools gestionamos el mantenimiento de piscinas de comunidades de vecinos, hoteles y negocios en Madrid. Nos ocupamos de la limpieza, del control de la calidad del agua, de los equipos y de la apertura y el cierre de temporada, con un contrato claro adaptado al uso de cada piscina.',
    imagen: 'servicio-comunidad.webp', imagenSize: [900, 675],
    imagenAlt: 'Piscina de una comunidad de vecinos con mantenimiento profesional',
    incluyeTitulo: 'Qué incluye el contrato',
    incluye: [
      'Visitas programadas durante la temporada de baño.',
      'Control de los parámetros del agua (pH, desinfectante y transparencia).',
      'Limpieza del vaso, los skimmers y la línea de flotación.',
      'Revisión de bombas, filtros y cloradores.',
      'Apertura y cierre de temporada.',
      'Atención a incidencias y averías.'
    ],
    extra: [
      {
        h2: 'Normativa de piscinas de uso colectivo',
        html: `<p class="text-muted">Las piscinas de uso colectivo están sujetas a normativa sanitaria: a nivel estatal, el Real Decreto 742/2013, que fija los criterios técnico-sanitarios de las piscinas, y la normativa autonómica de la Comunidad de Madrid. Te ayudamos a mantener el agua dentro de los parámetros exigidos y a llevar el control que corresponda a tu piscina.</p>`
      }
    ],
    proceso: [
      ['Visita técnica', 'Vemos la piscina, sus equipos y el uso que tiene.'],
      ['Propuesta', 'Te enviamos un contrato con frecuencia y precio cerrados.'],
      ['Gestión', 'Nos ocupamos de todo y somos tu interlocutor durante el año.']
    ],
    faqs: [
      ['¿Trabajáis con comunidades y hoteles?', 'Sí. Ofrecemos contratos de mantenimiento para piscinas comunitarias y de uso público, cumpliendo la normativa sanitaria vigente.'],
      ['¿Podéis coordinaros con el administrador de fincas?', 'Sí. Podemos tratar directamente con el administrador o con el presidente de la comunidad para presupuestos, visitas e incidencias.'],
      ['¿Qué normativa se aplica a las piscinas comunitarias?', 'A nivel estatal, el Real Decreto 742/2013 sobre criterios técnico-sanitarios de las piscinas, además de la normativa de la Comunidad de Madrid. Los requisitos concretos dependen del tipo de piscina.']
    ],
    relacionados: ['mantenimiento-piscinas-madrid', 'tratamiento-agua-piscina', 'apertura-cierre-temporada-piscina']
  }
];
