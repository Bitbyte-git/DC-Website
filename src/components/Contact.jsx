import { useState } from 'react';
import { CONTACT, CONTACT_FEATURES } from '../data.js';
import { Icon } from './Icons.jsx';

const INITIAL = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend / email service here
    console.log('Form submitted:', form);
    setSent(true);
    setForm(INITIAL);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-box">
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
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary full">
            {sent ? 'Message Sent ✓' : 'Send Message'} <Icon name="arrow" size={15} />
          </button>
        </form>

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
      </div>
    </section>
  );
}
