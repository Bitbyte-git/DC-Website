// Dream Country Visas — API Server (contact form, auth, admin dashboard)
// Runs on port 3001; Vite dev server proxies /api/* here.
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';

config(); // load .env from project root (process cwd)

// Imported after config() so DB_* env vars are already loaded when db.js runs.
await import('./db.js');

const { default: contactRoutes } = await import('./routes/contact.js');
const { default: authRoutes } = await import('./routes/auth.js');
const { default: adminRoutes } = await import('./routes/admin.js');

// Only these origins may call the API from a browser. Add production
// domains here (or via CORS_ORIGINS in .env) before going live elsewhere.
const DEFAULT_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'https://dreamcountryvisas.com',
  'https://www.dreamcountryvisas.com',
  'https://dreamcountryvisas.in',
  'https://www.dreamcountryvisas.in',
];
const ALLOWED_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim()).filter(Boolean)
  : DEFAULT_ORIGINS;

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin(origin, callback) {
    // No Origin header (e.g. curl, server-to-server, Vite's own proxy) — allow.
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err && err.message === 'Not allowed by CORS') {
    return res.status(403).json({ ok: false, error: 'Not allowed by CORS.' });
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ ok: false, error: 'Internal server error.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 Dream Country Visas API running → http://localhost:${PORT}`)
);
