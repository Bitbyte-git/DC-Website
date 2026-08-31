import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { CONTACT } from '../data.js';
import ConsultationModal from '../components/ConsultationModal.jsx';
import FAQ from '../components/FAQ.jsx';

// =====================================================================
// ALL citizenship country pages live in this ONE file.
//
// The 5 country URLs handled by this page:
//   /citizenship/antigua-barbuda   ->  Antigua & Barbuda
//   /citizenship/st-kitts-nevis    ->  St. Kitts and Nevis
//   /citizenship/malta             ->  Malta
//   /citizenship/vanuatu           ->  Vanuatu
//   /citizenship/nauru             ->  Nauru
//
// To add a new country: copy any object below, change the key (slug)
// and the content. The slug is what comes in the URL:
//   /citizenship/malta  ->  COUNTRIES['malta']
// Banner images go in public/images/ (e.g. country-malta.jpg, 1600x500)
// =====================================================================
export const COUNTRIES = {
  'antigua-barbuda': {
    name: 'Antigua & Barbuda',
    tagline: 'Citizenship by Investment',
    banner: '/images/country-antigua.webp',
    price: 'from $230,000',
    time: 'from 8 months',
    visaFree: '150+',
    family: 'Spouse, children & parents',
    process: [
      'Free consultation and program selection with our experts',
      'Document preparation and preliminary due diligence check',
      'Application submission to the Citizenship by Investment Unit (CIU)',
      'Government approval in principle',
      'Complete the investment / contribution',
      'Receive citizenship certificate and passport',
    ],
    overview:
      'The Antigua & Barbuda Citizenship by Investment Program (CIP) grants full citizenship to investors and their families who make a significant contribution to the country’s economy. All applicants undergo thorough government due diligence and background checks before citizenship is granted.',
    benefits: [
      'Visa-free travel to 150+ countries',
      'Citizenship for the whole family, including dependents',
      'No tax on worldwide income, wealth or inheritance',
      'Lifetime citizenship, passed on to future generations',
    ],
    requirements: [
      'Minimum age of 18 years',
      'Choose ONE investment option: NDF contribution, real estate, business investment, or UWI Fund',
      'National Development Fund (NDF) — minimum $230,000 non-refundable contribution',
      'Approved real estate — minimum $300,000, held for at least 5 years',
      'Business investment — $1,500,000 as sole investor, or joint investment of $5,000,000 total (min 2 investors, $400,000 each)',
      'University of the West Indies (UWI) Fund — $260,000 for a family of 6 (includes processing fees)',
      'Pass government due diligence and background checks',
      'Government, due diligence and passport fees payable for each family member',
    ],
    investments: [
      'National Development Fund donation — from $230,000',
      'Approved real estate investment — from $300,000 (hold 5 years)',
      'Business investment — from $1,500,000 (sole) / $5,000,000 (joint)',
      'University of West Indies Fund (family of 6) — from $260,000',
    ],
    fees: [
      'Processing fee — $10,000 (individual) / $20,000 (family up to 4), +$10,000 per additional dependent',
      'Due diligence — $8,500 (main applicant) + $5,000 (spouse)',
      'Dependent fee — $2,000 (age 12-17) / $4,000 (age 18+)',
      'Benefactor fee — $5,000',
      'UWI Fund option — no separate processing fee ($260,000 is inclusive, family of 6)',
    ],
    documents: [
      'Valid passport copies for all applicants',
      'Police clearance certificates',
      'Proof of source of funds',
      'Medical certificates',
    ],
  },

  'st-kitts-nevis': {
    name: 'St. Kitts and Nevis',
    tagline: 'Citizenship by Investment — Since 1984',
    banner: '/images/country-stkitts.webp',
    price: 'from $250,000',
    time: 'from 4-6 months',
    visaFree: '150+',
    family: 'Spouse, children under 26, parents 55+',
    overview:
      'St. Kitts and Nevis Citizenship by Investment is the world’s first and oldest citizenship program, launched in 1984. For over 40 years it has been top-rated for stability, strict due diligence and consistent progress — attracting entrepreneurs and investors whose contribution directly develops the nation’s economy.',
    benefits: [
      'Lifetime citizenship — passed on to future generations by descent',
      'Include spouse, children under 26 and parents aged 55 or above',
      'Commonwealth member — benefits in the UK and other Commonwealth nations',
      'Well connected to North America and Europe',
      'No minimum stay required in the country',
      'Dual citizenship permitted',
    ],
    requirements: [
      'Minimum age of 18 years at the time of application',
      'Contribute via ONE of the three approved investment options',
      'Pass the country’s stringent background and due diligence checks',
      'Attend an interview — main applicant and dependents aged 16+',
    ],
    investments: [
      'Approved Public Benefit Project — minimum $250,000 (non-refundable)',
      'Sustainable Island State Contribution (SISC) — $250,000 (applicant + up to 3 dependents)',
      'Approved real estate development or condominium unit — from $325,000',
      'Private single-family dwelling — from $600,000',
    ],
    fees: [
      'SISC additional dependent (18+) — $50,000',
      'SISC additional dependent (under 18) — $25,000',
      'Application, due diligence and passport fees — payable per applicant',
    ],
    process: [
      'Complete and submit the application',
      'Attend the interview (main applicant and dependents 16+)',
      'Pay the application fees',
      'Complete the investment',
      'Receive citizenship approval and passport',
    ],
    documents: [
      'Valid passport copies for all applicants',
      'Police clearance certificates',
      'Proof of source of funds',
      'Birth and marriage certificates',
    ],
  },

  malta: {
    name: 'Malta',
    tagline: 'Citizenship by Naturalisation for Exceptional Services (CES)',
    banner: '/images/country-malta.webp',
    price: 'from €600,000',
    time: '12-36 months',
    visaFree: '180+',
    family: 'Spouse, children under 29, parents & grandparents',
    overview:
      'The Malta Citizenship by Investment Program — officially Citizenship by Naturalisation for Exceptional Services by Direct Investment (CES) — is the only EU-approved citizenship-by-investment pathway. It grants full Maltese and EU citizenship within 12–36 months through government-approved direct investment — a secure, strategic route for HNIs, entrepreneurs and families seeking global mobility.',
    benefits: [
      'Right to live, work and study anywhere in the EU (27 countries)',
      'Visa-free travel to 180+ destinations — Schengen, UK, Canada, Singapore, Japan, Australia',
      'One of the world’s top 10 strongest passports',
      'Access to premium EU healthcare and education',
      'Include spouse, children under 29, dependent parents & grandparents',
      'Dual citizenship allowed in Malta (Indian applicants: OCI route after naturalisation)',
    ],
    requirements: [
      'Minimum age of 18 years with clean criminal record and good health',
      'Financial capacity to fulfil all three investment conditions',
      'Maintain 12–36 months residency in Malta before naturalisation',
      'Pass Malta’s four-tier due diligence — identity, source of funds, criminal screening, EU-level checks',
      'Applications accepted only through government-licensed agents',
    ],
    investments: [
      'NDSF contribution — €750,000 (12-month fast-track) or €600,000 (36-month standard)',
      'Real estate — purchase €700,000+ OR lease €16,000/year (retain 5 years)',
      'Charitable donation — €10,000 to a government-approved NGO',
      'Additional dependents — €50,000 each',
    ],
    fees: [
      'Fast-Track Route — €750,000 contribution, ~14–16 months total timeline',
      'Standard Route — €600,000 contribution, ~38–40 months total timeline',
      'Additional costs — due diligence, government processing, passport and licensed agent fees',
    ],
    process: [
      'Hire a licensed advisor — only government-approved agents can file',
      'Prepare notarized documents, translated into English',
      'Apply for residency and obtain the Maltese residence card',
      'Fulfil investment requirements — NDSF + property + donation',
      'Pass the four-tier due diligence checks',
      'Approval-in-principle from the government',
      'Oath of allegiance and Maltese passport issuance',
    ],
    documents: [
      'Valid passport',
      'Birth & marriage certificates',
      'Police clearance certificate',
      'Bank statements & proof of funds',
      'Property lease / purchase agreement',
      'Health insurance',
    ],
  },

  vanuatu: {
    name: 'Vanuatu',
    tagline: 'Development Support Program (DSP)',
    banner: '/images/country-vanuatu.webp',
    price: 'from $130,000',
    time: '2-3 months',
    visaFree: '100+',
    family: 'Spouse, children under 25, parents',
    overview:
      'Vanuatu’s Citizenship by Investment — officially the Development Support Program (DSP) — is the Pacific’s only active CBI initiative and one of the fastest in the world. A contribution to the nation’s development fund grants full citizenship and passport in just 2–3 months.',
    benefits: [
      'Fastest CBI processing in the world — 2 to 3 months',
      'Visa-free travel to 100+ countries incl. Schengen, UK, Hong Kong, Singapore',
      'No income, wealth or inheritance taxes',
      'Dual citizenship allowed',
      'Include spouse, children under 18 (under 25 if studying) and dependent parents',
      'Safe, tax-friendly and business-ready jurisdiction',
    ],
    requirements: [
      'Minimum age of 18 years',
      'Clean criminal record',
      'Good health, verified through medical reports',
      'Proof of legitimate funds for the investment',
      'Apply through a government-licensed agent',
    ],
    investments: [
      'DSP donation — single applicant $130,000 – $150,000',
      'Family of four — $180,000 – $200,000',
    ],
    fees: [
      'Application fee — $2,500 – $5,000',
      'Passport issuance — $1,000 – $1,500',
      'Licensed agent / consultancy fees — varies by provider',
    ],
    process: [
      'Submit application through a licensed agent',
      'Government due diligence & verification',
      'Donation payment to the DSP Fund',
      'Approval & issuance of passport and citizenship certificate',
    ],
    documents: [
      'Passport and identification documents',
      'Birth / marriage certificates',
      'Police clearance certificate',
      'Proof of funds and financial capability',
      'Health certificate',
    ],
  },

  nauru: {
    name: 'Nauru',
    tagline: 'Exclusive Pacific Citizenship Program',
    banner: '/images/country-nauru.webp',
    price: 'from $75,000',
    time: '3-6 months',
    visaFree: 'Pacific nations',
    family: 'Spouse, children, parents & grandparents',
    overview:
      'Nauru offers one of the world’s most exclusive and low-profile Citizenship by Investment programs. Ideal for investors seeking privacy, affordability and global diversification, it grants citizenship through a direct contribution — at a cost lower than most Caribbean programs.',
    benefits: [
      'One of the most affordable CBI programs in the world',
      'Confidential & exclusive — fewer applicants, low profile',
      'Dual citizenship allowed',
      'Tax-friendly offshore environment',
      'Include spouse, dependent children, parents & grandparents',
    ],
    requirements: [
      'Minimum age of 18 years with clean criminal record',
      'Proof of legitimate source of funds and financial capability',
      'Valid health insurance — Nauru + international coverage',
      'Pass government due diligence checks',
      'Note: limited visa-free travel (South Pacific) — no Schengen / UK access',
    ],
    investments: [
      'Government donation — $75,000 – $100,000 (non-refundable)',
      'Approved real estate — varies by availability',
      'Business investment in key industries — negotiable',
    ],
    fees: [
      'Due diligence and processing fees — payable per application',
      'Applications handled case-by-case via licensed CBI advisors',
    ],
    process: [
      'Prepare KYC documents (2–4 weeks)',
      'Submit application via a licensed CBI advisor',
      'Government due diligence checks (2–3 months)',
      'Transfer the investment after pre-approval',
      'Citizenship approval within 3–6 months',
      'Passport issuance',
    ],
    documents: [
      'Valid passport',
      'Proof of funds & source of wealth',
      'Police clearance certificate',
      'Health insurance documents',
    ],
  },
};

export default function CitizenshipPage() {
  const { slug } = useParams();
  const country = COUNTRIES[slug];
  const [showConsultation, setShowConsultation] = useState(false);

  // Scroll to top whenever the country changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!country) {
    return (
      <div className="container country-notfound">
        <h2>Country not found</h2>
        <p>The program you are looking for is not available yet.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="country-page">
      {/* Banner */}
      <div
        className="country-banner"
        style={{ backgroundImage: `url(${country.banner})` }}
      >
        <div className="country-banner-overlay">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span>
              <a href="/#services">Citizenship</a> <span>›</span>
              <em>{country.name}</em>
            </nav>
            <p className="country-tagline">{country.tagline}</p>
            <h1>{country.name}</h1>
            <div className="country-meta">
              <span>{country.price}</span>
              <span>
                <Icon name="clock" size={14} /> {country.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick facts — overlapping cards under the banner */}
      <div className="container facts-row">
        {[
          {
            icon: 'passport',
            label: 'Minimum Investment',
            value: country.price.replace('from ', ''),
          },
          { icon: 'clock', label: 'Processing Time', value: country.time },
          country.visaFree && {
            icon: 'globe',
            label: 'Visa-Free Countries',
            value: country.visaFree,
          },
          country.family && {
            icon: 'people',
            label: 'Family Eligibility',
            value: country.family,
          },
        ]
          .filter(Boolean)
          .map((f) => (
            <div className="fact-card" key={f.label}>
              <span className="fact-icon">
                <Icon name={f.icon} size={20} />
              </span>
              <div>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            </div>
          ))}
      </div>

      <div className="container country-body">
        {/* LEFT — main content */}
        <div className="country-main">
        {/* Overview */}
        <section className="country-section">
          <h2>Program Overview</h2>
          <p className="lead">{country.overview}</p>
        </section>

        {/* Benefits — 2-column cards */}
        <section className="country-section">
          <h2>Key Benefits</h2>
          <div className="benefit-grid">
            {country.benefits.map((b) => (
              <div className="benefit-card" key={b}>
                <span className="benefit-check">✓</span> {b}
              </div>
            ))}
          </div>
        </section>

        {/* Requirements (optional — shows only if the country has it) */}
        {country.requirements && (
          <section className="country-section">
            <h2>Citizenship Requirements</h2>
            <div className="req-box">
              <ul className="country-list">
                {country.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Investment options — highlight cards */}
        <section className="country-section">
          <h2>Investment Options</h2>
          <div className="invest-grid">
            {country.investments.map((i) => {
              const parts = i.split(' — ');
              return (
                <div className="invest-card" key={i}>
                  <strong>{parts[0]}</strong>
                  {parts.length > 1 && <span>{parts.slice(1).join(' — ')}</span>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Fees (optional — shows only if the country has it) */}
        {country.fees && (
          <section className="country-section">
            <h2>Fees Schedule</h2>
            <div className="fees-table">
              {country.fees.map((f) => {
                const parts = f.split(' — ');
                return (
                  <div className="fees-row" key={f}>
                    <span>{parts[0]}</span>
                    <strong>{parts.length > 1 ? parts.slice(1).join(' — ') : '—'}</strong>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Application process — numbered timeline */}
        {country.process && (
          <section className="country-section">
            <h2>Application Process</h2>
            <ol className="process-list">
              {country.process.map((s, idx) => (
                <li className="process-step" key={s}>
                  <span className="step-num">{idx + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Documents */}
        <section className="country-section">
          <h2>Documents Required</h2>
          <div className="req-box">
            <ul className="country-list">
              {country.documents.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA banner */}
        <div className="country-cta">
          <div>
            <h3>Ready to start your {country.name} journey?</h3>
            <p>Get a free consultation with our citizenship experts today.</p>
          </div>
          <div className="cta-buttons">
                         <Link to="/contact" className="btn btn-light">
              Book Free Consultation <Icon name="arrow" size={16} />
            </Link>
            <Link to="/" className="btn btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
        </div>

        {/* RIGHT — sticky sidebar */}
        <aside className="country-sidebar">
          <div className="side-card navy">
            <h3>Start Your Application</h3>
            <p>
              Talk to our experts and get a free eligibility assessment for{' '}
              {country.name}.
            </p>
                        <Link to="/contact" className="btn btn-light full">
              Book Free Consultation <Icon name="arrow" size={15} />
            </Link>
            <a
              href={CONTACT.whatsapp}
              className="btn btn-ghost full"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp Us
            </a>
          </div>

          <div className="side-card">
            <h4>Why Dream Country Visas?</h4>
            <ul className="side-list">
              <li>35+ years of experience</li>
              <li>9,000+ happy clients worldwide</li>
              <li>Programs across 50+ countries</li>
              <li>100% confidential process</li>
              <li>End-to-end documentation support</li>
            </ul>
          </div>

          <div className="side-card">
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