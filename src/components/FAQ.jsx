import { useState } from 'react';
import { FAQ_ITEMS } from '../data.js';

// Builds the Google-recommended FAQPage schema from whatever
// questions this instance of FAQ is currently showing.
function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export default function FAQ({ items = FAQ_ITEMS }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      {/* SEO — lets Google show these Q&As as rich snippets in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(items)) }}
      />

      <div className="container faq-box">
        <p className="section-tag">GOT QUESTIONS?</p>
        <h2 className="center">Frequently Asked Questions</h2>

        <div className="faq-list">
          {items.map((item, idx) => {
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