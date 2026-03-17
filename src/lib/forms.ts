const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export type ContactPayload = {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  company: string;
};

export type NewsletterPayload = {
  email: string;
  website: string;
};

export function parseContactPayload(input: unknown): ContactPayload {
  const source = typeof input === "object" && input !== null ? input : {};
  const payload = source as Record<string, unknown>;

  return {
    fullName: cleanValue(payload.fullName),
    email: cleanValue(payload.email).toLowerCase(),
    subject: cleanValue(payload.subject),
    phone: cleanValue(payload.phone),
    message: cleanValue(payload.message),
    company: cleanValue(payload.company),
  };
}

export function parseNewsletterPayload(input: unknown): NewsletterPayload {
  const source = typeof input === "object" && input !== null ? input : {};
  const payload = source as Record<string, unknown>;

  return {
    email: cleanValue(payload.email).toLowerCase(),
    website: cleanValue(payload.website),
  };
}

export function validateContactPayload(payload: ContactPayload) {
  if (!payload.fullName || payload.fullName.length < 2) {
    return "Veuillez renseigner votre nom complet.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    return "Veuillez saisir une adresse email valide.";
  }

  if (!payload.subject || payload.subject.length < 3) {
    return "Veuillez indiquer un sujet.";
  }

  if (payload.phone && payload.phone.length < 6) {
    return "Veuillez saisir un numéro de télephone valide.";
  }

  if (!payload.message || payload.message.length < 10) {
    return "Votre message doit contenir au moins 10 caractères.";
  }

  return null;
}

export function validateNewsletterPayload(payload: NewsletterPayload) {
  if (!payload.email || !emailPattern.test(payload.email)) {
    return "Veuillez saisir une adresse email valide.";
  }

  return null;
}

