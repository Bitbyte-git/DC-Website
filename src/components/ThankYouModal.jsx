import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './Icons.jsx';
import { CONTACT } from '../data.js';

export default function ThankYouModal({ isOpen, onClose, data = {} }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="thankyou-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="thankyou-card" onClick={(e) => e.stopPropagation()}>
        <button className="thankyou-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="thankyou-icon-wrap">
          <div className="thankyou-icon-pulse" />
          <span className="thankyou-icon">
            <Icon name="check" size={32} />
          </span>
        </div>

        <span className="thankyou-badge">ENQUIRY RECEIVED</span>
        <h2 className="thankyou-title">
          Thank You{data.firstName ? `, ${data.firstName}` : ''}!
        </h2>
        <p className="thankyou-desc">
          Your request for <strong>{data.program || 'Immigration Services'}</strong> has been
          successfully submitted to our senior advisory team.
        </p>

        <div className="thankyou-summary">
          <div className="thankyou-summary-item">
            <span className="thankyou-summary-icon">
              <Icon name="mail" size={16} />
            </span>
            <div>
              <span className="thankyou-summary-label">Confirmation Email</span>
              <strong>{data.email || 'Your registered email'}</strong>
            </div>
          </div>

          {data.phone && (
            <div className="thankyou-summary-item">
              <span className="thankyou-summary-icon">
                <Icon name="phone" size={16} />
              </span>
              <div>
                <span className="thankyou-summary-label">Callback Number</span>
                <strong>{data.phoneCode || ''} {data.phone}</strong>
              </div>
            </div>
          )}

          <div className="thankyou-summary-item">
            <span className="thankyou-summary-icon">
              <Icon name="clock" size={16} />
            </span>
            <div>
              <span className="thankyou-summary-label">Expected Response</span>
              <strong>Within 24 Hours (Mon – Sat, 9am – 8pm)</strong>
            </div>
          </div>
        </div>

        <div className="thankyou-actions">
          <button type="button" className="btn btn-primary thankyou-done-btn" onClick={onClose}>
            Done
          </button>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline thankyou-whatsapp-btn"
          >
            <Icon name="whatsapp" size={16} /> Need Instant Help? WhatsApp Us
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
