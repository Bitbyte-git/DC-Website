import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data.js';
import { Icon } from './Icons.jsx';

// Turns "New Zealand" into "new-zealand" to match the /residency/:slug routes
function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function DestCard({ d }) {
  return (
    <Link to={`/residency/${slugify(d.name)}`} className="dest-card">
      <div className="dest-img">
        <img src={d.image} alt={d.name} />
      </div>
      <h3>{d.name}</h3>
      <p>{d.price}</p>
    </Link>
  );
}

export default function Destinations() {
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
          <div className="dest-track" aria-label="Residency investment destinations">
            <div className="dest-marquee">
              {DESTINATIONS.map((d) => (
                <DestCard d={d} key={d.name} />
              ))}
            </div>
            <div className="dest-marquee" aria-hidden="true">
              {DESTINATIONS.map((d) => (
                <DestCard d={d} key={`${d.name}-duplicate`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}