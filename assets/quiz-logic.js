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

  // Valida un teléfono: admite espacios, guiones, puntos, paréntesis y prefijo +.
  // Debe tener entre 9 y 15 cifras (9 = número español sin prefijo).
  function isValidPhone(phone) {
    var raw = String(phone == null ? '' : phone).trim();
    if (!/^\+?[\d\s().-]+$/.test(raw)) return false;
    var digits = raw.replace(/\D/g, '');
    return digits.length >= 9 && digits.length <= 15;
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
  //  - nombre y localidad: OBLIGATORIOS
  //  - telefono: OBLIGATORIO y con formato válido (9-15 cifras)
  //  - email: OBLIGATORIO y con formato válido (para poder responder por correo)
  //  - privacidad: OBLIGATORIA (checkbox marcado)
  function validateLead(lead) {
    lead = lead || {};
    var errors = {};
    // Honeypot: si viene relleno, es un bot. Marcamos como spam (silencioso).
    if (lead.website && String(lead.website).trim()) {
      return { valid: false, errors: { spam: true }, spam: true };
    }
    if (!lead.nombre || !String(lead.nombre).trim()) errors.nombre = true;
    if (!lead.localidad || !String(lead.localidad).trim()) errors.localidad = true;
    if (!isValidPhone(lead.telefono)) errors.telefono = true;
    if (!isValidEmail(lead.email)) errors.email = true;
    if (!lead.privacy) errors.privacy = true;
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

  var QuizLogic = {
    isValidEmail: isValidEmail,
    isValidPhone: isValidPhone,
    normalizeLead: normalizeLead,
    validateLead: validateLead,
    buildMessage: buildMessage,
    buildWhatsAppUrl: buildWhatsAppUrl,
    buildMailtoUrl: buildMailtoUrl,
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
