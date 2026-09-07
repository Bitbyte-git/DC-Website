import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import ConsultationModal from './ConsultationModal.jsx';

const HERO_SERVICES = [
  {
    icon: 'passport',
    label: 'Residency by Investment',
    desc: 'EU & Golden Visas',
    link: '/residency',
  },
  {
    icon: 'certificate',
    label: 'Citizenship by Investment',
    desc: 'Direct CBI & Passport',
    link: '/citizenship',
  },
  {
    icon: 'building',
    label: 'Real Estate Investment',
    desc: 'High-Yield Assets',
    link: '/realestate',
  },
  {
    icon: 'globe',
    label: 'Permanent Residency (PR)',
    desc: 'Australia & Canada',
    link: '/pr',
  },
];

export default function Hero() {
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <section className="hero" id="home">
      {/* Background ambient lighting orbs */}
      <div className="hero-ambient-glow hero-ambient-glow-1" />
      <div className="hero-ambient-glow hero-ambient-glow-2" />

      {/* Floating Trust Metrics */}
      <div className="hero-float-chip hero-float-left" title="Verified Track Record">
        <span className="float-chip-icon green">✓</span>
        <div className="float-chip-text">
          <strong>99% Assurance</strong>
          <span>Positive Outcome Rate</span>
        </div>
      </div>

      <div className="hero-float-chip hero-float-right" title="Global Coverage">
        <span className="float-chip-icon gold">
          <Icon name="globe" size={16} />
        </span>
        <div className="float-chip-text">
          <strong>50+ Destinations</strong>
          <span>Visa-Free Mobility</span>
        </div>
      </div>

      <div className="container hero-content">
        {/* Animated Pill Badge */}
        <div className="hero-badge-wrap">
          <span className="hero-tag">
            <span className="hero-badge-dot" />
            GLOBAL MOBILITY &amp; CITIZENSHIP ADVISORY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline">
          Your Gateway to
          <br />
          Global Mobility
        </h1>

        {/* Subtitle */}
        <p className="hero-desc">
          Helping individuals, families, and investors secure verified{' '}
          <strong>Residency</strong>, <strong>Citizenship</strong>, and{' '}
          <strong>Permanent Residency</strong> opportunities across top global
          destinations.
        </p>

        {/* 4 Interactive Service Cards */}
        <div className="hero-pills-grid">
          {HERO_SERVICES.map((item) => (
            <Link
              to={item.link}
              className="hero-pill-card"
              key={item.label}
              title={`Explore ${item.label}`}
            >
              <div className="pill-icon-box">
                <Icon name={item.icon} size={22} />
              </div>
              <div className="pill-text-content">
                <strong>{item.label}</strong>
                <span className="pill-subtext">{item.desc}</span>
              </div>
              <span className="pill-arrow-hover">
                <Icon name="arrow" size={14} />
              </span>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary hero-btn-main">
            Explore Programs <Icon name="arrow" size={16} />
          </a>
          <button
            type="button"
            className="btn btn-outline hero-btn-secondary"
            onClick={() => setShowConsultation(true)}
          >
            <Icon name="mail" size={15} /> Book Free Consultation
          </button>
        </div>
      </div>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </section>
  );
}