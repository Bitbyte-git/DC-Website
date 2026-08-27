import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { PR_MENU } from '../data.js';
import FAQ from '../components/FAQ.jsx';

export default function PROverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = PR_MENU.groups.flatMap((g) => g.items);

  return (
    <div className="cz-page">
      <div className="cz-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <em>Permanent Residency</em>
          </nav>
          <p className="cz-hero-tag">PERMANENT RESIDENCY (PR)</p>
          <h1>Explore Every PR Program</h1>
          <p className="cz-hero-desc">
            Skilled migration and permanent residency pathways designed for
            long-term settlement abroad.
          </p>
        </div>
      </div>

      <div className="container cz-grid">
        {countries.map((c) => (
          <Link to={c.link} className="cz-card" key={c.name}>
            <div className="cz-card-img">
              <img src={c.image} alt={c.name} />
            </div>
            <div className="cz-card-body">
              <p className="cz-card-tagline">Permanent Residency</p>
              <h3>{c.name}</h3>
              <span className="link-more small">
                View Program <Icon name="arrow" size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
       <FAQ />
    </div>
  );
}