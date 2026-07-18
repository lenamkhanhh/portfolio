import { useState, type FormEvent } from "react";
import {
  validateContact,
  type ContactFormErrors,
  type ContactFormValues,
} from "../course/contactForm";

const emptyForm: ContactFormValues = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(emptyForm);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small className="form-error">{errors.name}</small>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <small className="form-error">{errors.email}</small>}
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <small className="form-error">{errors.message}</small>}
      </div>
      <button className="button button-primary" type="submit">
        Send message
      </button>
      {submitted && (
        <p className="form-success" role="status">
          Thank you — your message passed validation successfully.
        </p>
      )}
    </form>
  );
}
