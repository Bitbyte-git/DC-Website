import { useState } from 'react';
import {
  NAV_LINKS,
  CONTACT,
    CITIZENSHIP_MENU,
  REALESTATE_MENU,
  RESIDENCY_MENU,
  PR_MENU,
  OTHERSERVICES_MENU,
} from '../data.js';
import { Icon } from './Icons.jsx';
import MegaMenu from './MegaMenu.jsx';
import ConsultationModal from './ConsultationModal.jsx';

// Map nav label -> mega menu data (add more here later, e.g. Residency)
const MENUS = {
  Citizenship: CITIZENSHIP_MENU,
  Residency: RESIDENCY_MENU,
  'Real Estate': REALESTATE_MENU,
  'Permanent Residency (PR)': PR_MENU,
  'Other Service': OTHERSERVICES_MENU,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
                <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <div className="nav-item" key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                {link.dropdown && <Icon name="chevron-down" size={12} />}
              </a>
                            {MENUS[link.label] && <MegaMenu data={MENUS[link.label]} />}
            </div>
          ))}
        </nav>

                        <a href="/" className="brand">
          <img src="/landing-img/DC-log.png" alt="Dream Country Visas" />
        </a>

        <div className="nav-right">
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact Us</a>
          <a
                     
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="nav-circle phone"
            aria-label={CONTACT.phone}
            title={CONTACT.phone}
          >
            <Icon name="phone" size={16} />
          </a>
          <a
            href={CONTACT.whatsapp}
            className="nav-circle whatsapp"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <Icon name="whatsapp" size={18} />
          </a>
                    <a href="#" className="nav-circle linkedin" aria-label="LinkedIn">
            <Icon name="linkedin" size={16} />
          </a>
          <button
            className="btn btn-primary nav-consult-btn"
            onClick={() => setShowConsultation(true)}
          >
            Book Free Consultation
          </button>
        </div>

                <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </header>
  );
}
