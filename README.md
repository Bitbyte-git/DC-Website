# Dream Country Visas — Landing Page (React + Vite)

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (dist/)
```

## Images — put ALL of these inside `public/images/`
hi
| File name | Used for | Suggested size |
|---|---|---|
| logo.png | Navbar + footer + favicon (DC logo) | ~200x200, transparent PNG |
| hero-london.png | Hero left side (Big Ben + London Eye) | ~800px wide, transparent PNG |
| hero-dubai.png | Hero right side (Burj Khalifa + Burj Al Arab) | ~800px wide, transparent PNG |
| world-map.png | Hero background (dotted world map) | ~1600px wide, transparent PNG |
| dest-germany.jpg | Destination card — Germany (Brandenburg Gate) | 400x260 |
| dest-canada.jpg | Destination card — Canada (Toronto skyline) | 400x260 |
| dest-uae.jpg | Destination card — UAE (Burj Khalifa) | 400x260 |
| dest-usa.jpg | Destination card — USA (Statue of Liberty) | 400x260 |
| dest-australia.jpg | Destination card — Australia (Opera House) | 400x260 |
| flag-germany.png | Round flag badge — Germany | 80x80 |
| flag-canada.png | Round flag badge — Canada | 80x80 |
| flag-uae.png | Round flag badge — UAE | 80x80 |
| flag-usa.png | Round flag badge — USA | 80x80 |
| flag-australia.png | Round flag badge — Australia | 80x80 |
| prop-dubai.jpg | Property card — Dubai | 300x400 (portrait) |
| prop-usa.jpg | Property card — USA | 300x400 |
| prop-greece.jpg | Property card — Greece | 300x400 |
| prop-uk.jpg | Property card — UK | 300x400 |
| prop-spain.jpg | Property card — Spain | 300x400 |
| globe-network.png | About section (dotted globe illustration) | ~500x500, transparent PNG |
| client-rahul.jpg | Testimonial avatar — Rahul Mehta | 100x100 |
| client-priya.jpg | Testimonial avatar — Priya Sharma | 100x100 |
| client-arjun.jpg | Testimonial avatar — Arjun Nair | 100x100 |
| client-neha.jpg | Testimonial avatar — Neha Kapoor | 100x100 |
| team-arjun.jpg | Team photo — Arjun Malhotra | 300x300 |
| team-meera.jpg | Team photo — Meera Nair | 300x300 |
| team-rahul.jpg | Team photo — Rahul Fernandes | 300x300 |
| team-sneha.jpg | Team photo — Sneha Iyer | 300x300 |

Total: **28 images**.

## Where to edit content

All text, prices, phone number, testimonials, team names etc. are in
`src/data.js` — one file, no need to touch components.

## Contact form

`src/components/Contact.jsx` → `handleSubmit()` has a `TODO` — connect it
to your backend (Django REST endpoint / EmailJS / Formspree).
