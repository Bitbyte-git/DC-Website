import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons.jsx';
import { OTHERSERVICES_MENU } from '../data.js';
import FAQ from '../components/FAQ.jsx';

export default function OtherServiceOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = OTHERSERVICES_MENU.groups.flatMap((g) => g.items);

  return (
    <div className="cz-page">
      <div className="cz-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span>
            <em>Other Services</em>
          </nav>
          <p className="cz-hero-tag">OTHER SERVICES</p>
          <h1>Explore Every Service</h1>
          <p className="cz-hero-desc">
            End-to-end support for documentation, compliance and every visa
            category beyond citizenship and residency.
          </p>
        </div>
      </div>

      <div className="container cz-grid">
        {services.map((s) => (
          <Link to={s.link} className="cz-card" key={s.name}>
            <div className="cz-card-img">
  <img src={s.image} alt={s.name} loading="lazy" decoding="async" />
</div>
            <div className="cz-card-body">
              <p className="cz-card-tagline">Visa Service</p>
              <h3>{s.name}</h3>
              <span className="link-more small">
                View Service <Icon name="arrow" size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <FAQ />
    </div>
  );
}