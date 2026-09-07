import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { REALESTATE_OVERVIEW_FAQ } from '../data.js';
import FAQ from '../components/FAQ.jsx';
import ConsultationModal from '../components/ConsultationModal.jsx';

export default function RealEstateOverview() {
  const [showConsultation, setShowConsultation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const properties = [
    {
      name: 'Dubai',
      tagline: 'High-Yield Property & 10-Year UAE Golden Visa',
      badge: '⭐ 8-10% RENTAL YIELD',
      image: '/images/re-dubai.webp',
      price: 'from AED 1.5M',
      time: '1–4 Months',
      desc: 'Prime off-plan and ready-to-move freehold residences in Dubai offering unmatched tax-free rental returns and residency security.',
      highlights: [
        '100% Foreign freehold ownership in top luxury developments',
        'Zero property tax, capital gains tax, and income tax',
        'Qualifies for 10-Year UAE Golden Visa (AED 2M+ investment)',
      ],
      link: '/realestate/dubai',
    },
    {
      name: 'Greece Golden Visa',
      tagline: 'EU Real Estate & 5-Year European Golden Visa',
      badge: '🇬🇷 5-YEAR RESIDENCY',
      image: '/images/re-greece.webp',
      price: 'from €250,000',
      time: '4–6 Months',
      desc: 'Acquire high-value European real estate and secure 5-year renewable European residency with unrestricted Schengen mobility.',
      highlights: [
        'Direct European residency for main applicant, spouse & children',
        'Visa-free travel across all 27 European Schengen Area countries',
        'Zero minimum residency stay required to maintain status',
      ],
      link: '/realestate/greece',
    },
    {
      name: 'Latvia',
      tagline: 'Affordable EU Property & Residence Permit',
      badge: '🇱🇻 FAST-TRACK EU',
      image: '/landing-img/Real-latvia.webp',
      price: 'from €250,000',
      time: '1–3 Months',
      desc: 'One of Northern Europe’s most affordable property investment pathways for obtaining EU residency with quick turnaround.',
      highlights: [
        '5-Year renewable EU residence permit for the whole family',
        'Fast 30–90 day processing and approval timeline',
        'Direct access to European banking, business, and education',
      ],
      link: '/realestate/latvia',
    },
  ];

  return (
    <div className="ov-page">
      {/* Hero Header */}
      <div className="ov-hero">
        <div className="container">
          <nav className="ov-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <em>Real Estate Investment</em>
          </nav>

          <p className="ov-tag">
            <Icon name="building" size={14} /> High-ROI Global Property & Golden Visas
          </p>

          <h1>
            Global Real Estate Investments & <span>Residency Visas</span>
          </h1>

          <p className="ov-hero-desc">
            Acquire premium freehold properties in the world’s most dynamic markets. Build lasting generational wealth, earn high rental yields, and secure European & UAE residency.
          </p>

          <div className="ov-trust-pills">
            <div className="ov-trust-pill">
              <Icon name="check" size={14} /> 8–10% Rental Yields in Top Hubs
            </div>
            <div className="ov-trust-pill">
              <Icon name="globe" size={14} /> Golden Visa & Residency Linked
            </div>
            <div className="ov-trust-pill">
              <Icon name="lock" size={14} /> 100% Freehold Title Deeds
            </div>
            <div className="ov-trust-pill">
              <Icon name="certificate" size={14} /> Verified Developer Portfolios
            </div>
          </div>
        </div>
      </div>

      {/* Programs Showcase */}
      <div className="container">
        <div className="ov-section-header">
          <div>
            <h2>Explore Property Destinations</h2>
            <p>Compare capital appreciation, rental yield projections, and residency benefits across locations.</p>
          </div>
          <span className="ov-count-badge">
            3 High-Yield Markets Available
          </span>
        </div>

        <div className="ov-grid three-cols">
          {properties.map((p) => (
            <Link to={p.link} className="ov-card" key={p.name}>
              <div className="ov-card-media">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
                <span className="ov-card-badge">{p.badge}</span>
                <span className="ov-card-price-pill">{p.price}</span>
              </div>

              <div className="ov-card-body">
                <p className="ov-card-tagline">{p.tagline}</p>
                <h3 className="ov-card-title">{p.name}</h3>
                <p className="ov-card-desc">{p.desc}</p>

                <ul className="ov-card-highlights">
                  {p.highlights.map((h, i) => (
                    <li key={i}>
                      <Icon name="check" size={14} /> {h}
                    </li>
                  ))}
                </ul>

                <div className="ov-card-meta-row">
                  <span className="ov-card-meta-item">
                    <Icon name="clock" size={13} /> {p.time}
                  </span>
                  <span className="ov-card-meta-item">
                    <Icon name="building" size={13} /> Freehold Asset
                  </span>
                </div>

                <span className="ov-card-btn">
                  View Property Portfolios <Icon name="arrow" size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="ov-why-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <p className="section-tag">INVESTMENT SECURITY</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--navy)' }}>
              Comprehensive Property & Legal Protection
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              We partner directly with leading tier-1 developers and government land departments to secure your assets.
            </p>
          </div>

          <div className="ov-why-grid">
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="building" size={20} /></div>
              <h4>Direct Developer Access</h4>
              <p>Zero intermediary markups with exclusive early-bird inventory and developer payment plans.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="lock" size={20} /></div>
              <h4>Title Deed Due Diligence</h4>
              <p>Rigorous title and legal verification ensuring clear encumbrance-free ownership.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="certificate" size={20} /></div>
              <h4>Golden Visa Processing</h4>
              <p>Complete liaison from property registration through to biometric collection and visa issuance.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="support" size={20} /></div>
              <h4>Rental Management Support</h4>
              <p>Assistance with tenant placement, property management, and offshore rental repatriation.</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="ov-cta-banner">
            <div className="ov-cta-text">
              <h3>Looking for Tailored Property Investment Portfolios?</h3>
              <p>Our international real estate specialists curate bespoke project options matched to your budget, yield expectations, and Golden Visa objectives.</p>
            </div>
            <button
              onClick={() => setShowConsultation(true)}
              className="ov-cta-btn"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Request Property Brochure <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ items={REALESTATE_OVERVIEW_FAQ} />

      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </div>
  );
}