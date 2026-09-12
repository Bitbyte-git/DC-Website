import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    'JWT_SECRET is not set in .env — refusing to start with an insecure default secret.'
  );
}

export function signAdminToken(email) {
  return jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '12h' });
}

// Protects admin-only routes. Expects "Authorization: Bearer <token>".
export function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ ok: false, error: 'Missing token.' });
  }

  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ ok: false, error: 'Invalid or expired session.' });
  }
}
