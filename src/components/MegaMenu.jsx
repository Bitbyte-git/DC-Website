import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';

export default function MegaMenu({ data }) {
  const { groups, offer, allLabel } = data;

  return (
    <div className="mega-menu">
      <div className={`mega-inner ${offer ? '' : 'no-offer'}`}>
        <div className="mega-left">
                    <a href="#services" className="mega-all">
            {allLabel || 'All Programs'} <Icon name="arrow" size={15} />
          </a>

          <div className="mega-groups">
            {groups.map((g) => (
              <div className="mega-group" key={g.title}>
                <p className="mega-group-title">{g.title}</p>
                                {g.items.map((c) => {
                  // If the item has a `link`, it navigates to its own page
                  const Tag = c.link ? Link : 'a';
                  const props = c.link ? { to: c.link } : { href: '/#contact' };
                  return (
                  <Tag {...props} className="mega-item" key={c.name}>
                    <img src={c.image} alt={c.name} />
                                        <div className="mega-item-info">
                      <strong>{c.name}</strong>
                      {c.sub && <span className="mega-sub">{c.sub}</span>}
                      {c.price && <span className="mega-price">{c.price}</span>}
                      {c.time && (
                        <span className="mega-time">
                          <Icon name="clock" size={12} /> {c.time}
                        </span>
                                            )}
                    </div>
                  </Tag>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

                {offer && (
          <div
            className="mega-offer"
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <p className="mega-offer-tag">{offer.tag}</p>
            <h4>{offer.title}</h4>
            <p className="mega-offer-sub">{offer.subtitle}</p>
            <a href="#contact" className="btn btn-primary">
              {offer.button}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}