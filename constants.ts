import { ContentText, Language } from './types';

export const TEXT_CONTENT: Record<Language, ContentText> = {
  [Language.ENGLISH]: {
    navHome: "Home",
    navAbout: "About",
    navEvents: "Events",
    navContact: "Contact",
    heroTitle: "Language Exchange Prototype of Valencia",
    heroSubtitle: "Join our English-Spanish language exchange. Practice your speaking skills in a relaxed, friendly environment!",
    ctaButton: "Join Next Meetup",
    feedbackButton: "Give Feedback",
    aboutTitle: "What is LEPV?",
    aboutText: "LEPV is a language exchange curated by students from ACIL in Valencia. Its mission is to UNITE and help the Valencian community practice their language skills and meet new people. All levels of proficiency are accepted!",
    detailsTitle: "Gathering Details",
    detailsWhenTxt: "Dates:",
    detailsWhen: "1st. 14th January, 18:30-19:30",
    detailsWhen2: "2nd. 21st January, 18:30-19:30",
    detailsWhen3: "3rd. 28th January, 18:30-19:30",
    detailsWhereTxt: "Locations:",
    detailsWhere: "1st. Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    detailsWhere2: "2nd. Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    detailsWhere3: "3rd. Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    aiTitle: "Conversation Starters",
    aiDescription: "Here are some bilingual ideas to help you get the conversation flowing with your partner!",
    aiButton: "New Idea",
    footerRights: "© 2025 LEPV - Language Exchange Prototype of Valencia. All rights reserved.",
    consentTitle: "Important Notice",
    consentBody: "By signing up, you agree to photos being taken during the event. These photos will not be published publicly and are used solely as evidence that the language exchange took place.",
    consentAgree: "I Agree & Proceed",
    consentCancel: "Cancel",
  },
  [Language.SPANISH]: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navEvents: "Eventos",
    navContact: "Contacto",
    heroTitle: "Intercambio de Idiomas de Valencia",
    heroSubtitle: "Únete a nuestro LEPV de idiomas inglés-español. ¡Practica tus habilidades para hablar en un ambiente relajado y amigable!",
    ctaButton: "Unirse la próxima reunión",
    feedbackButton: "Danos tu opinión",
    aboutTitle: "¿Qué es LEPV?",
    aboutText: "LEPV es un programa de intercambio de idiomas organizado por estudiantes de ACIL en Valencia. Su misión es unir y ayudar a la comunidad valenciana a practicar sus habilidades lingüísticas y conocer gente nueva. ¡Se aceptan todos los niveles!",
    detailsTitle: "Detalles del Reunión",
    detailsWhen: "1.ª 14 de enero, 18:30-19:30",
    detailsWhen2: "2.ª 21 de enero, 18:30-19:30",
    detailsWhen3: "3.ª 28 de enero, 18:30-19:30",
    detailsWhenTxt: "Fechas:",
    detailsWhere: "1.ª Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    detailsWhere2: "2.ª Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    detailsWhere3: "3.ª Santo Pastel Gran Via de les Germanies, 17, L'Eixample, 46006 València, Valencia",
    detailsWhereTxt: "Ubicaciones:",
    aiTitle: "Temas de Conversación",
    aiDescription: "¡Aquí tienes algunas ideas bilingües para ayudarte a que la conversación fluya con tu compañero!",
    aiButton: "Nueva Idea",
    footerRights: "© 2025 LEPV - Language Exchange Prototype de Valencia. Todos los derechos reservados.",
    consentTitle: "Aviso Importante",
    consentBody: "Al registrarte, aceptas que se tomen fotografías durante el evento. Estas fotografías no se publicarán y se utilizan únicamente como evidencia de que se produjo el intercambio de idiomas.",
    consentAgree: "Acepto y Continuar",
    consentCancel: "Cancelar",
  },
};

export const ICEBREAKERS = [
  {
    english: "If you could travel anywhere in the world right now, where would you go and why?",
    spanish: "Si pudieras viajar a cualquier lugar del mundo ahora mismo, ¿a dónde irías y por qué?"
  },
  {
    english: "What is your favorite Valencian dish or tradition so far?",
    spanish: "¿Cuál es tu plato o tradición valenciana favorita hasta ahora?"
  },
  {
    english: "What motivated you to start learning a new language?",
    spanish: "¿Qué te motivó a empezar a aprender un nuevo idioma?"
  },
  {
    english: "What's the most beautiful place you've ever visited?",
    spanish: "¿Cuál es el lugar más hermoso que has visitado?"
  },
  {
    english: "Do you prefer living in a big city or a quiet town? Why?",
    spanish: "¿Prefieres vivir en una gran ciudad o en un pueblo tranquilo? ¿Por qué?"
  }
];

export const NAV_LINKS = [
  { key: 'navHome', href: '#home' },
  { key: 'navAbout', href: '#about' },
  { key: 'navEvents', href: '#events' },
  { key: 'navContact', href: '#footer' },
] as const;