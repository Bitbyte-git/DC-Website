import { useRef } from 'react';
import { TEAM } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Team() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });
  };

  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="center">Experts Who Guide, Support &amp; Deliver</h2>

        <div className="carousel">
          <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Previous">
            <Icon name="chevron-left" size={18} />
          </button>

          <div className="team-track" ref={trackRef}>
            {TEAM.map((m) => (
              <div className="team-card" key={m.name}>
                <img className="team-photo" src={m.image} alt={m.name} />
                <h4>{m.name}</h4>
                <p>{m.role}</p>
                <a href="#" className="team-linkedin" aria-label={`${m.name} LinkedIn`}>
                  <Icon name="linkedin" size={14} />
                </a>
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
