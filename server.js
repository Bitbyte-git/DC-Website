// Dream Country Visas — SendGrid Email API Server
// Runs on port 3001; Vite dev server proxies /api/* here.
import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
import dns from 'dns';

const dnsPromises = dns.promises;

config(); // load .env

const app = express();
app.use(express.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const rawTo = process.env.SENDGRID_TO_EMAIL || 'infisq.senthil@gmail.com';
const TO_EMAILS = rawTo.split(',').map((e) => e.trim()).filter(Boolean);
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'infisq.senthil@gmail.com';

/**
 * Validates whether the email's domain actually has active mail exchange (MX) servers.
 */
async function checkEmailDomainMX(email) {
  try {
    const domain = (email || '').split('@')[1];
    if (!domain) return false;
    const records = await dnsPromises.resolveMx(domain);
    return records && records.length > 0;
  } catch (err) {
    // If ENOTFOUND or ENODATA, domain has no mail servers
    console.warn(`DNS MX lookup failed for domain "${email?.split('@')?.[1]}":`, err.code || err.message);
    return false;
  }
}

// ── POST /api/contact ─────────────────────────────────────────────────────────
// Receives form data from the Contact / Consultation forms and emails it.
app.post('/api/contact', async (req, res) => {
  try {
    const d = req.body;

    if (!d.email || !d.phone) {
      return res.status(400).json({ ok: false, error: 'Email and phone number are required.' });
    }

    // Verify email domain has real active MX records
    const hasMx = await checkEmailDomainMX(d.email);
    if (!hasMx) {
      console.warn(`⚠️ Blocked fake/inactive email domain: ${d.email}`);
      return res.status(400).json({
        ok: false,
        error: 'Please enter a valid, active email address with working mail servers.',
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0A1032;padding:24px;border-radius:12px 12px 0 0">
          <h2 style="color:#C8A84B;margin:0">New Consultation Request</h2>
          <p style="color:rgba(255,255,255,.7);margin:4px 0 0">Dream Country Visas</p>
        </div>
        <div style="background:#f9f9f9;padding:24px;border-radius:0 0 12px 12px;border:1px solid #eee">

          <table style="width:100%;border-collapse:collapse">
            <tr><td colspan="2" style="padding:8px 0;font-size:14px;color:#555;border-bottom:1px solid #ddd"><strong style="color:#0A1032">Program of Interest</strong></td></tr>
            <tr><td colspan="2" style="padding:8px 0 16px;font-size:15px">${d.program || '—'}</td></tr>

            ${d.englishLevel ? `
            <tr><td colspan="2" style="padding:8px 0;font-size:14px;color:#555;border-bottom:1px solid #ddd"><strong style="color:#0A1032">English Level</strong></td></tr>
            <tr><td colspan="2" style="padding:8px 0 16px;font-size:15px">${d.englishLevel}</td></tr>
            ` : ''}

            <tr>
              <td style="padding:8px 12px 8px 0;width:50%;font-size:14px">
                <div style="color:#555;margin-bottom:4px"><strong>Name</strong></div>
                <div style="font-size:15px">${d.salutation || ''} ${d.firstName || ''} ${d.lastName || ''}</div>
              </td>
              <td style="padding:8px 0;width:50%;font-size:14px">
                <div style="color:#555;margin-bottom:4px"><strong>Phone</strong></div>
                <div style="font-size:15px">${d.phoneCode || ''} ${d.phone || '—'}</div>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 12px 8px 0;width:50%;font-size:14px">
                <div style="color:#555;margin-bottom:4px"><strong>Email</strong></div>
                <div style="font-size:15px"><a href="mailto:${d.email}" style="color:#0A1032">${d.email || '—'}</a></div>
              </td>
              <td style="padding:16px 0 8px;width:50%;font-size:14px">
                <div style="color:#555;margin-bottom:4px"><strong>Nationality</strong></div>
                <div style="font-size:15px">${d.nationality || '—'}</div>
              </td>
            </tr>

            <tr>
              <td colspan="2" style="padding:16px 0 8px;font-size:14px">
                <div style="color:#555;margin-bottom:4px"><strong>Currently Residing In</strong></div>
                <div style="font-size:15px">${d.residence || '—'}</div>
              </td>
            </tr>

            <tr>
              <td colspan="2" style="padding:16px 0 0;font-size:13px;color:#888">
                Marketing consent: <strong>${d.updates ? 'Yes — keep me updated' : 'No'}</strong>
              </td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:14px;background:#fff8e1;border-radius:8px;border-left:4px solid #C8A84B">
            <p style="margin:0;font-size:13px;color:#555">
              This enquiry was submitted via the Dream Country Visas website contact form.
              Please respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    `;

    const msg = {
      to:      TO_EMAILS.length === 1 ? TO_EMAILS[0] : TO_EMAILS,
      from:    FROM_EMAIL,
      replyTo: d.email,
      subject: `New Enquiry – ${d.salutation || ''} ${d.firstName || ''} ${d.lastName || ''} | ${d.program || 'General'}`,
      html,
    };

    await sgMail.send(msg);
    console.log(`✅ Email sent for ${d.firstName} ${d.lastName} <${d.email}>`);
    res.json({ ok: true });

  } catch (err) {
    const detail = err?.response?.body?.errors?.[0]?.message || err.message;
    console.error('❌ SendGrid error:', detail);
    res.status(500).json({ ok: false, error: detail });
  }
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 Dream Country Visas API running → http://localhost:${PORT}`)
);
