  import { useEffect, useState } from 'react';
  import { useParams, Link } from 'react-router-dom';
  import { Icon } from '../components/Icons.jsx';
  import ConsultationModal from '../components/ConsultationModal.jsx';
  import FAQ from '../components/FAQ.jsx';

  // =====================================================================
  // ALL other-service pages live in this ONE file.
  //
  // The 5 service URLs handled by this page:
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
        'work-visas': {
      name: 'Work Visas',
      tagline: 'Global Employment Opportunities',
      banner: '/images/svc-work.webp',
      highlight: 'Sweden • Germany • Dubai',
      time: 'from 2 months',
      overview:
        'Take your career global with our work visa services. From job-seeker visas to employer-sponsored permits, we guide you through every step for destinations including Sweden, Germany and Dubai.',
      countries: [
        {
          name: 'Sweden',
          tagline: 'Work Permit & Job-Seeker Visa',
          image: '/images/country-sweden.webp',
          cost: 'from SEK 2,000',
          time: 'from 2 months',
          points: [
            'Employer-sponsored work permit for skilled roles',
            'Path to permanent residency after 4 years',
            'Family members can join on dependent visas',
            'Strong worker rights and social benefits',
          ],
        },
        {
          name: 'Germany Opportunity Card',
          tagline: 'Chancenkarte — Points-Based Job Search Visa',
          image: '/images/country-germany-work.webp',
          cost: 'from €100-150',
          time: 'from 6-8 weeks',
          points: [
            'Points-based eligibility — no job offer required to apply',
            'Up to 1 year to search for a job in Germany',
            'Part-time work allowed while job-hunting',
            'Converts to a full work visa once employed',
          ],
        },
        {
          name: 'Dubai',
          tagline: 'UAE Employment Visa',
          image: '/images/country-dubai-work.webp',
          cost: 'from AED 3,000',
          time: 'from 2-4 weeks',
          points: [
            'Tax-free income and fast processing',
            'Employer-sponsored, renewable residence visa',
            'Family sponsorship available on approval',
            'Access to a global business hub',
          ],
        },
      ],
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
      banner: '/images/country-sweden.webp',
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
      banner: '/images/svc-study.webp',
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
      banner: '/images/svc-investor.webp',
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
      banner: '/images/svc-family.webp',
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

    'company-setup': {
      name: 'Company Setup',
      tagline: 'Start Your Business Abroad',
      banner: '/images/svc-company-setup.webp',
      highlight: 'UAE • UK • Singapore',
      time: 'from 2-4 weeks',
      overview:
        'Launch your company in a leading global jurisdiction with our end-to-end company formation services — entity structuring, licensing, bank account setup and ongoing compliance support.',
      benefits: [
        'Fast company registration and licensing',
        'Tax-efficient business structures',
        'Corporate bank account assistance',
        'Residence visa eligibility through ownership',
      ],
      eligibility: [
        'Valid passport and clean background',
        'Defined business activity',
        'Sufficient share capital (jurisdiction-specific)',
      ],
      documents: [
        'Valid passport copies',
        'Business plan / activity description',
        'Proof of address',
        'Bank reference letter (if required)',
      ],
    },

    'digital-nomad-visas': {
      name: 'Digital Nomad Visas',
      tagline: 'Work Remotely From Anywhere',
      banner: '/images/svc-digital-nomad.webp',
      highlight: 'Portugal • Spain • UAE',
      time: 'from 4-6 weeks',
      overview:
        'Live and work remotely from some of the world\u2019s most desirable destinations. Our digital nomad visa services cover eligibility assessment, documentation and end-to-end application support.',
      benefits: [
        'Legally live and work remotely abroad',
        'No local employer sponsorship needed',
        'Access to co-working hubs and nomad communities',
        'Path to residency in several countries',
      ],
      eligibility: [
        'Proof of remote employment or freelance income',
        'Minimum monthly income requirement',
        'Valid health insurance',
      ],
      documents: [
        'Valid passport',
        'Proof of remote income / employment contract',
        'Bank statements',
        'Health insurance documents',
      ],
    },
  };

  export default function OtherservicePage() {
    const { slug } = useParams();
    const service = SERVICES[slug];
    const [showConsultation, setShowConsultation] = useState(false);

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

                <div className="container country-body no-sidebar">
          <div className="country-main">
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

                              <section className="country-section svc-info-row">
            <div className="svc-info-col">
              <h2>Key Benefits</h2>
              <ul className="country-list">
                {service.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="svc-info-col">
              <h2>Who Can Apply</h2>
              <ul className="country-list">
                {service.eligibility.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="svc-info-col">
              <h2>Documents Required</h2>
              <ul className="country-list">
                {service.documents.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </section>

                                  <div className="country-cta">
            <button
              type="button"
              className="btn btn-light"
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

        <ConsultationModal
          open={showConsultation}
          onClose={() => setShowConsultation(false)}
        />

        <FAQ />
      </div>
    );
  }