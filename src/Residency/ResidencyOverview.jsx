import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { RESIDENCY_MENU, RESIDENCY_OVERVIEW_FAQ } from '../data.js';
import FAQ from '../components/FAQ.jsx';

export default function ResidencyOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = RESIDENCY_MENU.groups.flatMap((g) => g.items);

  return (
    <div className="cz-page">
      <div className="cz-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <em>Residency</em>
          </nav>
          <p className="cz-hero-tag">RESIDENCY BY INVESTMENT</p>
          <h1>Explore Every Residency Program</h1>
          <p className="cz-hero-desc">
            World-class residency-by-investment programs across top global
            destinations for you and your family.
          </p>
        </div>
      </div>

      <div className="container cz-grid">
        {countries.map((c) => (
          <Link to={c.link} className="cz-card" key={c.name}>
            <div className="cz-card-img">
  <img src={c.image} alt={c.name} loading="lazy" decoding="async" />
</div>
            <div className="cz-card-body">
              <p className="cz-card-tagline">{c.sub}</p>
              <h3>{c.name}</h3>
              <span className="link-more small">
                View Program <Icon name="arrow" size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>

       <FAQ items={RESIDENCY_OVERVIEW_FAQ} />
    </div>
  );
}