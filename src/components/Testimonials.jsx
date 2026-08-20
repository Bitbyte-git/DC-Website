import { useRef } from 'react';
import { TESTIMONIALS } from '../data.js';
import { Icon } from './Icons.jsx';

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={13} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="section" id="reviews">
      <div className="container">
        <p className="section-tag">REVIEWS</p>
        <h2 className="center">Trusted by Thousands of Happy Families</h2>

        <div className="carousel">
          <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Previous">
            <Icon name="chevron-left" size={18} />
          </button>

          <div className="testi-track" ref={trackRef}>
            {TESTIMONIALS.map((t) => (
              <div className="testi-card" key={t.name}>
                <Stars />
                <p className="testi-text">“{t.text}”</p>
                <div className="testi-person">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn" onClick={() => scroll(1)} aria-label="Next">
            <Icon name="chevron-right" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
