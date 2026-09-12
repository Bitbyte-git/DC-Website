import { Router } from 'express';
import { signAdminToken } from '../middleware/auth.js';

const router = Router();

// POST /api/auth/login — single hardcoded admin account, credentials in .env
router.post('/login', (req, res) => {
  const { email, password } = req.body || {};

  const adminEmail = process.env.ADMIN_EMAIL || '';
  const adminPassword = process.env.ADMIN_PASSWORD || '';

  if (
    !email || !password ||
    email.trim().toLowerCase() !== adminEmail.trim().toLowerCase() ||
    password !== adminPassword
  ) {
    return res.status(401).json({ ok: false, error: 'Invalid email or password.' });
  }

  const token = signAdminToken(adminEmail);
  res.json({ ok: true, token });
});

export default router;
