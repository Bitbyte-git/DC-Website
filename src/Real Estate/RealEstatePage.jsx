import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { CONTACT } from '../data.js';
import ConsultationModal from '../components/ConsultationModal.jsx';
import FAQ from '../components/FAQ.jsx';

// =====================================================================
// ALL real estate location pages live in this ONE file.
//
// The 3 location URLs handled by this page:
//   /realestate/dubai    ->  Dubai (UAE Golden Visa)
//   /realestate/greece   ->  Greece Golden Visa
//   /realestate/latvia   ->  Latvia Golden Visa
//
// To add a new location: copy any object below, change the key (slug)
// and the content, then add its `link` in data.js REALESTATE_MENU.
// Banner images go in public/images/ (e.g. re-dubai.png, 1920x1080)
// =====================================================================
const LOCATIONS = {
  dubai: {
    name: 'Dubai',
    tagline: 'Property Investment & UAE Golden Visa',
    banner: '/images/re-dubai.png',
    price: 'from AED 1.5M',
    time: '1-4 months',
    residency: '10-year Golden Visa',
    family: 'Spouse, children & parents',
    overview:
      'The UAE Golden Visa is a 10-year renewable long-term residence visa for investors, professionals and entrepreneurs — live, work and study in the UAE without a local sponsor. Dubai’s dynamic property market offers 8-10% rental yields with zero property tax, and an investment of AED 2M qualifies you for the Golden Visa.',
    benefits: [
      '10-year renewable visa — sponsor-free residence',
      'Family inclusion — spouse, children and (in some cases) parents',
      'High rental yields of 8-10% per annum with zero property tax',
      'Simplified travel access — Schengen, UK, Singapore, GCC & more',
      'Business-friendly hub with world-class infrastructure',
      'Fast processing — as quick as 1-2 months on fast-track',
    ],
    requirements: [
      'Real estate route — AED 2,000,000 (~$545,000), property retained for at least 3 years',
      'Business capital or public investments route — AED 10,000,000 (~$2.7M)',
      'Valid passport, health clearance and police clearance certificate',
      'Proof of funds / investment documentation',
      'Indian applicants — remittance via RBI-compliant LRS route',
      'Note: Golden Visa is long-term residency, not a path to citizenship',
    ],
    investments: [
      'Ready-to-move apartments — from AED 1.5M',
      'Off-plan projects with payment plans — from AED 1M',
      'Golden Visa qualifying property — from AED 2M',
      'Luxury villas & waterfront properties — from AED 5M',
    ],
    fees: [
      'Golden Visa government fees — AED 2,000 – 3,500 per applicant',
      'Medical & health insurance — AED 1,500 – 3,000 per year',
      'Licensed consultant fees — AED 10,000 – 15,000 (optional)',
      'Renewal fees — same as initial application',
    ],
    process: [
      'Confirm eligibility and gather documents',
      'Select the property / investment route with our advisors',
      'Submit application through a licensed UAE immigration consultant',
      'Government review and due diligence',
      'Complete the investment and pay the fees',
      'Visa issuance and residence permit activation',
    ],
    documents: [
      'Valid passport',
      'Health clearance certificate',
      'Proof of funds / investment',
      'Police clearance certificate',
    ],
  },

  greece: {
    name: 'Greece Golden Visa',
    tagline: 'EU Residency Through Real Estate',
    banner: '/images/re-greece.png',
    price: 'from €250,000',
    time: '4-6 months',
    residency: '5-year renewable permit',
    family: 'Spouse, children up to 24, parents',
    overview:
      'The Greece Golden Visa is one of Europe’s most attractive residency-by-investment programs. Invest in qualifying real estate and secure a 5-year renewable residence permit for the whole family — with Schengen travel freedom, no minimum stay requirement, and a pathway to Greek citizenship after 7 years.',
    benefits: [
      'Visa-free travel across 25+ Schengen countries',
      'Residency for the entire family — spouse, children (up to 21-24) and dependent parents',
      'No minimum stay required to maintain residency',
      'Rental income potential from Greece’s tourism market',
      'Pathway to Greek citizenship after 7 years of residence',
      'Access to European healthcare and education',
    ],
    requirements: [
      'Prime zones (Athens prime, high-demand areas) — minimum €500,000 property',
      'Other regions — from €250,000',
      'Clean criminal record and proof of lawful funds',
      'Valid health insurance for all family members',
      'Indian applicants — funds transferred via RBI LRS route',
      'Citizenship — requires 7 years residence + basic Greek language & integration',
    ],
    investments: [
      'Athens Riviera / Prime (Glyfada, Voula, Kolonaki) — from €500,000, high rental yield',
      'Athens non-prime — €250,000 – €400,000, family-friendly',
      'Thessaloniki waterfront — from €250,000, student rental demand',
      'Crete, Rhodes & Corfu — from €250,000, holiday homes with seasonal yield',
    ],
    fees: [
      'Transfer tax — ~3% on resales; VAT on new builds',
      'Government fees — payable per family member',
      'Legal & professional — lawyer, translator, notary',
      'Ongoing costs — property management, insurance, utilities',
    ],
    process: [
      'Choose the investment route & preferred region',
      'Hire a licensed Greek lawyer & real estate advisor',
      'Open a Greek bank account & obtain Tax ID (AFM)',
      'Reserve the property & complete due diligence',
      'Purchase the property & collect required documents',
      'Submit application & biometrics',
      'Receive the 5-year renewable residence permit',
    ],
    documents: [
      'Valid passports for all applicants',
      'Property purchase contract',
      'Police clearance & proof of lawful funds',
      'Health insurance covering Greece',
    ],
  },

  latvia: {
    name: 'Latvia',
    tagline: 'Golden Visa — Investor Residence Permit',
    banner: '/images/re-latvia.png',
    price: 'from €250,000',
    time: '1-6 months',
    residency: '5-year renewable permit',
    family: 'Spouse & dependent children',
    overview:
      'The Latvia Golden Visa (Investor Visa) grants Schengen-area residency in an EU member state through investment. With one of the lowest entry costs in Europe and processing from just 30 days, it opens the door to permanent residency after 5 years — and ultimately a Latvian passport with visa-free access to 185 countries.',
    benefits: [
      'Schengen area residency in an EU member state',
      '5-year residence permit, renewable',
      'One of the lowest-cost EU Golden Visa routes',
      'Fast processing — from 30 days to 6 months',
      'Family inclusion — spouse and dependent children',
      'PR after 5 years (183+ days/year stay + taxes), then citizenship',
    ],
    requirements: [
      'Minimum 18 years; non-EU / non-EEA / non-Swiss nationals',
      'Clean criminal record and good health',
      'No outstanding tax liabilities anywhere in the world',
      'Financial proof — €8,400 (main applicant) / €4,200 (spouse) / €2,520 per dependent',
      'Hold the investment for a minimum of 5 years',
      'Health insurance of at least 1 year for all applicants',
    ],
    investments: [
      'Real estate — €250,000 + 5% state fee (1 unit in Riga/Jurmala, up to 2 units elsewhere)',
      'Business investment — €50,000 donation + €10,000 State budget contribution',
      'Government bonds — €250,000',
      'Bank deposit in a Latvian bank — €280,000',
    ],
    fees: [
      'Real estate state fee — 5% of property value',
      'Stamp duty — 2% for ownership registration',
      'Business route — €10,000 State budget contribution + processing fee',
    ],
    process: [
      'Make the investment in Latvia & prepare the documents',
      'On approval, receive a temporary D-visa and travel to Latvia',
      'Receive the 5-year temporary residence permit (renewed annually)',
      'Keep the investment intact & renew the permit every 5 years',
      'For PR: stay 183+ days/year and pay taxes for 5 years',
      'Apply for permanent residency, then the Latvian passport',
    ],
    documents: [
      'Completed application form + valid passport',
      'Proof of investment and source of funds',
      'Clean criminal record certificate (home country + countries lived 6+ months in last 5 years)',
      'Health insurance (1 year) + medical certificate',
      'Financial stability proof (bank / income statements)',
      'Tax compliance declaration + marriage / birth certificates for dependents',
    ],
  },
};

export default function RealEstatePage() {
  const { slug } = useParams();
  const location = LOCATIONS[slug];
  const [showConsultation, setShowConsultation] = useState(false);

  // Scroll to top whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!location) {
    return (
      <div className="container country-notfound">
        <h2>Location not found</h2>
        <p>The property market you are looking for is not available yet.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="country-page re-page">
      {/* Banner — bottom-aligned luxury style */}
      <div
        className="country-banner"
        style={{ backgroundImage: `url(${location.banner})` }}
      >
        <div className="country-banner-overlay re-overlay">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span>
              <a href="/#properties">Real Estate</a> <span>›</span>
              <em>{location.name}</em>
            </nav>
            <p className="re-kicker">— REAL ESTATE INVESTMENT</p>
            <h1>{location.name}</h1>
            <p className="re-tagline">{location.tagline}</p>
            <div className="country-meta">
              <span className="gold-chip">{location.price}</span>
              <span>
                <Icon name="clock" size={14} /> {location.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navy stats strip under the banner */}
      <div className="re-stats">
        <div className="container re-stats-inner">
          {[
            {
              label: 'Minimum Investment',
              value: location.price.replace('from ', ''),
            },
            { label: 'Processing Time', value: location.time },
            location.residency && {
              label: 'Residency Benefit',
              value: location.residency,
            },
            location.family && {
              label: 'Family Eligibility',
              value: location.family,
            },
          ]
            .filter(Boolean)
            .map((f) => (
              <div className="re-stat" key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="container country-body">
        {/* LEFT — main content */}
        <div className="country-main">
          <section className="country-section">
            <h2 className="re-heading">
              <span>01</span> Market Overview
            </h2>
            <p className="lead">{location.overview}</p>
          </section>

          <section className="country-section">
            <h2 className="re-heading">
              <span>02</span> Why Invest Here
            </h2>
            <div className="re-features">
              {location.benefits.map((b) => (
                <div className="re-feature" key={b}>
                  <span className="re-diamond">◆</span> {b}
                </div>
              ))}
            </div>
          </section>

          {location.requirements && (
            <section className="country-section">
              <h2 className="re-heading">
                <span>03</span> Requirements &amp; Eligibility
              </h2>
              <ul className="re-lines">
                {location.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="country-section">
            <h2 className="re-heading">
              <span>04</span> Investment Options
            </h2>
            <div className="re-pricing">
              {location.investments.map((i) => {
                const parts = i.split(' — ');
                return (
                  <div className="re-price-card" key={i}>
                    <div className="re-price-head">{parts[0]}</div>
                    {parts.length > 1 && (
                      <div className="re-price-body">
                        {parts.slice(1).join(' — ')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {location.fees && (
            <section className="country-section">
              <h2 className="re-heading">
                <span>05</span> Costs &amp; Fees
              </h2>
              <div className="re-fees">
                {location.fees.map((f) => {
                  const parts = f.split(' — ');
                  return (
                    <div className="re-fee" key={f}>
                      <span>{parts[0]}</span>
                      <strong>
                        {parts.length > 1 ? parts.slice(1).join(' — ') : '—'}
                      </strong>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {location.process && (
            <section className="country-section">
              <h2 className="re-heading">
                <span>06</span> Application Process
              </h2>
              <ol className="process-list">
                {location.process.map((s, idx) => (
                  <li className="process-step" key={s}>
                    <span className="step-num">{idx + 1}</span>
                    <p>{s}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="country-section">
            <h2 className="re-heading">
              <span>07</span> Documents Required
            </h2>
            <ul className="re-lines">
              {location.documents.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          {/* CTA — gold-accented white card */}
          <div className="re-cta">
            <div>
              <h3>Ready to invest in {location.name}?</h3>
              <p>Get a free consultation with our property investment experts.</p>
            </div>
            <div className="cta-buttons">
                            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowConsultation(true)}
              >
                Book Free Consultation <Icon name="arrow" size={16} />
              </button>
              <Link to="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — sticky sidebar */}
        <aside className="country-sidebar">
          <div className="side-card navy">
            <h3>Start Your Investment</h3>
            <p>
              Talk to our experts and get a free investment assessment for{' '}
              {location.name}.
            </p>
                        <button
              type="button"
              className="btn btn-light full"
              onClick={() => setShowConsultation(true)}
            >
              Book Free Consultation <Icon name="arrow" size={15} />
            </button>
            <a
              href={CONTACT.whatsapp}
              className="btn btn-ghost full"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp Us
            </a>
          </div>

          <div className="side-card goldline">
            <h4>Why Dream Country Visas?</h4>
            <ul className="side-list">
              <li>35+ years of experience</li>
              <li>9,000+ happy clients worldwide</li>
              <li>Premium properties in 50+ countries</li>
              <li>100% confidential process</li>
              <li>End-to-end legal &amp; documentation support</li>
            </ul>
          </div>

          <div className="side-card goldline">
            <h4>Contact Info</h4>
            <ul className="side-contact">
              <li>
                <Icon name="phone" size={14} /> {CONTACT.phone}
              </li>
              <li>
                <Icon name="mail" size={14} /> {CONTACT.email}
              </li>
              <li>
                <Icon name="pin" size={14} /> {CONTACT.country}
              </li>
            </ul>
          </div>
                </aside>
      </div>

      <ConsultationModal
        open={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
      <FAQ />
    </div>
  );
}