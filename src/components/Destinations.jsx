import { useRef } from 'react';
import { DESTINATIONS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Destinations() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="section" id="destinations">
      <div className="container destinations-box">
        <p className="section-tag">RESIDENCY BY INVESTMENT</p>
        <div className="section-head">
          <h2>Explore Top Destinations</h2>
          <a href="#contact" className="link-more">
            View All Programs <Icon name="arrow" size={14} />
          </a>
        </div>

        <div className="carousel">
          <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Previous">
            <Icon name="chevron-left" size={18} />
          </button>

          <div className="dest-track" ref={trackRef}>
            {DESTINATIONS.map((d) => (
              <div className="dest-card" key={d.name}>
                <div className="dest-img">
                  <img src={d.image} alt={d.name} />
                </div>
                <h3>{d.name}</h3>
                <p>{d.price}</p>
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
