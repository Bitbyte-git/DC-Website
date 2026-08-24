import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { COUNTRIES } from './CitizenshipPage.jsx';

export default function CitizenshipOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cz-page">
      <div className="cz-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <em>Citizenship</em>
          </nav>
          <p className="cz-hero-tag">CITIZENSHIP BY INVESTMENT</p>
          <h1>Explore Every Citizenship Program</h1>
          <p className="cz-hero-desc">
            Compare investment options, timelines and benefits across our
            full range of citizenship-by-investment programs.
          </p>
        </div>
      </div>

      <div className="container cz-grid">
        {Object.entries(COUNTRIES).map(([slug, c]) => (
          <Link to={`/citizenship/${slug}`} className="cz-card" key={slug}>
            <div className="cz-card-img">
              <img src={c.banner} alt={c.name} />
            </div>
            <div className="cz-card-body">
              <p className="cz-card-tagline">{c.tagline}</p>
              <h3>{c.name}</h3>
              <div className="cz-card-meta">
                <span>{c.price}</span>
                <span>
                  <Icon name="clock" size={13} /> {c.time}
                </span>
              </div>
              <span className="link-more small">
                View Program <Icon name="arrow" size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}