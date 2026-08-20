import { SERVICES } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-tag">OUR SERVICES</p>
        <h2 className="center">Solutions That Open Global Doors</h2>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">
                <Icon name={s.icon} size={24} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="link-more small">
                Learn More <Icon name="arrow" size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
