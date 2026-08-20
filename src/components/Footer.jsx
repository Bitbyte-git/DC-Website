import { FOOTER, CONTACT } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/landing-img/DC-log.png" alt="Dream Country Visas" />
        </div>

        <div className="footer-about">
          <p>{FOOTER.about}</p>
          <p className="copyright">{FOOTER.copyright}</p>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            {FOOTER.quickLinks.map((l) => (
              <li key={l}><a href="#home">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Our Services</h5>
          <ul>
            {FOOTER.services.map((s) => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Popular Destinations</h5>
          <ul>
            {FOOTER.destinations.map((d) => (
              <li key={d}><a href="#destinations">{d}</a></li>
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
    </footer>
  );
}
