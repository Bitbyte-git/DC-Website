import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import {
  CONTACT,
  CONTACT_FEATURES,
  CITIZENSHIP_MENU,
  RESIDENCY_MENU,
  REALESTATE_MENU,
  PR_MENU,
  OTHERSERVICES_MENU,
} from '../data.js';

// Builds the "Program of interest" dropdown from every service category —
// same list used in the Consultation Modal.
function buildProgramOptions() {
  const list = [];
  CITIZENSHIP_MENU.groups.forEach((g) =>
    g.items.forEach((i) => list.push(`Citizenship of ${i.name}`))
  );
  RESIDENCY_MENU.groups.forEach((g) =>
    g.items.forEach((i) => list.push(`Residence in ${i.name}`))
  );
  REALESTATE_MENU.groups.forEach((g) =>
    g.items.forEach((i) => list.push(`Real Estate Investment — ${i.name}`))
  );
  PR_MENU.groups.forEach((g) => g.items.forEach((i) => list.push(i.name)));
  OTHERSERVICES_MENU.groups.forEach((g) =>
    g.items.forEach((i) => list.push(i.name))
  );
  return list;
}

const PROGRAM_OPTIONS = buildProgramOptions();

const COUNTRY_OPTIONS = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'United Arab Emirates', 'Germany', 'France', 'Italy', 'Spain',
  'Portugal', 'Malta', 'Cyprus', 'Latvia', 'Greece', 'Singapore',
  'New Zealand', 'South Africa', 'Nigeria', 'Saudi Arabia', 'Qatar',
  'Kuwait', 'Bahrain', 'Oman', 'Bangladesh', 'Pakistan', 'Sri Lanka',
  'Nepal', 'Philippines', 'Malaysia', 'Indonesia', 'China', 'Japan',
  'South Korea', 'Brazil', 'Mexico', 'Netherlands', 'Switzerland',
  'Sweden', 'Ireland', 'Poland', 'Turkey', 'Egypt', 'Kenya',
  'Other',
];

const ENGLISH_LEVELS = ['Competitive', 'Proficient', 'Superior'];

// Programs that require the extra "English Level" question.
const PR_PROGRAMS_NEEDING_ENGLISH = ['Australia PR', 'Canada PR'];

const EMPTY_FORM = {
  program: '',
  englishLevel: '',
  salutation: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  nationality: '',
  residence: '',
  updates: false,
};

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const needsEnglishLevel = PR_PROGRAMS_NEEDING_ENGLISH.includes(form.program);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: type === 'checkbox' ? checked : value };
      // Reset englishLevel if the person switches away from a PR program
      if (name === 'program' && !PR_PROGRAMS_NEEDING_ENGLISH.includes(value)) {
        next.englishLevel = '';
      }
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact-page-premium">
      {/* Hero banner — dark navy, same style as country pages */}
      <div
        className="country-banner"
        style={{ backgroundImage: `url('/landing-img/contact-hero-bg.webp')` }}
      >
        <div className="country-banner-overlay">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> <span>›</span>
              <em>Contact Us</em>
            </nav>
            <p className="country-tagline">GET IN TOUCH</p>
            <h1>Let's Start Your Journey Together</h1>
            <div className="country-meta">
              <span>
                <Icon name="phone" size={14} /> {CONTACT.phone}
              </span>
              <span>
                <Icon name="mail" size={14} /> {CONTACT.email}
              </span>
              <span>
                <Icon name="clock" size={14} /> {CONTACT.hours}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping quick-contact cards */}
      <div className="container facts-row">
        <a href={`tel:${CONTACT.phone}`} className="fact-card">
          <span className="fact-icon">
            <Icon name="phone" size={20} />
          </span>
          <div>
            <strong>Call Us</strong>
            <span>{CONTACT.phone}</span>
          </div>
        </a>
        <a href={`mailto:${CONTACT.email}`} className="fact-card">
          <span className="fact-icon">
            <Icon name="mail" size={20} />
          </span>
          <div>
            <strong>Email Us</strong>
            <span>{CONTACT.email}</span>
          </div>
        </a>
        
         <a href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="fact-card"
        >
          <span className="fact-icon">
            <Icon name="whatsapp" size={20} />
          </span>
          <div>
            <strong>WhatsApp</strong>
            <span>Chat instantly</span>
          </div>
        </a>
        <div className="fact-card">
          <span className="fact-icon">
            <Icon name="clock" size={20} />
          </span>
          <div>
            <strong>Working Hours</strong>
            <span>{CONTACT.hours}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section">
        <div className="container contact-premium-grid">
          {/* LEFT — offices + features */}
          <div className="contact-premium-left">
            <p className="section-tag left">OUR OFFICES</p>
            <h2>Visit Us in Person</h2>
            <p className="contact-premium-intro">
              Prefer a face-to-face conversation? Drop by either of our
              offices — our team is ready to walk you through your options.
            </p>

            <div className="office-cards">
              {CONTACT.offices.map((office) => (
                
                 <a href={office.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="office-card"
                  key={office.label}
                >
                  <span className="office-card-icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <div>
                    <strong>{office.label}</strong>
                    <p>{office.address}</p>
                    <span className="office-card-link">
                      Get Directions <Icon name="arrow" size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

                       <div className="contact-premium-features">
              {CONTACT_FEATURES.map((f) => (
                <div className="feature" key={f.title}>
                  <span className="feature-icon">
                    <Icon name={f.icon} size={18} />
                  </span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-trust-strip">
              <div>
                <strong>25+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>9,000+</strong>
                <span>Happy Clients</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Countries Covered</span>
              </div>
            </div>
          </div>

          {/* RIGHT — elevated form card */}
          <div className="contact-premium-form-wrap">
            <div className="contact-form-wide contact-premium-form">
              <span className="contact-premium-badge">
                <Icon name="mail" size={14} /> QUICK RESPONSE
              </span>
              <h3 className="contact-form-heading">Send Us a Message</h3>
              <p className="contact-premium-form-sub">
                Fill in the form below and our team will get back to you
                within 24 hours.
              </p>

                            {sent ? (
                <p className="modal-thankyou">
                  Thank you! Your message has been sent — our team will get
                  back to you shortly.
                </p>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                                   <label className="field-label">Program of interest*</label>
                  <select name="program" value={form.program} onChange={update} required>
                    <option value="" disabled>Please select</option>
                    {PROGRAM_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>

                  {needsEnglishLevel && (
                    <>
                      <label className="field-label">What is your English level?*</label>
                      <select name="englishLevel" value={form.englishLevel} onChange={update} required>
                        <option value="" disabled>Please select</option>
                        {ENGLISH_LEVELS.map((lvl) => (
                          <option key={lvl} value={lvl}>{lvl}</option>
                        ))}
                      </select>
                    </>
                  )}

                  <label className="field-label">Salutation*</label>
                  <select name="salutation" value={form.salutation} onChange={update} required>
                    <option value="" disabled>Please select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                  </select>

                  <div className="form-row-2">
                    <div>
                      <label className="field-label">First name*</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={form.firstName}
                        onChange={update}
                        required
                      />
                    </div>
                    <div>
                      <label className="field-label">Last name*</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={form.lastName}
                        onChange={update}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div>
                      <label className="field-label">Telephone number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 81234 56789"
                        value={form.phone}
                        onChange={update}
                      />
                    </div>
                    <div>
                      <label className="field-label">E-mail address*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter e-mail address"
                        value={form.email}
                        onChange={update}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div>
                      <label className="field-label">Nationality*</label>
                      <select name="nationality" value={form.nationality} onChange={update} required>
                        <option value="" disabled>Please select</option>
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="field-label">Country you currently reside in*</label>
                      <select name="residence" value={form.residence} onChange={update} required>
                        <option value="" disabled>Please select</option>
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <label className="contact-checkbox">
                    <input
                      type="checkbox"
                      name="updates"
                      checked={form.updates}
                      onChange={update}
                    />
                    <span>
                      Please keep me updated and send me information and
                      news about Dream Country Visas, event invitations,
                      and publications via e-mail.
                    </span>
                  </label>

                  <button type="submit" className="btn btn-primary full">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section">
        <div className="container">
          <div className="country-cta">
            <div>
              <h3>Prefer to talk right away?</h3>
              <p>Book a free consultation call with our expert team today.</p>
            </div>
                        <div className="cta-buttons">
              
              <a  href={CONTACT.whatsapp}
                className="btn btn-light"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size={16} /> Chat on WhatsApp
              </a>
              <Link to="/" className="btn btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}