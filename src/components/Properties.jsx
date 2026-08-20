import { PROPERTIES } from '../data.js';
import { Icon } from './Icons.jsx';

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
          <a href="#contact" className="link-more">
            View All Properties <Icon name="arrow" size={14} />
          </a>
        </div>

        <div className="properties-grid">
          {PROPERTIES.map((p) => (
            <div className="prop-card" key={p.name}>
              <img src={p.image} alt={p.name} />
              <div className="prop-info">
                <h4>{p.name}</h4>
                <p>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
