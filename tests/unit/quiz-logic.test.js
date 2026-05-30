import { describe, it, expect } from 'vitest';
import QuizLogic from '../../assets/quiz-logic.js';

describe('isValidEmail', () => {
  it('acepta correos con formato válido', () => {
    expect(QuizLogic.isValidEmail('hola@rqtpools.com')).toBe(true);
    expect(QuizLogic.isValidEmail('a.b-c@dominio.es')).toBe(true);
  });
  it('rechaza correos mal formados', () => {
    expect(QuizLogic.isValidEmail('sinarroba.com')).toBe(false);
    expect(QuizLogic.isValidEmail('falta@dominio')).toBe(false);
    expect(QuizLogic.isValidEmail('con espacio@x.com')).toBe(false);
    expect(QuizLogic.isValidEmail('')).toBe(false);
  });
});

describe('isFormspreeConfigured', () => {
  it('es false con el placeholder', () => {
    expect(QuizLogic.isFormspreeConfigured('https://formspree.io/f/TU_ID_AQUI')).toBe(false);
  });
  it('es true con un endpoint real de formspree', () => {
    expect(QuizLogic.isFormspreeConfigured('https://formspree.io/f/mjgzzany')).toBe(true);
  });
  it('es false con cualquier otra URL o valor no válido', () => {
    expect(QuizLogic.isFormspreeConfigured('https://otrositio.com/f/abc')).toBe(false);
    expect(QuizLogic.isFormspreeConfigured('')).toBe(false);
    expect(QuizLogic.isFormspreeConfigured(null)).toBe(false);
  });
});

describe('validateLead', () => {
  const base = {
    nombre: 'Laura',
    localidad: 'Madrid',
    telefono: '600112233',
    email: '',
    privacy: true
  };

  it('valida cuando estan todos los obligatorios y la privacidad aceptada', () => {
    const r = QuizLogic.validateLead(base);
    expect(r.valid).toBe(true);
    expect(r.errors).toEqual({});
  });

  it('falla si falta el nombre', () => {
    const r = QuizLogic.validateLead({ ...base, nombre: '   ' });
    expect(r.valid).toBe(false);
    expect(r.errors.nombre).toBe(true);
  });

  it('falla si falta la localidad', () => {
    const r = QuizLogic.validateLead({ ...base, localidad: '' });
    expect(r.valid).toBe(false);
    expect(r.errors.localidad).toBe(true);
  });

  it('TELEFONO es obligatorio: falla si no se indica', () => {
    const r = QuizLogic.validateLead({ ...base, telefono: '' });
    expect(r.valid).toBe(false);
    expect(r.errors.telefono).toBe(true);
  });

  it('falla si no se acepta la privacidad', () => {
    const r = QuizLogic.validateLead({ ...base, privacy: false });
    expect(r.valid).toBe(false);
    expect(r.errors.privacy).toBe(true);
  });

  it('EMAIL es opcional: vacío es válido', () => {
    const r = QuizLogic.validateLead({ ...base, email: '' });
    expect(r.valid).toBe(true);
    expect(r.errors.email).toBeUndefined();
  });

  it('EMAIL: si se rellena con formato incorrecto, falla', () => {
    const r = QuizLogic.validateLead({ ...base, email: 'malformado' });
    expect(r.valid).toBe(false);
    expect(r.errors.email).toBe(true);
  });

  it('EMAIL: si se rellena con formato correcto, es válido', () => {
    const r = QuizLogic.validateLead({ ...base, email: 'cliente@correo.com' });
    expect(r.valid).toBe(true);
    expect(r.errors.email).toBeUndefined();
  });
});

describe('normalizeLead', () => {
  it('aplica valores por defecto a los campos vacíos', () => {
    const d = QuizLogic.normalizeLead({});
    expect(d.servicio).toBe('Sin especificar');
    expect(d.tipo).toBe('Sin especificar');
    expect(d.cuando).toBe('Sin especificar');
    expect(d.marketing).toBe(false);
    expect(d.nombre).toBe('');
  });
  it('recorta espacios de los textos', () => {
    const d = QuizLogic.normalizeLead({ nombre: '  Ana  ', telefono: ' 600 ' });
    expect(d.nombre).toBe('Ana');
    expect(d.telefono).toBe('600');
  });
});

describe('buildMessage', () => {
  const lead = {
    nombre: 'Laura Giménez',
    localidad: 'Pozuelo',
    telefono: '600112233',
    email: 'laura@correo.com',
    detalles: 'Piscina 8x4',
    servicio: 'Cambio de lecho filtrante',
    tipo: 'Particular enterrada',
    cuando: 'Esta semana',
    marketing: true
  };

  it('incluye todos los datos del lead', () => {
    const msg = QuizLogic.buildMessage(lead);
    expect(msg).toContain('Servicio: Cambio de lecho filtrante');
    expect(msg).toContain('Tipo de piscina: Particular enterrada');
    expect(msg).toContain('Cuándo: Esta semana');
    expect(msg).toContain('Nombre: Laura Giménez');
    expect(msg).toContain('Localidad: Pozuelo');
    expect(msg).toContain('Teléfono: 600112233');
    expect(msg).toContain('Correo: laura@correo.com');
    expect(msg).toContain('Detalles: Piscina 8x4');
    expect(msg).toContain('Acepta comunicaciones comerciales: Sí');
  });

  it('usa marcadores por defecto cuando faltan datos opcionales', () => {
    const msg = QuizLogic.buildMessage({ nombre: 'Ana', localidad: 'Madrid', telefono: '600' });
    expect(msg).toContain('Correo: No indicado');
    expect(msg).toContain('Detalles: -');
    expect(msg).toContain('Acepta comunicaciones comerciales: No');
  });
});

describe('buildWhatsAppUrl', () => {
  it('genera la URL de wa.me con el mensaje codificado', () => {
    const url = QuizLogic.buildWhatsAppUrl('34678137051', 'Hola mundo & test');
    expect(url.startsWith('https://wa.me/34678137051?text=')).toBe(true);
    expect(url).toContain('Hola%20mundo%20%26%20test');
  });
});

describe('buildMailtoUrl', () => {
  it('genera un mailto con asunto y cuerpo codificados', () => {
    const url = QuizLogic.buildMailtoUrl('hola@rqtpools.com', 'Asunto', 'Cuerpo del mensaje');
    expect(url.startsWith('mailto:hola@rqtpools.com?subject=')).toBe(true);
    expect(url).toContain('subject=Asunto');
    expect(url).toContain('body=Cuerpo%20del%20mensaje');
  });
});

describe('buildLeadPayload', () => {
  it('incluye el canal, el asunto y los datos normalizados', () => {
    const payload = QuizLogic.buildLeadPayload(
      { nombre: 'Ana', localidad: 'Madrid', telefono: '600', servicio: 'Lonas y cubiertas' },
      'WhatsApp'
    );
    expect(payload.canal).toBe('WhatsApp');
    expect(payload.nombre).toBe('Ana');
    expect(payload.servicio).toBe('Lonas y cubiertas');
    expect(payload.email).toBe('No indicado');
    expect(payload._subject).toBe('Nuevo lead RQT Pools - Ana (Madrid)');
  });
});
