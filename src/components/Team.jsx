import { TEAM } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <p className="section-tag">OUR LEADERSHIP</p>
        <h2 className="center">Experts Who Guide, Support &amp; Deliver</h2>
        <p className="team-section-sub">
          Direct guidance from seasoned industry veterans with decades of verified global immigration expertise.
        </p>

        <div className="team-track">
          {TEAM.map((m) => (
            <article className="team-card" key={m.name}>
              <div className="team-photo-wrap">
                <img
                  className="team-photo"
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                />
                <div className="team-photo-badge">
                  <Icon name="certificate" size={13} />
                  <span>{m.experience}</span>
                </div>
              </div>

              <div className="team-card-content">
                <h3 className="team-card-name">{m.name}</h3>

                <div className="team-role-row">
                  <span className="team-role">{m.role}</span>
                  <a
                    href="#"
                    className="team-linkedin"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <Icon name="linkedin" size={14} />
                  </a>
                </div>

                <div className="team-tags-row">
                  {m.tags &&
                    m.tags.map((tag) => (
                      <span className="team-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="team-divider" />

                <p
                  className="team-description"
                  dangerouslySetInnerHTML={{ __html: m.description }}
                />

                <div className="team-card-footer">
                  <span className="team-seal">
                    <Icon name="lock" size={14} /> Authorized Officer
                  </span>
                  <span className="team-guarantee">
                    <Icon name="star" size={13} /> 100% Ethical Advisory
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}