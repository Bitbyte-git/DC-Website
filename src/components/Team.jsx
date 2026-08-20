import { TEAM } from '../data.js';

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
                <img className="team-photo" src={m.image} alt={m.name} />
              </div>
              <h4>{m.name}</h4>
              <p className="team-role">{m.role}</p>
              <p className="team-description">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
