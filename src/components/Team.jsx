import { TEAM } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <p className="section-tag">OUR LEADERSHIP</p>
        <h2 className="center">Experts Who Guide, Support &amp; Deliver</h2>

        <div className="team-track">
          {TEAM.map((m) => (
            <article className="team-card" key={m.name}>
              <div className="team-photo-wrap">
               <img className="team-photo" src={m.image} alt={m.name} loading="lazy" decoding="async" />
              </div>
                              <h4>{m.name}</h4>
              <div className="team-role-row">
                <p className="team-role">{m.role}</p>
                
                 <a href="#"
                  className="team-linkedin"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <Icon name="linkedin" size={14} />
                </a>
              </div>
              <p className="team-description" dangerouslySetInnerHTML={{ __html: m.description }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}