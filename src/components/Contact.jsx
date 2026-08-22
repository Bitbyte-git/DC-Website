import { useState } from 'react';
import {
  CONTACT,
  CONTACT_FEATURES,
  CITIZENSHIP_MENU,
  RESIDENCY_MENU,
  REALESTATE_MENU,
  PR_MENU,
  OTHERSERVICES_MENU,
} from '../data.js';
import { Icon } from './Icons.jsx';

// Builds the "Program of interest" dropdown from every service category,
// so it always stays in sync with data.js without manual duplication.
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

const INITIAL = {
  program: '',
  salutation: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  nationality: '',
  residence: '',
  updates: false,
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend connected — just confirm receipt to the user for now.
    setForm(INITIAL);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-box contact-box-wide">
        <div className="contact-intro">
          <p className="section-tag left">CONTACT US</p>
          <h2>
            We&rsquo;re Here to Help You
            <br />
            Take the Next Step
          </h2>

          <ul className="contact-list">
            <li>
              <Icon name="phone" size={16} /> {CONTACT.phone}
            </li>
            <li>
              <Icon name="mail" size={16} /> {CONTACT.email}
            </li>
            <li>
              <Icon name="pin" size={16} /> {CONTACT.country}
            </li>
          </ul>

          <div className="socials">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={15} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={15} /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={15} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={15} /></a>
          </div>

                    <div className="contact-features">
            {CONTACT_FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <span className="feature-icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mara-badge">
            <img src="/landing-img/MARA.webp" alt="MARA Registered" />
            <span>MARN 0100178</span>
          </div>
        </div>

                <form className="contact-form contact-form-wide" onSubmit={handleSubmit}>
          <h3 className="contact-form-heading">Contact Information</h3>

          <label className="field-label">Program of interest*</label>
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Please select
            </option>
            {PROGRAM_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <label className="field-label">Salutation*</label>
          <select
            name="salutation"
            value={form.salutation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Please select
            </option>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="field-label">E-mail address*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter e-mail address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row-2">
            <div>
              <label className="field-label">Nationality*</label>
              <select
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Please select
                </option>
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label">Country you currently reside in*</label>
              <select
                name="residence"
                value={form.residence}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Please select
                </option>
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="contact-checkbox">
            <input
              type="checkbox"
              name="updates"
              checked={form.updates}
              onChange={handleChange}
            />
            <span>
              Please keep me updated and send me information and news about
              Dream Country Visas, event invitations, and publications via
              e-mail.
            </span>
          </label>

          <button type="submit" className="btn btn-primary">
            {sent ? 'Thank You ✓' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}