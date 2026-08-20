import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';

// =====================================================================
// ALL other-service pages live in this ONE file.
//
// The 6 service URLs handled by this page:
//   /services/pr-visas             ->  PR Visas
//   /services/work-visas           ->  Work Visas
//   /services/business-visas       ->  Business Visas
//   /services/study-visas          ->  Study Visas
//   /services/investor-visas       ->  Investor Visas
//   /services/family-spouse-visas  ->  Family & Spouse Visas
//
// To add a new service: copy any object below, change the key (slug)
// and the content, then add its `link` in data.js OTHERSERVICES_MENU.
// Banner images go in public/images/ (e.g. svc-pr.jpg, 1600x500)
// =====================================================================
const SERVICES = {
  'pr-visas': {
    name: 'PR Visas',
    tagline: 'Permanent Residency Solutions',
    banner: '/images/svc-pr.png',
    highlight: 'Australia • Canada • Germany',
    time: 'from 2-3 months',
    overview:
      'Secure permanent residency in top destinations — Australia, Canada and Germany. We handle your complete PR journey: eligibility assessment, points optimization, documentation and application filing, from the first consultation to visa in hand.',
    // Country photos: pr-australia.png, pr-canada.png, pr-germany.png
    // Size: 800x600 px (4:3 landscape), public/images/
    countries: [
      {
        name: 'Australia PR',
        tagline: 'Skilled Migration — Subclass 189 / 190 / 491',
        image: '/images/pr-australia.png',
        cost: 'from AUD 4,640',
        time: '6-12 months',
        points: [
          'Subclass 189 (Skilled Independent) — live & work anywhere in Australia, no sponsorship needed, points-based',
          'Subclass 190 (Skilled Nominated) — state nomination with extra points; live in the nominating state',
          'Subclass 491 (Regional, Provisional) — regional route; PR after 3 years of meeting conditions',
          'Process — points check → EOI via SkillSelect → invitation → apply within 60 days',
          'PR benefits — Medicare, social security and a clear path to citizenship',
        ],
      },
      {
        name: 'Canada PR',
        tagline: 'Express Entry & Provincial Nominee Program (PNP)',
        image: '/images/pr-canada.png',
        cost: 'from CAD 1,365',
        time: '6-12 months',
        points: [
          'Express Entry — CRS points-based system (age, education, experience, IELTS/CELPIP)',
          'Provincial Nominee Program — +600 CRS points with a provincial nomination',
          'Direct PR for the whole family — free healthcare and education',
          'Process — ECA + language test → Express Entry profile → ITA → PR application',
          'Citizenship eligibility after just 3 years of residence',
        ],
      },
      {
        name: 'Germany Opportunity Card',
        tagline: 'Chancenkarte 2025 — Points-Based Job Seeker Visa',
        image: '/images/pr-germany.png',
        cost: '€100 – €150 (~₹8,500 – ₹13,500)',
        time: '2-3 months',
        points: [
          'Points-based system — education, work experience and language (German or English)',
          'Live in Germany and access the German job market & professional networks',
          'Minimum age 18, clean criminal record, recognized degree recommended',
          'Proof of funds to support your stay in Germany required',
          'Process — online registration → documents → consulate interview (if required) → visa issued',
        ],
      },
    ],
    benefits: [
      'Live, work and settle permanently abroad',
      'Free healthcare and education access',
      'Sponsor family members later',
      'Pathway to citizenship',
    ],
    eligibility: [
      'Skilled work experience in an in-demand occupation',
      'Language proficiency (IELTS/PTE/TEF)',
      'Educational qualification assessment',
      'Age, adaptability and points criteria',
    ],
    documents: [
      'Valid passport',
      'Educational certificates and skill assessment',
      'Language test results',
      'Work experience letters',
    ],
  },

  'work-visas': {
    name: 'Work Visas',
    tagline: 'Global Employment Opportunities',
    banner: '/images/svc-work.png',
    highlight: 'UK • Germany • UAE • Singapore',
    time: 'from 2 months',
    overview:
      'Take your career global with our work visa services. From job-seeker visas to employer-sponsored permits, we guide you through every step for destinations including the UK, Germany, UAE and more.',
    benefits: [
      'Work legally in your dream destination',
      'Family dependent visas available',
      'Pathway to PR in many countries',
      'Higher earning potential globally',
    ],
    eligibility: [
      'Job offer or in-demand skills',
      'Relevant qualifications and experience',
      'Language requirements (country-specific)',
    ],
    documents: [
      'Valid passport',
      'Job offer letter / employment contract',
      'Educational and experience certificates',
      'Language test results (if required)',
    ],
  },

  'business-visas': {
    name: 'Business Visas',
    tagline: 'Expand Your Business Globally',
    banner: '/images/svc-business.png',
    highlight: 'UAE • UK • USA • Europe',
    time: 'from 1 month',
    overview:
      'Set up or expand your business abroad with our business visa and company formation services. We assist with entrepreneur visas, business setup, banking and compliance in the UAE, UK, USA and Europe.',
    benefits: [
      'Access new markets and global clients',
      'Tax-efficient business structures',
      'Residence permits through business ownership',
      'Complete company formation support',
    ],
    eligibility: [
      'Viable business plan or existing business',
      'Sufficient investment capital',
      'Relevant business experience',
    ],
    documents: [
      'Valid passport',
      'Business plan and financial projections',
      'Proof of funds and business ownership',
      'Company registration documents (if existing)',
    ],
  },

  'study-visas': {
    name: 'Study Visas',
    tagline: 'World-Class Education Abroad',
    banner: '/images/svc-study.png',
    highlight: 'UK • Canada • Australia • USA',
    time: 'from 1 month',
    overview:
      'Study at the world’s best universities with our end-to-end student visa support — university selection, admissions, SOP guidance, visa filing and pre-departure assistance for the UK, Canada, Australia, USA and Europe.',
    benefits: [
      'Admission support for top universities',
      'Post-study work visa guidance',
      'Scholarship and education loan assistance',
      'Pathway to PR after graduation',
    ],
    eligibility: [
      'Admission offer from a recognized institution',
      'Academic qualifications',
      'Language proficiency (IELTS/TOEFL/PTE)',
      'Proof of financial support',
    ],
    documents: [
      'Valid passport',
      'Offer letter and academic transcripts',
      'Language test results',
      'Financial documents / education loan sanction',
    ],
  },

  'investor-visas': {
    name: 'Investor Visas',
    tagline: 'Residency & Citizenship Through Investment',
    banner: '/images/svc-investor.png',
    highlight: 'Europe • Caribbean • UAE',
    time: 'from 3 months',
    overview:
      'Our investor visa services cover the full spectrum — golden visas, citizenship by investment and investor residence permits. We match your goals and budget to the right program across Europe, the Caribbean and beyond.',
    benefits: [
      'Fast-track residency or citizenship',
      'Visa-free global mobility',
      'Family included in one application',
      'Wealth diversification and tax planning',
    ],
    eligibility: [
      'Qualifying investment amount (program-specific)',
      'Clean source of funds',
      'Clean criminal record',
    ],
    documents: [
      'Valid passport copies for all applicants',
      'Proof of funds and source of wealth',
      'Police clearance certificates',
      'Investment documentation',
    ],
  },

  'family-spouse-visas': {
    name: 'Family & Spouse Visas',
    tagline: 'Reunite With Your Loved Ones',
    banner: '/images/svc-family.png',
    highlight: 'UK • Canada • Australia • USA',
    time: 'from 3 months',
    overview:
      'Bring your family together abroad. We handle spouse visas, dependent visas, parent sponsorships and family reunification applications with complete documentation and interview preparation support.',
    benefits: [
      'Reunite with spouse, children or parents',
      'Work rights for spouses in many countries',
      'Path to PR and citizenship for dependents',
      'Expert handling of complex cases',
    ],
    eligibility: [
      'Sponsor with valid status (PR/citizen/visa holder)',
      'Genuine relationship evidence',
      'Financial requirement (country-specific)',
    ],
    documents: [
      'Valid passports of applicant and sponsor',
      'Marriage / birth certificates',
      'Relationship evidence (photos, communication)',
      'Sponsor income and status documents',
    ],
  },
};

export default function OtherservicePage() {
  const { slug } = useParams();
  const service = SERVICES[slug];

  // Scroll to top whenever the service changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="container country-notfound">
        <h2>Service not found</h2>
        <p>The service you are looking for is not available yet.</p>
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
        style={{ backgroundImage: `url(${service.banner})` }}
      >
        <div className="country-banner-overlay">
          <div className="container">
            <p className="country-tagline">{service.tagline}</p>
            <h1>{service.name}</h1>
            <div className="country-meta">
              <span>{service.highlight}</span>
              <span>
                <Icon name="clock" size={14} /> {service.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container country-body">
        <section className="country-section">
          <h2>Service Overview</h2>
          <p>{service.overview}</p>
        </section>

        {/* Country blocks — image + content, alternating sides */}
        {service.countries && (
          <section className="country-section">
            <h2>Top Destinations We Serve</h2>
            <div className="svc-countries">
              {service.countries.map((c, i) => (
                <div
                  className={`svc-country ${i % 2 === 1 ? 'rev' : ''}`}
                  key={c.name}
                >
                  <img className="svc-country-img" src={c.image} alt={c.name} />
                  <div className="svc-country-info">
                    <h3>{c.name}</h3>
                    <p className="svc-country-tag">{c.tagline}</p>
                    <div className="svc-country-chips">
                      <span>{c.cost}</span>
                      <span>
                        <Icon name="clock" size={13} /> {c.time}
                      </span>
                    </div>
                    <ul className="country-list">
                      {c.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="country-section">
          <h2>Key Benefits</h2>
          <ul className="country-list">
            {service.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="country-section">
          <h2>Who Can Apply</h2>
          <ul className="country-list">
            {service.eligibility.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>

        <section className="country-section">
          <h2>Documents Required</h2>
          <ul className="country-list">
            {service.documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <div className="country-cta">
          <a href="/#contact" className="btn btn-primary">
            Book Free Consultation <Icon name="arrow" size={16} />
          </a>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}