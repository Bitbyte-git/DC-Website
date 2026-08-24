import { TESTIMONIALS } from '../data.js';
import { Icon } from './Icons.jsx';

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={13} />
      ))}
    </div>
  );
}

function TestiCard({ t }) {
  return (
    <div className="testi-card">
      <Stars />
      <p className="testi-text">"{t.text}"</p>
      <div className="testi-person">
        <strong>{t.name}</strong>
      </div>
    </div>
  );
}

// export default function Testimonials() {
//   return (
//     <section className="section" id="reviews">
//       <div className="container">
//         <p className="section-tag">TESTIMONIALS</p>
//         <h2 className="center">Trusted by Thousands of Happy Families</h2>

//         <div className="testi-track-wrap">
//           <div className="testi-marquee">
//             {TESTIMONIALS.map((t) => (
//               <TestiCard t={t} key={t.name} />
//             ))}
//             {/* duplicate set right after, so the loop is seamless */}
//             {TESTIMONIALS.map((t) => (
//               <TestiCard t={t} key={`${t.name}-dup`} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <p className="section-tag">TESTIMONIALS</p>
        <h2 className="center">Trusted by Thousands of Happy Families</h2>

        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <TestiCard t={t} key={t.name} />
          ))}
        </div>
      </div>
    </section>
  );
}