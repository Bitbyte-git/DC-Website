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

const ENGLISH_LEVELS = ['Competitive', 'Proficient', 'Superior'];

// Programs that require the extra "English Level" question.
const PR_PROGRAMS_NEEDING_ENGLISH = ['Australia PR', 'Canada PR'];

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

// ---------------------------------------------------------------
// Single consultation modal — the "Book Free Consultation" popup.
// Shows an extra "English Level" question only when the selected
// program is Australia PR or Canada PR.
// ---------------------------------------------------------------
export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY_MAIN_FORM);
  const [sent, setSent] = useState(false);

  if (!open) return null;

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
    setForm(EMPTY_MAIN_FORM);
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
          <h3>Book Your Free Consultation</h3>
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

                        {needsEnglishLevel && (
              <>
                <label className="field-label">What is your English level?*</label>
                <select name="englishLevel" value={form.englishLevel} onChange={update} required>
                  <option value="" disabled>
                    Please select
                  </option>
                  {ENGLISH_LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </>
            )}

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