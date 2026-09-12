import rateLimit from 'express-rate-limit';

// Blocks brute-force password guessing — only a handful of *failed*
// attempts allowed per IP in a 15-minute window. A successful login
// doesn't count against the limit.
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { ok: false, error: 'Too many login attempts. Please try again in 15 minutes.' },
});

// Blocks spam/flood submissions of the contact & consultation forms —
// a real visitor won't submit more than a few times in 15 minutes.
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many submissions. Please try again in a little while.' },
});
