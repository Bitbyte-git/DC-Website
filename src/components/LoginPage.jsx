import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icons.jsx';
import { setAdminToken } from '../utils/adminAuth.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Always shows the sign-in form — a direct visit (or reload) never
  // auto-skips to the dashboard, even right after logging in elsewhere
  // in this tab. Only a successful submit below moves to /admin.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setAdminToken(json.token);
        navigate('/admin', { replace: true });
      } else {
        setError(json.error || 'Invalid email or password.');
      }
    } catch {
      setError('Network error — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-badge">
          <Icon name="lock" size={20} />
        </div>
        <h1>Admin Login</h1>
        <p className="login-sub">Sign in to view contact form submissions.</p>

        <label className="field-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="username"
          required
        />

        <label className="field-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="btn btn-primary login-submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
