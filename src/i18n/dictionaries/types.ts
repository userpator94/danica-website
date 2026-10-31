export interface Dictionary {
  meta: {
    siteName: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    bookConsultation: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    legal: string;
    privacy: string;
    rights: string;
    instagram: string;
  };
  common: {
    learnMore: string;
    requestQuote: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      headline: string;
      support: string;
      primaryCta: string;
      routes: string;
      imageAlt: string;
    };
    paths: {
      title: string;
      intro: string;
      degree: { title: string; body: string; cta: string };
      erasmus: { title: string; body: string; cta: string };
    };
    help: {
      title: string;
      intro: string;
      items: Array<{ title: string; body: string }>;
    };
    meet: {
      title: string;
      body: string;
      experience: string[];
      cta: string;
    };
    process: {
      title: string;
      intro: string;
      steps: Array<{ title: string; body: string }>;
    };
    pricing: {
      title: string;
      intro: string;
      items: Array<{ title: string; body: string }>;
      cta: string;
    };
    faq: {
      title: string;
      items: Array<{ q: string; a: string }>;
    };
    finalCta: {
      headline: string;
      support: string;
      cta: string;
    };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    sections: Array<{ title: string; body: string }>;
    experienceTitle: string;
    experience: string[];
    ctaTitle: string;
    ctaBody: string;
    cta: string;
  };
  services: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    routesTitle: string;
    degree: { title: string; body: string };
    erasmus: { title: string; body: string };
    listTitle: string;
    items: Array<{
      title: string;
      forWhom: string;
      body: string;
      outcome: string;
    }>;
    disclaimer: string;
    ctaTitle: string;
    ctaBody: string;
    cta: string;
  };
  howItWorks: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; body: string }>;
    afterTitle: string;
    afterBody: string;
    cta: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    afterSubmit: string;
    whatsapp: string;
    whatsappHint: string;
    form: {
      name: string;
      email: string;
      country: string;
      goal: string;
      goalOptions: Array<{ value: string; label: string }>;
      period: string;
      supportType: string;
      supportOptions: Array<{ value: string; label: string }>;
      message: string;
      erasmusNote: string;
      consent: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    updated: string;
    sections: Array<{ title: string; body: string }>;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
}
