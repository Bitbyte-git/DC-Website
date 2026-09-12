import { Link } from 'react-router-dom';
import { Icon } from './Icons.jsx';

// A separate, stripped-down navbar used only on /login and /admin —
// no mega menus, no topbar, no consultation CTA. Just brand + a way back.
export default function AdminNavbar() {
  return (
    <header className="admin-navbar">
      <div className="admin-navbar-inner">
        <Link to="/admin" className="admin-navbar-brand">
          <img src="/landing-img/DC-log.webp" alt="Dream Country Visas" />
          <span>Admin Panel</span>
        </Link>

        <Link to="/" className="admin-navbar-back">
          <Icon name="chevron-left" size={14} /> Back to Website
        </Link>
      </div>
    </header>
  );
}
