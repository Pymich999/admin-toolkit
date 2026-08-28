"use client";

import Link from "next/link";
import { CONTACT, SOCIAL_LINKS } from "@/lib/config";

function SocialLogo({ name }: { name: string }) {
  const normalizedName = name.toLowerCase();

  if (normalizedName === "linkedin") {
    return (
      <span className="footer-social-logo-text" aria-hidden="true">
        in
      </span>
    );
  }

  if (normalizedName === "instagram") {
    return (
      <svg
        className="footer-social-logo-svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.5" cy="7.5" r="1" />
      </svg>
    );
  }

  return (
    <span className="footer-social-logo-text" aria-hidden="true">
      X
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">CFI</div>
            <div className="footer-tagline">IDEATION</div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">For More Information</h3>
            <ul className="footer-nav">
              <li>
                <Link href="#contact" className="footer-nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="footer-nav-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#journey" className="footer-nav-link">
                  Training Journey
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-label">PHONE</span>
                <div className="footer-contact-values">
                  {CONTACT.phone.map((number) => (
                    <span key={number} className="footer-contact-value">
                      {number}
                    </span>
                  ))}
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">EMAIL</span>
                <span className="footer-contact-value">{CONTACT.email}</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">SOCIAL</span>
                <div className="footer-social">
                  {SOCIAL_LINKS.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="footer-social-link"
                      aria-label={social.name}
                    >
                      <SocialLogo name={social.name} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Administrative Toolkit
            <br />
            &copy; 2026 CFI Ideation
          </p>
        </div>
      </div>
    </footer>
  );
}
