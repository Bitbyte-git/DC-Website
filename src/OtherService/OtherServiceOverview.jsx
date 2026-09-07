import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { OTHERSERVICES_OVERVIEW_FAQ } from '../data.js';
import FAQ from '../components/FAQ.jsx';
import ConsultationModal from '../components/ConsultationModal.jsx';

export default function OtherServiceOverview() {
  const [showConsultation, setShowConsultation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: 'Work Visas',
      tagline: 'Global Employment & Opportunity Cards',
      badge: '💼 WORK PERMITS',
      image: '/images/svc-work.webp',
      price: 'from 2–4 Weeks',
      time: 'Fast Processing',
      desc: 'Job-seeker visas, employer-sponsored permits, and Opportunity Cards for Sweden, Germany, and the UAE.',
      highlights: [
        'Germany Opportunity Card & Sweden Work Permits',
        'Direct pathway to permanent settlement & PR',
        'Full family and dependent relocation support',
      ],
      link: '/services/work-visas',
    },
    {
      name: 'Business Visas',
      tagline: 'Commercial Expansion & Entrepreneurship',
      badge: '📈 GLOBAL BUSINESS',
      image: '/images/svc-business.webp',
      price: 'from 1 Month',
      time: 'Priority Handling',
      desc: 'Establish branch offices, pitch innovative startups, and secure entrepreneur visas across key global economies.',
      highlights: [
        'Global mobility for founders, executives & directors',
        'Trade, investor, and intra-company transfer permits',
        'End-to-end corporate and business plan drafting',
      ],
      link: '/services/business-visas',
    },
    {
      name: 'Study Visas',
      tagline: 'World-Class International Education',
      badge: '🎓 HIGHER EDUCATION',
      image: '/images/svc-study.webp',
      price: 'from 3–6 Weeks',
      time: 'Seasonal Intakes',
      desc: 'Admissions and student visa processing for accredited universities in the UK, Canada, Australia, and Europe.',
      highlights: [
        'University admission guidance & SOP verification',
        'Post-study work rights (PSW) up to 3–4 years',
        'Scholarship and financial documentation assistance',
      ],
      link: '/services/study-visas',
    },
    {
      name: 'Investor Visas',
      tagline: 'Direct Capital & Angel Investment Routes',
      badge: '💎 HNWI IMMIGRATION',
      image: '/images/svc-investor.webp',
      price: 'from 2 Months',
      time: 'Tailored Structuring',
      desc: 'Tailored immigration schemes for active business investors, venture capitalists, and private enterprise founders.',
      highlights: [
        'Bespoke legal advisory on capital compliance & LRS',
        'Accelerated permanent residency conversion pathways',
        'Protection of global business assets and tax status',
      ],
      link: '/services/investor-visas',
    },
    {
      name: 'Family & Spouse Visas',
      tagline: 'Reunite with Loved Ones Abroad',
      badge: '👨‍👩‍👧‍👦 FAMILY SPONSORSHIP',
      image: '/images/svc-family.webp',
      price: 'from 2–6 Months',
      time: 'Dedicated Care',
      desc: 'Comprehensive sponsorship and legal dependency filing for spouses, children, and dependent parents worldwide.',
      highlights: [
        'Marriage and dependent relationship proof verification',
        'Fast-track spousal open work permit processing',
        'Zero stress legal representation for complex files',
      ],
      link: '/services/family-spouse-visas',
    },
    {
      name: 'Company Setup',
      tagline: 'Offshore & Freezone Incorporation',
      badge: '🏢 CORPORATE FORMATION',
      image: '/images/svc-company-setup.webp',
      price: 'from 5–7 Days',
      time: 'Turnkey Solution',
      desc: 'Seamless incorporation of entities in Dubai, the UK, Europe, and offshore banking hubs with corporate account setup.',
      highlights: [
        '100% foreign corporate ownership in top freezones',
        'Corporate bank account opening & tax registration',
        'Investor and employee visa allocation support',
      ],
      link: '/services/company-setup',
    },
    {
      name: 'Digital Nomad Visas',
      tagline: 'Live & Work Remotely Worldwide',
      badge: '💻 REMOTE MOBILITY',
      image: '/images/svc-digital-nomad.webp',
      price: 'from 3–4 Weeks',
      time: '1–2 Year Renewable',
      desc: 'Permits designed for remote employees, freelancers, and online entrepreneurs across 15+ European and Caribbean nations.',
      highlights: [
        'Live legally in top destinations while earning abroad',
        'Favorable tax incentives and simplified paperwork',
        'Bring your spouse and dependents along with you',
      ],
      link: '/services/digital-nomad-visas',
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
            <em>Other Services</em>
          </nav>

          <p className="ov-tag">
            <Icon name="support" size={14} /> Comprehensive Mobility & Visa Solutions
          </p>

          <h1>
            Full-Spectrum Visa, Business & <span>Migration Services</span>
          </h1>

          <p className="ov-hero-desc">
            End-to-end documentation, compliance, and legal support for work permits, corporate setup, student visas, and global family reunification.
          </p>

          <div className="ov-trust-pills">
            <div className="ov-trust-pill">
              <Icon name="certificate" size={14} /> MARA Registered & Accredited
            </div>
            <div className="ov-trust-pill">
              <Icon name="check" size={14} /> Turnkey Business & Visa Filing
            </div>
            <div className="ov-trust-pill">
              <Icon name="lock" size={14} /> Complete Legal File Auditing
            </div>
            <div className="ov-trust-pill">
              <Icon name="support" size={14} /> 24/7 Dedicated Support
            </div>
          </div>
        </div>
      </div>

      {/* Programs Showcase */}
      <div className="container">
        <div className="ov-section-header">
          <div>
            <h2>Explore Specialized Visa Categories</h2>
            <p>Select your required service category to view eligibility, document checklists, and timelines.</p>
          </div>
          <span className="ov-count-badge">
            {services.length} Specialized Services Available
          </span>
        </div>

        <div className="ov-grid">
          {services.map((s) => (
            <Link to={s.link} className="ov-card" key={s.name}>
              <div className="ov-card-media">
                <img src={s.image} alt={s.name} loading="lazy" decoding="async" />
                <span className="ov-card-badge">{s.badge}</span>
                <span className="ov-card-price-pill">{s.price}</span>
              </div>

              <div className="ov-card-body">
                <p className="ov-card-tagline">{s.tagline}</p>
                <h3 className="ov-card-title">{s.name}</h3>
                <p className="ov-card-desc">{s.desc}</p>

                <ul className="ov-card-highlights">
                  {s.highlights.map((h, i) => (
                    <li key={i}>
                      <Icon name="check" size={14} /> {h}
                    </li>
                  ))}
                </ul>

                <div className="ov-card-meta-row">
                  <span className="ov-card-meta-item">
                    <Icon name="clock" size={13} /> {s.time}
                  </span>
                  <span className="ov-card-meta-item">
                    <Icon name="certificate" size={13} /> Fully Certified
                  </span>
                </div>

                <span className="ov-card-btn">
                  View Service Details <Icon name="arrow" size={13} />
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
            <p className="section-tag">EXPERT GUIDANCE</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--navy)' }}>
              Why Clients Trust DC Visas for Documentation
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              We eliminate visa rejections through thorough pre-assessment and meticulous file preparation.
            </p>
          </div>

          <div className="ov-why-grid">
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="certificate" size={20} /></div>
              <h4>Error-Free Documentation</h4>
              <p>Triple-checked submission dossiers adhering strictly to current consular standards.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="lock" size={20} /></div>
              <h4>Direct Embassy Protocol</h4>
              <p>Up-to-date guidance on appointment slots, biometric capture, and interview preparation.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="support" size={20} /></div>
              <h4>Fast-Track Turnaround</h4>
              <p>Priority processing options for time-sensitive corporate travel and urgent job offers.</p>
            </div>
            <div className="ov-why-card">
              <div className="ov-why-icon"><Icon name="globe" size={20} /></div>
              <h4>Global Jurisdiction Reach</h4>
              <p>Direct capability across Europe, GCC, North America, UK, Australia, and Asia-Pacific.</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="ov-cta-banner">
            <div className="ov-cta-text">
              <h3>Have a Specific Immigration or Corporate Requirement?</h3>
              <p>Our multidisciplinary team is ready to assist you with tailored consultation and rapid file processing.</p>
            </div>
            <button
              onClick={() => setShowConsultation(true)}
              className="ov-cta-btn"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Get Free Case Assessment <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ items={OTHERSERVICES_OVERVIEW_FAQ} />

      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </div>
  );
}