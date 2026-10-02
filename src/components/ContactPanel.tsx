import { ArrowUpRight, DownloadSimple, EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import { contact } from "../content";

export function ContactPanel() {
  return (
    <footer className="contact-panel" id="contact">
      <div className="section-label">
        <span>06</span>
        <p>Contact</p>
      </div>
      <div className="contact-copy">
        <p className="contact-kicker">Opportunities & Collaboration</p>
        <h2>Let's connect and build ambitious systems.</h2>
        <p>
          Focused on multimodal video retrieval, temporal event reasoning, and verifiable AI systems. Open to research lab opportunities, software engineering internships, and technical discussions.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href={contact.email.href}>
          <EnvelopeSimple aria-hidden="true" />
          Email me
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="button" href={contact.cv.href} download>
          <DownloadSimple aria-hidden="true" />
          Download CV
        </a>
        <a className="text-link" href={contact.github.href} target="_blank" rel="noreferrer">
          <GithubLogo aria-hidden="true" />
          GitHub
        </a>
      </div>
      <div className="contact-meta">
        <a href={contact.email.href}>{contact.email.value}</a>
        <a href={contact.codeforces.href} target="_blank" rel="noreferrer">
          Codeforces · {contact.codeforces.value}
        </a>
      </div>
    </footer>
  );
}
