export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
}
