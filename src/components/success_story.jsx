import { STATS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function SuccessStory() {
  return (
    <section className="section" id="about">
      <div className="container about-box">
        <div className="about-intro">
          <p className="section-tag left">ABOUT DREAM COUNTRY VISAS</p>
          <h2>
            Your Trusted Partner
            <br />
            in Global Mobility
          </h2>
          <p className="about-text">
            We provide end-to-end global mobility solutions to help you live,
            work, invest and expand your future anywhere in the world.
          </p>
          <a href="#contact" className="link-more">
            Learn More About Us <Icon name="arrow" size={14} />
          </a>
        </div>

        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-icon">
                <Icon name={s.icon} size={26} />
              </span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="about-globe">
          <img src="/landing-img/Glob.png" alt="Global network" />
        </div>
      </div>
    </section>
  );
}