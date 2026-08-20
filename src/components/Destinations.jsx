import { DESTINATIONS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Destinations() {
  const destinationCards = DESTINATIONS.map((d) => (
    <div className="dest-card" key={d.name}>
      <div className="dest-img">
        <img src={d.image} alt={d.name} />
      </div>
      <h3>{d.name}</h3>
      <p>{d.price}</p>
    </div>
  ));

  return (
    <section className="section" id="destinations">
      <div className="container destinations-box">
        <p className="section-tag">RESIDENCY BY INVESTMENT</p>
        <div className="section-head">
          <h2>Explore Top Destinations</h2>
          <a href="#contact" className="link-more">
            View All Programs <Icon name="arrow" size={14} />
          </a>
        </div>

        <div className="carousel">
          <div className="dest-track" aria-label="Residency investment destinations">
            <div className="dest-marquee">{destinationCards}</div>
            <div className="dest-marquee" aria-hidden="true">
              {DESTINATIONS.map((d) => (
                <div className="dest-card" key={`${d.name}-duplicate`}>
                  <div className="dest-img">
                    <img src={d.image} alt="" />
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
