"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, FOOTER_LOGO_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src={FOOTER_LOGO_URL}
              alt="CFI Ideation"
              width={112}
              height={63}
              className="footer-logo-image"
            />
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
