import { useState } from 'react';
import { FAQ_ITEMS } from '../data.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container faq-box">
        <p className="section-tag">GOT QUESTIONS?</p>
        <h2 className="center">Frequently Asked Questions</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {item.q}
                  <span className="faq-toggle">
                    <span className="faq-toggle-line horizontal" />
                    <span className="faq-toggle-line vertical" />
                  </span>
                </button>
                <div className="faq-answer-wrap">
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}