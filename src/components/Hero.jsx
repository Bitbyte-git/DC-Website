import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_PILLS } from '../data.js';
import { Icon } from './Icons.jsx';
import ConsultationModal from './ConsultationModal.jsx';

export default function Hero() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p className="hero-tag">— GLOBAL MOBILITY SOLUTIONS —</p>
        <h1>
          Your Gateway to
          <br />
          Global Mobility
        </h1>
        <p className="hero-desc">
          Helping individuals, families and investors secure Residency <br />,
          Citizenship and Global Expansion opportunities <br /> across leading
          destinations.
        </p>

        <div className="hero-pills">
          {HERO_PILLS.map((pill) => (
            <div className="hero-pill" key={pill.label}>
              <span className="pill-icon">
                <Icon name={pill.icon} size={28} />
              </span>
              {pill.label}
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">
            Explore Programs <Icon name="arrow" size={16} />
          </a>
                    <Link to="/contact" className="btn btn-outline">
            Book Consultation <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>

      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </section>
  );
}