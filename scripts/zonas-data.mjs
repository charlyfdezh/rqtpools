// Contenido de las páginas por municipio (/zonas/<slug>/).
// Edita aquí el texto y regenera con: npm run build
//
// Para que Google no las vea como páginas "puerta" (todas iguales cambiando el nombre),
// cada una debe tener contenido propio de la zona: urbanizaciones, tipo de piscinas,
// entorno (pinos, heladas...) y preguntas reales de clientes de allí.
// IMPORTANTE: revisa que los barrios/urbanizaciones citados sean zonas donde trabajáis.

const AGUA_CANAL = `<p class="mt-4 text-muted">Como en el resto de la Comunidad de Madrid, el agua llega del Canal de Isabel II y es poco dura (blanda). Eso significa menos problemas de cal que en otras zonas de España, pero también una alcalinidad baja que hace que el pH suba y baje con facilidad. Por eso en cada visita medimos y corregimos la alcalinidad, no solo el pH y el cloro.</p>`;

const PROCESO = [
  ['Nos cuentas tu caso', 'Por el cuestionario, por teléfono o por WhatsApp. Te respondemos en 24-48h laborables.'],
  ['Visitamos la piscina', 'Vemos el agua, el vaso y los equipos, y te damos un precio cerrado.'],
  ['Nos ocupamos de todo', 'Mantenimiento periódico o el trabajo puntual que necesites.']
];

export const ZONAS_PAGINAS = [
  {
    tipo: 'zona',
    slug: 'pozuelo-de-alarcon',
    ciudad: 'Pozuelo de Alarcón',
    nombre: 'Pozuelo de Alarcón',
    title: 'Mantenimiento de Piscinas en Pozuelo de Alarcón | RQT Pools',
    description: 'Mantenimiento de piscinas en Pozuelo de Alarcón: chalets y comunidades. Limpieza, tratamiento del agua, filtros e invernaje. Presupuesto gratis: 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Pozuelo de Alarcón',
    intro: 'RQT Pools se encarga del mantenimiento de piscinas de chalets y comunidades de vecinos en Pozuelo de Alarcón. Hacemos la limpieza semanal en temporada, el tratamiento del agua, el cambio de lecho filtrante, la reparación de equipos y el invernaje, en todo el municipio. Presupuesto gratis y sin permanencia.',
    imagen: 'servicio-particular.webp', imagenSize: [900, 600],
    imagenAlt: 'Piscina de un chalet en Pozuelo de Alarcón con mantenimiento profesional',
    incluyeTitulo: 'Qué hacemos en Pozuelo',
    incluye: [
      'Mantenimiento semanal de piscinas privadas y comunitarias durante la temporada de baño.',
      'Tratamiento del agua y recuperación de agua verde o turbia.',
      'Cambio de lecho filtrante e instalación de filtros y depuradoras.',
      'Reparación de bombas, cloradores salinos y detección de fugas.',
      'Invernaje en otoño, puesta a punto en primavera y lonas a medida.'
    ],
    extra: [
      {
        h2: 'Piscinas en Pozuelo: lo que tenemos en cuenta',
        html: `<p class="text-muted">En Pozuelo hay muchas viviendas unifamiliares con piscina propia y urbanizaciones con piscina comunitaria, en zonas como Somosaguas, Monteclaro, La Finca, Húmera o Montealina. Son jardines con mucho arbolado, sobre todo pinos, así que la pinaza y las hojas llenan los skimmers y el prefiltro muy rápido: en otoño conviene vaciar cestos con más frecuencia y, si la piscina no se usa, poner una <a href="/servicios/lonas-cubiertas-piscina/" class="font-700 text-brandDeep underline">lona de invierno</a>.</p>
${AGUA_CANAL}`
      }
    ],
    proceso: PROCESO,
    faqs: [
      ['¿Hacéis mantenimiento de piscinas en las urbanizaciones de Pozuelo?', 'Sí. Trabajamos en todo el término municipal de Pozuelo de Alarcón, tanto en chalets con piscina propia como en urbanizaciones y comunidades con piscina compartida.'],
      ['¿Por qué se llenan tanto los skimmers en Pozuelo?', 'Por el arbolado: los pinos y los árboles de hoja caduca de muchas parcelas sueltan pinaza y hojas que acaban en el agua. Si no se vacían los cestos con frecuencia, baja el caudal de filtrado y el agua se ensucia antes.'],
      ['¿Cuánto cuesta el mantenimiento de una piscina en Pozuelo?', 'Depende del tamaño de la piscina, de la frecuencia de las visitas y del estado del agua y los equipos. Te damos un presupuesto cerrado y gratuito después de verla.']
    ],
    relacionados: ['mantenimiento-piscinas-madrid', 'apertura-cierre-temporada-piscina', 'lonas-cubiertas-piscina'],
    presupuesto: ['Zona o urbanización de Pozuelo.', 'Medidas aproximadas de la piscina.', 'Si es particular o de comunidad.', 'Fotos de la piscina y del cuarto de depuración.']
  },

  {
    tipo: 'zona',
    slug: 'las-rozas-de-madrid',
    ciudad: 'Las Rozas de Madrid',
    nombre: 'Las Rozas',
    title: 'Mantenimiento de Piscinas en Las Rozas | RQT Pools',
    description: 'Mantenimiento de piscinas en Las Rozas y Las Matas: chalets y comunidades. Limpieza, agua, filtros, reparaciones e invernaje. Presupuesto gratis: 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Las Rozas',
    intro: 'RQT Pools hace el mantenimiento de piscinas particulares y comunitarias en Las Rozas de Madrid, incluidas Las Matas y el resto de urbanizaciones del municipio. Nos ocupamos de la limpieza, el tratamiento del agua, los filtros y depuradoras, las reparaciones y el invernaje. Presupuesto gratis y sin permanencia.',
    imagen: 'servicio-comunidad.webp', imagenSize: [900, 675],
    imagenAlt: 'Piscina comunitaria en Las Rozas de Madrid con mantenimiento profesional',
    incluyeTitulo: 'Qué hacemos en Las Rozas',
    incluye: [
      'Mantenimiento semanal de piscinas de chalets y comunidades.',
      'Control del agua (pH, alcalinidad y desinfectante) en cada visita.',
      'Cambio de arena o vidrio del filtro y sustitución de depuradoras.',
      'Reparación de bombas y cloradores salinos, y detección de fugas.',
      'Invernaje y protección de equipos frente a las heladas.'
    ],
    extra: [
      {
        h2: 'Piscinas en Las Rozas: lo que tenemos en cuenta',
        html: `<p class="text-muted">Las Rozas combina urbanizaciones de chalets, como las de El Pinar, Molino de la Hoz o Las Matas, con muchas comunidades de vecinos con piscina compartida en zonas como El Cantizal o Monterrozas. En el noroeste de Madrid las heladas de invierno son habituales, así que en el <a href="/servicios/apertura-cierre-temporada-piscina/" class="font-700 text-brandDeep underline">invernaje</a> prestamos especial atención a proteger bombas, filtros y tuberías que quedan a la intemperie.</p>
${AGUA_CANAL}`
      }
    ],
    proceso: PROCESO,
    faqs: [
      ['¿Trabajáis en Las Matas y en las urbanizaciones de Las Rozas?', 'Sí. Damos servicio en todo el municipio de Las Rozas de Madrid, incluidas Las Matas y sus urbanizaciones, tanto a particulares como a comunidades.'],
      ['¿Cómo proteger la depuradora de las heladas en invierno?', 'Reduciendo las horas de filtrado pero sin dejar el agua totalmente parada, protegiendo los equipos que están en el exterior y vaciando las tuberías expuestas si es necesario. Lo hacemos como parte del invernaje.'],
      ['¿Lleváis piscinas de comunidades de vecinos en Las Rozas?', 'Sí. Ofrecemos contratos de mantenimiento para piscinas comunitarias, con visitas programadas en temporada y apertura y cierre de la piscina.']
    ],
    relacionados: ['mantenimiento-piscinas-comunidades', 'apertura-cierre-temporada-piscina', 'reparacion-equipos-piscina'],
    presupuesto: ['Zona o urbanización de Las Rozas.', 'Medidas aproximadas de la piscina.', 'Si es particular o de comunidad.', 'Fotos de la piscina y de los equipos.']
  },

  {
    tipo: 'zona',
    slug: 'boadilla-del-monte',
    ciudad: 'Boadilla del Monte',
    nombre: 'Boadilla del Monte',
    title: 'Mantenimiento de Piscinas en Boadilla del Monte | RQT Pools',
    description: 'Mantenimiento de piscinas en Boadilla del Monte: Las Lomas, Valdecabañas, Bonanza y más. Agua, filtros, reparaciones e invernaje. Tel. 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Boadilla del Monte',
    intro: 'RQT Pools se ocupa del mantenimiento de piscinas en Boadilla del Monte, tanto en chalets como en comunidades de vecinos. En temporada hacemos visitas semanales de limpieza y control del agua, y durante todo el año cambiamos filtros, reparamos equipos y hacemos el invernaje y la puesta a punto. Presupuesto gratis y sin permanencia.',
    imagen: 'tecnicos.webp', imagenSize: [1000, 667],
    imagenAlt: 'Piscina de una urbanización de Boadilla del Monte',
    incluyeTitulo: 'Qué hacemos en Boadilla',
    incluye: [
      'Mantenimiento semanal de piscinas privadas y comunitarias.',
      'Tratamiento del agua y tratamientos de choque.',
      'Cambio de lecho filtrante y renovación de depuradoras.',
      'Reparación de bombas y cloradores, y detección de fugas.',
      'Lonas a medida, invernaje y puesta a punto.'
    ],
    extra: [
      {
        h2: 'Piscinas en Boadilla: lo que tenemos en cuenta',
        html: `<p class="text-muted">Boadilla tiene grandes urbanizaciones de chalets, como Las Lomas, Valdecabañas o Bonanza, y desarrollos más recientes con piscina comunitaria, como Parque Boadilla o el Olivar de Mirabal. Muchas parcelas lindan con el monte de Boadilla, por lo que entra más polvo, polen y hojas en el agua: un buen filtrado y lavar el filtro a tiempo son clave. En piscinas grandes merece la pena valorar una <a href="/servicios/instalacion-filtros-depuradoras/" class="font-700 text-brandDeep underline">bomba de velocidad variable</a> para reducir el consumo eléctrico.</p>
${AGUA_CANAL}`
      }
    ],
    proceso: PROCESO,
    faqs: [
      ['¿Trabajáis en Las Lomas, Valdecabañas y Bonanza?', 'Sí. Damos servicio en todo el municipio de Boadilla del Monte, incluidas sus urbanizaciones de chalets y las comunidades con piscina.'],
      ['¿Por qué se ensucia tanto el agua en verano?', 'Por el polvo, el polen y las hojas que trae el viento desde las zonas verdes, junto con el calor. Ayuda filtrar las horas suficientes, lavar el filtro cuando sube la presión y mantener el desinfectante en su rango.'],
      ['¿Hacéis el invernaje de la piscina en Boadilla?', 'Sí. En otoño hacemos el cierre de temporada completo y en primavera la puesta a punto para el baño.']
    ],
    relacionados: ['mantenimiento-piscinas-madrid', 'instalacion-filtros-depuradoras', 'tratamiento-agua-piscina'],
    presupuesto: ['Urbanización o zona de Boadilla.', 'Medidas aproximadas de la piscina.', 'Si es particular o de comunidad.', 'Fotos de la piscina y del cuarto de depuración.']
  },

  {
    tipo: 'zona',
    slug: 'majadahonda',
    ciudad: 'Majadahonda',
    nombre: 'Majadahonda',
    title: 'Mantenimiento de Piscinas en Majadahonda | RQT Pools',
    description: 'Mantenimiento de piscinas en Majadahonda: chalets y comunidades. Limpieza semanal, tratamiento del agua, filtros, reparaciones e invernaje. Tel. 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Majadahonda',
    intro: 'RQT Pools hace el mantenimiento de piscinas de chalets y comunidades de vecinos en Majadahonda. Nos encargamos de la limpieza semanal en temporada, del equilibrio del agua, de los filtros y depuradoras, de las averías y del invernaje, para que la piscina esté lista cuando la quieras usar. Presupuesto gratis y sin permanencia.',
    imagen: 'servicio-particular.webp', imagenSize: [900, 600],
    imagenAlt: 'Piscina particular en Majadahonda con el agua limpia',
    incluyeTitulo: 'Qué hacemos en Majadahonda',
    incluye: [
      'Mantenimiento periódico de piscinas privadas y comunitarias.',
      'Análisis y ajuste del agua en cada visita.',
      'Cambio de lecho filtrante e instalación de equipos.',
      'Reparación de bombas y cloradores salinos.',
      'Detección de fugas, invernaje y lonas de invierno.'
    ],
    extra: [
      {
        h2: 'Piscinas en Majadahonda: lo que tenemos en cuenta',
        html: `<p class="text-muted">En Majadahonda conviven chalets con piscina propia y muchas comunidades de vecinos con piscina compartida. En las zonas próximas al Monte del Pilar, con pinos y encinas, la pinaza y las hojas son la principal fuente de suciedad: se acumulan en el fondo y en los skimmers y consumen desinfectante. En otoño, una <a href="/servicios/lonas-cubiertas-piscina/" class="font-700 text-brandDeep underline">lona de invierno</a> reduce mucho el trabajo de la puesta a punto en primavera.</p>
${AGUA_CANAL}`
      }
    ],
    proceso: PROCESO,
    faqs: [
      ['¿Hacéis mantenimiento de piscinas comunitarias en Majadahonda?', 'Sí. Ofrecemos contratos de mantenimiento para comunidades de vecinos, con visitas programadas en temporada, control del agua y apertura y cierre de la piscina.'],
      ['¿Qué hago si mi piscina se llena de pinaza?', 'Vaciar a menudo los cestos de los skimmers y del prefiltro, pasar el limpiafondos y, cuando no se usa, cubrirla con una lona. Si la pinaza se queda en el fondo, consume cloro y favorece las algas.'],
      ['¿Cuánto cuesta mantener una piscina en Majadahonda?', 'Depende del tamaño, la frecuencia de visitas y el estado de la piscina. Te damos un presupuesto cerrado y gratuito tras verla.']
    ],
    relacionados: ['mantenimiento-piscinas-comunidades', 'lonas-cubiertas-piscina', 'cambio-lecho-filtrante'],
    presupuesto: ['Zona de Majadahonda.', 'Medidas aproximadas de la piscina.', 'Si es particular o de comunidad.', 'Fotos de la piscina y de los equipos.']
  },

  {
    tipo: 'zona',
    slug: 'alcobendas',
    ciudad: 'Alcobendas',
    nombre: 'Alcobendas',
    title: 'Mantenimiento de Piscinas en Alcobendas | RQT Pools',
    description: 'Mantenimiento de piscinas en Alcobendas y La Moraleja: chalets, comunidades, hoteles y negocios. Agua, filtros, reparaciones e invernaje. Tel. 678 13 70 51.',
    h1: 'Mantenimiento de piscinas en Alcobendas y La Moraleja',
    intro: 'RQT Pools se ocupa del mantenimiento de piscinas en Alcobendas, incluidas La Moraleja y El Soto de La Moraleja. Trabajamos para particulares, comunidades de vecinos, hoteles y negocios: limpieza periódica, tratamiento del agua, filtros y depuradoras, reparaciones e invernaje. Presupuesto gratis y sin permanencia.',
    imagen: 'servicio-comunidad.webp', imagenSize: [900, 675],
    imagenAlt: 'Piscina comunitaria en Alcobendas con mantenimiento profesional',
    incluyeTitulo: 'Qué hacemos en Alcobendas',
    incluye: [
      'Mantenimiento de piscinas de chalets, comunidades, hoteles y negocios.',
      'Control de la calidad del agua según el uso de la piscina.',
      'Cambio de lecho filtrante e instalación de depuradoras.',
      'Reparación de bombas, cloradores y detección de fugas.',
      'Apertura y cierre de temporada y lonas a medida.'
    ],
    extra: [
      {
        h2: 'Piscinas en Alcobendas: lo que tenemos en cuenta',
        html: `<p class="text-muted">En La Moraleja y El Soto de La Moraleja predominan las viviendas con piscinas privadas de gran tamaño, en las que el volumen de agua y el equipo de depuración son determinantes: un filtro o una bomba pequeños para la piscina se notan enseguida en la transparencia del agua. En zonas como Fuentelucha o Arroyo de la Vega hay más comunidades de vecinos, y también hoteles y negocios con piscina de uso colectivo, sujetos a normativa sanitaria. Para estas últimas tenemos <a href="/servicios/mantenimiento-piscinas-comunidades/" class="font-700 text-brandDeep underline">contratos específicos</a>.</p>
${AGUA_CANAL}`
      }
    ],
    proceso: PROCESO,
    faqs: [
      ['¿Trabajáis en La Moraleja y El Soto de La Moraleja?', 'Sí. Damos servicio en todo Alcobendas, incluidas La Moraleja y El Soto de La Moraleja.'],
      ['¿Lleváis piscinas de hoteles y negocios en Alcobendas?', 'Sí. Ofrecemos mantenimiento para piscinas de uso colectivo, ayudando a mantener el agua dentro de los parámetros que exige la normativa sanitaria.'],
      ['Mi piscina es grande y el agua nunca está transparente, ¿qué puede ser?', 'Muchas veces el equipo de filtración se queda corto para el volumen de agua, o el lecho filtrante está agotado. Revisamos la instalación y te decimos si basta con cambiar la carga o conviene un equipo mayor.']
    ],
    relacionados: ['mantenimiento-piscinas-comunidades', 'instalacion-filtros-depuradoras', 'mantenimiento-piscinas-madrid'],
    presupuesto: ['Zona de Alcobendas (por ejemplo, La Moraleja).', 'Medidas aproximadas de la piscina.', 'Si es particular, de comunidad, hotel o negocio.', 'Fotos de la piscina y del cuarto de depuración.']
  }
];
