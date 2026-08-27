import { Link } from 'react-router-dom';
import {
  FOOTER,
  CONTACT,
  CITIZENSHIP_MENU,
  RESIDENCY_MENU,
  REALESTATE_MENU,
  PR_MENU,
} from '../data.js';
import { Icon } from './Icons.jsx';

// Flattens a mega-menu's groups into a simple {name, link} list for the
// footer columns, so it stays in sync with data.js automatically.
function flattenMenu(menu) {
  return menu.groups.flatMap((g) => g.items);
}

const FOOTER_CATEGORIES = [
  { title: 'Citizenship', items: flattenMenu(CITIZENSHIP_MENU) },
  { title: 'Residency', items: flattenMenu(RESIDENCY_MENU) },
  { title: 'Real Estate', items: flattenMenu(REALESTATE_MENU) },
  { title: 'Permanent Residency (PR)', items: flattenMenu(PR_MENU) },
];

export default function Footer() {
  return (
    <footer className="footer footer-navy">
      <div className="footer-map-bg" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/landing-img/DC-log.png" alt="Dream Country Visas" />
          <p className="footer-about-text">{FOOTER.about}</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={15} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={15} /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={15} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={15} /></a>
          </div>
        </div>

        {FOOTER_CATEGORIES.map((cat) => (
          <div className="footer-col" key={cat.title}>
            <h5>{cat.title}</h5>
            <ul>
              {cat.items.map((item) => (
                <li key={item.link}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

                <div className="footer-col">
          <h5>Contact Info</h5>
                    <ul className="footer-contact">
            <li><Icon name="phone" size={13} /> {CONTACT.phone}</li>
            <li><Icon name="mail" size={13} /> {CONTACT.email}</li>
            <li><Icon name="clock" size={13} /> {CONTACT.hours}</li>
            {CONTACT.offices.map((office) => (
              <li key={office.label}>
                <Icon name="pin" size={13} />
                <span><strong>{office.label}:</strong> {office.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright">{FOOTER.copyright}</p>
          <div className="footer-legal-links">
            <Link to="/policies/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/policies/terms-of-service">Terms and Conditions</Link>
            <span>|</span>
            <Link to="/policies/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}