/*
 * RQT Pools - Lógica del cuestionario (funciones puras, sin DOM)
 * Compatible con navegador (window.QuizLogic) y con Node (module.exports) para tests.
 */
(function (global) {
  'use strict';

  // Valida formato básico de email
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email == null ? '' : email).trim());
  }

  // Comprueba si el endpoint de Formspree está configurado de verdad
  function isFormspreeConfigured(endpoint) {
    return typeof endpoint === 'string'
      && endpoint.indexOf('TU_ID_AQUI') === -1
      && /^https:\/\/formspree\.io\/f\/.+/.test(endpoint);
  }

  // Normaliza el objeto lead aplicando valores por defecto
  function normalizeLead(lead) {
    lead = lead || {};
    return {
      nombre: (lead.nombre || '').trim(),
      localidad: (lead.localidad || '').trim(),
      telefono: (lead.telefono || '').trim(),
      email: (lead.email || '').trim(),
      detalles: (lead.detalles || '').trim(),
      servicio: lead.servicio || 'Sin especificar',
      tipo: lead.tipo || 'Sin especificar',
      cuando: lead.cuando || 'Sin especificar',
      marketing: !!lead.marketing
    };
  }

  // Reglas de validación del formulario:
  //  - nombre, localidad y telefono: OBLIGATORIOS
  //  - privacidad: OBLIGATORIA (checkbox marcado)
  //  - email: OPCIONAL, pero si se rellena debe tener formato válido
  function validateLead(lead) {
    lead = lead || {};
    var errors = {};
    if (!lead.nombre || !String(lead.nombre).trim()) errors.nombre = true;
    if (!lead.localidad || !String(lead.localidad).trim()) errors.localidad = true;
    if (!lead.telefono || !String(lead.telefono).trim()) errors.telefono = true;
    if (!lead.privacy) errors.privacy = true;
    if (lead.email && String(lead.email).trim() && !isValidEmail(lead.email)) errors.email = true;
    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  // Construye el mensaje de texto que se envía por WhatsApp o correo
  function buildMessage(lead) {
    var d = normalizeLead(lead);
    return [
      'Hola RQT Pools, me gustaría solicitar un presupuesto.',
      '',
      'Servicio: ' + d.servicio,
      'Tipo de piscina: ' + d.tipo,
      'Cuándo: ' + d.cuando,
      'Nombre: ' + d.nombre,
      'Localidad: ' + d.localidad,
      'Teléfono: ' + (d.telefono || 'No indicado'),
      'Correo: ' + (d.email || 'No indicado'),
      'Detalles: ' + (d.detalles || '-'),
      'Acepta comunicaciones comerciales: ' + (d.marketing ? 'Sí' : 'No')
    ].join('\n');
  }

  function buildWhatsAppUrl(phone, message) {
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
  }

  function buildMailtoUrl(to, subject, message) {
    return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
  }

  // Payload que se envía a Formspree para guardar el lead
  function buildLeadPayload(lead, canal) {
    var d = normalizeLead(lead);
    return {
      nombre: d.nombre,
      localidad: d.localidad,
      telefono: d.telefono || 'No indicado',
      email: d.email || 'No indicado',
      detalles: d.detalles || '-',
      servicio: d.servicio,
      tipo_piscina: d.tipo,
      cuando: d.cuando,
      acepta_marketing: d.marketing ? 'Sí' : 'No',
      canal: canal || 'Sin especificar',
      _subject: 'Nuevo lead RQT Pools - ' + d.nombre + ' (' + d.localidad + ')'
    };
  }

  var QuizLogic = {
    isValidEmail: isValidEmail,
    isFormspreeConfigured: isFormspreeConfigured,
    normalizeLead: normalizeLead,
    validateLead: validateLead,
    buildMessage: buildMessage,
    buildWhatsAppUrl: buildWhatsAppUrl,
    buildMailtoUrl: buildMailtoUrl,
    buildLeadPayload: buildLeadPayload,
    WHATSAPP_NUMBER: '34678137051',
    CONTACT_EMAIL: 'hola@rqtpools.com'
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizLogic;
  }
  if (global) {
    global.QuizLogic = QuizLogic;
  }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
