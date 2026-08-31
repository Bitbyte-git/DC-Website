import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NAV_LINKS_LEFT,
  NAV_LINKS_RIGHT,
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

// Map nav label -> mega menu data
const MENUS = {
  Citizenship: CITIZENSHIP_MENU,
  Residency: RESIDENCY_MENU,
  'Real Estate': REALESTATE_MENU,
  'Permanent Residency (PR)': PR_MENU,
  'Other Service': OTHERSERVICES_MENU,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [showConsultation, setShowConsultation] = useState(false);

  // Smoothly scroll to a section when already on the home page,
  // instead of relying on a plain hash-link (which jumps instantly).
  const handleHashClick = (href) => (e) => {
    setOpen(false);
    setOpenMenu(null);
    if (href.startsWith('/#') && window.location.pathname === '/') {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Closes the mobile menu + any open mega-menu — called whenever a
  // real navigation happens (clicking the label or any submenu item).
  const closeMenus = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  // Shared renderer — plain links (Home, About Us, Media, Contact Us)
  // render as-is; links with a matching entry in MENUS get the hover
  // mega-menu attached and also navigate straight to the overview page.
  const renderLinks = (links) =>
    links.map((link) => {
      const isHashLink = link.href.startsWith('/#');
      const hasMenu = !!MENUS[link.label];

      return (
        <div
          className="nav-item"
          key={link.label}
          onMouseEnter={() => hasMenu && setOpenMenu(link.label)}
          onMouseLeave={() => hasMenu && setOpenMenu(null)}
        >
          {isHashLink ? (
            <a href={link.href} onClick={handleHashClick(link.href)}>
              {link.label}
              {link.dropdown && <Icon name="chevron-down" size={12} />}
            </a>
          ) : (
            <Link to={link.href} onClick={closeMenus}>
              {link.label}
              {link.dropdown && <Icon name="chevron-down" size={12} />}
            </Link>
          )}
          {hasMenu && (
            <MegaMenu
              data={MENUS[link.label]}
              overviewLink={link.href}
              open={openMenu === link.label}
              onNavigate={closeMenus}
            />
          )}
        </div>
      );
    });

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Desktop — left of logo */}
        <nav className="nav-links">{renderLinks(NAV_LINKS_LEFT)}</nav>

        <a href="/" className="brand">
          <img src="/landing-img/DC-log.webp" alt="Dream Country Visas" />
        </a>

        {/* Desktop — right of logo */}
        <div className="nav-right">
          <nav className="nav-links-right">
            {renderLinks(NAV_LINKS_RIGHT)}
          </nav>

          <div className="nav-icons">

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
                       <Link to="/contact" className="btn btn-primary nav-consult-btn">
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile — combined hamburger panel (left + right items together) */}
        <nav className={`nav-links-mobile ${open ? 'open' : ''}`}>
          {renderLinks([...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT])}
        </nav>

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