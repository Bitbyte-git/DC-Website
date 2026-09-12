// Dream Country Visas — API Server (contact form, auth, admin dashboard)
// Runs on port 3001; Vite dev server proxies /api/* here.
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config(); // load .env from project root (process cwd)

// Imported after config() so DB_* env vars are already loaded when db.js runs.
await import('./db.js');

const { default: contactRoutes } = await import('./routes/contact.js');
const { default: authRoutes } = await import('./routes/auth.js');
const { default: adminRoutes } = await import('./routes/admin.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 Dream Country Visas API running → http://localhost:${PORT}`)
);
