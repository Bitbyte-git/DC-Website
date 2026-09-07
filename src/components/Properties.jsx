import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data.js';
import { Icon } from './Icons.jsx';

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const PROPERTY_BADGES = {
  Dubai: 'HIGH YIELD 8-10%',
  Greece: 'GOLDEN VISA',
  Latvia: 'EU RESIDENCY',
};

export default function Properties() {
  return (
    <section className="section" id="properties">
      <div className="container properties-box">
        <div className="properties-intro">
          <p className="section-tag left">REAL ESTATE INVESTMENT</p>
          <h2>
            Invest in World-Class
            <br />
            Properties
          </h2>
          <p className="properties-intro-desc">
            Prime residential and commercial assets qualifying for Golden Visa &amp; global residency pathways.
          </p>
          <Link to="/realestate" className="link-more">
            View All Properties <Icon name="arrow" size={14} />
          </Link>
        </div>

        <div className="properties-grid">
          {PROPERTIES.map((p) => (
            <Link
              to={`/realestate/${slugify(p.name)}`}
              className="prop-card"
              key={p.name}
            >
              <span className="prop-badge">{PROPERTY_BADGES[p.name] || 'INVESTMENT'}</span>
              <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
              <div className="prop-info">
                <h4>{p.name}</h4>
                <p className="prop-price-pill">{p.price}</p>
              </div>
              <span className="prop-hover-cta">
                Explore <Icon name="arrow" size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}