import { Link } from 'react-router-dom';
import { FOOTER, CONTACT } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer footer-navy">
      <div className="footer-map-bg" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/landing-img/DC-log.png" alt="Dream Country Visas" />
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={15} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={15} /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={15} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={15} /></a>
          </div>
        </div>

        <div className="footer-about">
          <p>{FOOTER.about}</p>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            {FOOTER.quickLinks.map((l) => (
              <li key={l}><a href="/#home">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Our Services</h5>
          <ul>
            {FOOTER.services.map((s) => (
              <li key={s}><a href="/#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Popular Destinations</h5>
          <ul>
            {FOOTER.destinations.map((d) => (
              <li key={d}><a href="/#destinations">{d}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact Info</h5>
          <ul className="footer-contact">
            <li><Icon name="phone" size={13} /> {CONTACT.phone}</li>
            <li><Icon name="mail" size={13} /> {CONTACT.email}</li>
            <li><Icon name="pin" size={13} /> {CONTACT.country}</li>
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