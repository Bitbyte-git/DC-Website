import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  CITIZENSHIP_MENU,
  RESIDENCY_MENU,
  REALESTATE_MENU,
  PR_MENU,
  OTHERSERVICES_MENU,
} from '../data.js';

// Builds the "Program of interest" dropdown from every service category.
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

const ENGLISH_LEVELS = [
  'Excellent (8+ Band)',
  'Good (7 Band)',
  'Average (6 Band)',
  'Poor (5 Band)',
  'Very Poor (4 Band)',
];

const PR_PROGRAMS = ['Australia PR', 'Canada PR'];

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

const EMPTY_MAIN_FORM = {
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

const EMPTY_PR_FORM = {
  englishLevel: '',
  prProgram: '',
  salutation: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  nationality: '',
  residence: '',
  updates: false,
};

// ---------------------------------------------------------------
// PR Contact — a second, simpler popup opened from inside the main
// consultation modal via the "PR Contact" button.
// ---------------------------------------------------------------
export function PRContactModal({ open, onClose, onSwitchToMain }) {
  const [form, setForm] = useState(EMPTY_PR_FORM);
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(EMPTY_PR_FORM);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

                <div className="modal-title-row">
          <h3>PR Eligibility Contact</h3>
          <button
            type="button"
            className="btn btn-outline modal-pr-btn"
            onClick={onSwitchToMain}
          >
            Book Free Consultation
          </button>
        </div>
        <p className="modal-sub">
          Share a few details and our PR experts will assess your eligibility.
        </p>

        {sent ? (
          <p className="modal-thankyou">
            Thank you! We've received your request and will get back to you
            shortly.
          </p>
        ) : (
          <form className="contact-form contact-form-wide modal-form" onSubmit={handleSubmit}>
                        <label className="field-label">What is your English level?*</label>
            <select name="englishLevel" value={form.englishLevel} onChange={update} required>
              <option value="" disabled>
                What is your English level?
              </option>
              {ENGLISH_LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>

            <label className="field-label">PR Program*</label>
            <select name="prProgram" value={form.prProgram} onChange={update} required>
              <option value="" disabled>
                Please select
              </option>
              {PR_PROGRAMS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <label className="field-label">Salutation*</label>
            <select name="salutation" value={form.salutation} onChange={update} required>
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
                <select name="residence" value={form.residence} onChange={update} required>
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
                onChange={update}
              />
              <span>
                Please keep me updated and send me information and news about
                Dream Country Visas, event invitations, and publications via
                e-mail.
              </span>
            </label>

            <button type="submit" className="btn btn-primary full">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------
// Main consultation modal — the "Book Free Consultation" popup.
// ---------------------------------------------------------------
export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY_MAIN_FORM);
  const [sent, setSent] = useState(false);
  const [showPRContact, setShowPRContact] = useState(false);

  if (!open) return null;

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(EMPTY_MAIN_FORM);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  // When PR Contact is open, render ONLY that modal — otherwise this
  // component's own overlay/box would also render underneath it,
  // stacking two backdrops on top of each other.
    if (showPRContact) {
    return (
      <PRContactModal
        open={showPRContact}
        onClose={() => {
          setShowPRContact(false);
          onClose();
        }}
        onSwitchToMain={() => setShowPRContact(false)}
      />
    );
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

                <div className="modal-title-row">
          <h3>Book Your Free Consultation</h3>
          <button
            type="button"
            className="btn btn-outline modal-pr-btn"
            onClick={() => setShowPRContact(true)}
          >
            PR Contact
          </button>
        </div>
        <p className="modal-sub">
          Tell us a bit about what you're looking for and our experts will
          reach out to you.
        </p>

                {sent ? (
          <p className="modal-thankyou">
            Thank you! We've received your request and will get back to you
            shortly.
          </p>
        ) : (
          <form className="contact-form contact-form-wide modal-form" onSubmit={handleSubmit}>
            <label className="field-label">Program of interest*</label>
            <select name="program" value={form.program} onChange={update} required>
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
            <select name="salutation" value={form.salutation} onChange={update} required>
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
                <select name="residence" value={form.residence} onChange={update} required>
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
                onChange={update}
              />
              <span>
                Please keep me updated and send me information and news about
                Dream Country Visas, event invitations, and publications via
                e-mail.
              </span>
            </label>

            <button type="submit" className="btn btn-primary full">
              Submit
            </button>
          </form>
        )}
            </div>
    </div>,
    document.body
  );
}