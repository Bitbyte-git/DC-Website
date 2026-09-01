import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { REALESTATE_MENU, REALESTATE_OVERVIEW_FAQ } from '../data.js';
import FAQ from '../components/FAQ.jsx';

export default function RealEstateOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const properties = REALESTATE_MENU.groups.flatMap((g) => g.items);

  return (
    <div className="cz-page">
      <div className="cz-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <em>Real Estate</em>
          </nav>
          <p className="cz-hero-tag">REAL ESTATE INVESTMENT</p>
          <h1>Explore Every Property Destination</h1>
          <p className="cz-hero-desc">
            Premium property investments across top global locations with
            strong rental yields and residency benefits.
          </p>
        </div>
      </div>

      <div className="container cz-grid">
        {properties.map((p) => (
          <Link to={p.link} className="cz-card" key={p.name}>
            <div className="cz-card-img">
  <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
</div>
            <div className="cz-card-body">
              <p className="cz-card-tagline">Real Estate</p>
              <h3>{p.name}</h3>
              <div className="cz-card-meta">
                <span>{p.price}</span>
                <span>
                  <Icon name="clock" size={13} /> {p.time}
                </span>
              </div>
              <span className="link-more small">
                View Property <Icon name="arrow" size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <FAQ items={REALESTATE_OVERVIEW_FAQ} />
    </div>
  );
}