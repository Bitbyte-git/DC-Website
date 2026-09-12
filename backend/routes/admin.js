import { Router } from 'express';
import { pool } from '../db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function endOfDay(d) {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
}

// Resolves a { from, to } Date range for the requested filter.
function resolveRange(range, fromParam, toParam) {
  const now = new Date();

  if (range === 'today') {
    return { from: startOfDay(now), to: endOfDay(now) };
  }
  if (range === 'week') {
    // Current calendar week, Monday -> Sunday
    const day = now.getDay(); // 0 = Sunday
    const diffToMonday = (day === 0 ? 6 : day - 1);
    const monday = startOfDay(now);
    monday.setDate(monday.getDate() - diffToMonday);
    return { from: monday, to: endOfDay(now) };
  }
  if (range === 'month') {
    const first = new Date(now.getFullYear(), now.getMonth(), 1);
    return { from: startOfDay(first), to: endOfDay(now) };
  }
  if (range === 'year') {
    const first = new Date(now.getFullYear(), 0, 1);
    return { from: startOfDay(first), to: endOfDay(now) };
  }
  if (range === 'custom' && fromParam && toParam) {
    return { from: startOfDay(new Date(fromParam)), to: endOfDay(new Date(toParam)) };
  }
  // Fallback: all time
  return { from: new Date('2000-01-01'), to: endOfDay(now) };
}

// GET /api/admin/submissions?range=today|week|month|year|custom&from=YYYY-MM-DD&to=YYYY-MM-DD
router.get('/submissions', requireAdmin, async (req, res) => {
  try {
    const { range = 'today', from, to } = req.query;
    const { from: fromDate, to: toDate } = resolveRange(range, from, to);

    // Order by id as a tie-breaker — two submissions in the same second would
    // otherwise have no guaranteed order, and the newest could show up below
    // an older one.
    const [rows] = await pool.query(
      `SELECT * FROM submissions WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC, id DESC`,
      [fromDate, toDate]
    );

    res.json({ ok: true, count: rows.length, range, from: fromDate, to: toDate, submissions: rows });
  } catch (err) {
    console.error('Failed to fetch submissions:', err.message);
    res.status(500).json({ ok: false, error: 'Failed to fetch submissions.' });
  }
});

export default router;
