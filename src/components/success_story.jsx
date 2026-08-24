import { STATS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function SuccessStory() {
  return (
    <section className="section" id="about">
      <div className="container about-box">
                        <div className="about-intro">
          <p className="section-tag maroon-tag">SUCCESS STORY</p>
          <h2 className="center">
            Turning Visa Dreams
            <br />
            Into Reality
          </h2>
          <p className="about-text center">
            From citizenship and residency to real estate and global
            mobility — we've guided thousands of families to a new life
            abroad with honesty, expertise and care.
          </p>
          <a href="#contact" className="link-more center">
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