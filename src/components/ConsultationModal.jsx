import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  CONTACT,
  CITIZENSHIP_MENU,
  RESIDENCY_MENU,
  REALESTATE_MENU,
  PR_MENU,
  OTHERSERVICES_MENU,
} from '../data.js';

// Pulls a flat country/item name list out of any mega-menu's groups
function getItemNames(menu) {
  if (!menu) return [];
  return menu.groups.flatMap((g) => g.items.map((item) => item.name));
}

const SERVICES = [
  { label: 'Citizenship by Investment', menu: CITIZENSHIP_MENU },
  { label: 'Residency by Investment', menu: RESIDENCY_MENU },
  { label: 'Real Estate Investment', menu: REALESTATE_MENU },
  { label: 'Permanent Residency (PR)', menu: PR_MENU },
  { label: 'Other Service', menu: OTHERSERVICES_MENU },
];

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  country: '',
  message: '',
};

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);

  const countryOptions = useMemo(() => {
    const selected = SERVICES.find((s) => s.label === form.service);
    return getItemNames(selected?.menu);
  }, [form.service]);

  if (!open) return null;

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [field]: value,
      // reset the country whenever the service changes, since the
      // country list depends on which service was picked
      ...(field === 'service' ? { country: '' } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      'New Consultation Request',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Address: ${form.address}`,
      `Service: ${form.service}`,
      `Country: ${form.country}`,
      `Message: ${form.message}`,
    ];
    const text = encodeURIComponent(lines.join('\n'));

    window.open(`${CONTACT.whatsapp}?text=${text}`, '_blank', 'noreferrer');

    setForm(EMPTY_FORM);
    onClose();
  };

   return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3>Book Your Free Consultation</h3>
        <p className="modal-sub">
          Tell us a bit about what you're looking for and our experts will
          reach out to you.
        </p>

        <form className="contact-form modal-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-col">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={update('name')}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={update('phone')}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={update('email')}
              />
              <input
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={update('address')}
              />
            </div>

            <div className="form-col">
              <select required value={form.service} onChange={update('service')}>
                <option value="" disabled>
                  Select Service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.label} value={s.label}>
                    {s.label}
                  </option>
                ))}
              </select>

              <select
                required
                value={form.country}
                onChange={update('country')}
                disabled={!form.service}
              >
                <option value="" disabled>
                  {form.service ? 'Select Country' : 'Select a service first'}
                </option>
                {countryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={update('message')}
              />
            </div>
          </div>

                    <button type="submit" className="btn btn-primary full">
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}