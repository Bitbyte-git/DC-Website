// Form validation and submission helpers for Dream Country Visas

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Known disposable and placeholder email domains to reject
const FAKE_EMAIL_DOMAINS = new Set([
  'example.com',
  'test.com',
  'test.org',
  'sample.com',
  'fake.com',
  'dummy.com',
  'mailinator.com',
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'throwawaymail.com',
  'yopmail.com',
  'trashmail.com',
  'sharklasers.com',
  'getairmail.com',
  'dispostable.com',
]);

/**
 * Checks for obvious dummy, repetitive, or sequential phone patterns
 */
function isDummyPhoneNumber(digits) {
  // All same digit e.g. 0000000000, 1111111111, 8888888888, 9999999999
  if (/^(\d)\1+$/.test(digits)) return true;

  // 5 or more repeated consecutive identical digits e.g. 88888
  if (/(\d)\1{4,}/.test(digits)) return true;

  // Repetitive 2-digit patterns e.g. 1212121212, 9898989898
  if (/^(\d{2})\1{3,}$/.test(digits)) return true;

  // Common sequential dummy numbers
  const sequentialPatterns = [
    '1234567890',
    '0123456789',
    '9876543210',
    '0987654321',
    '12345678',
    '87654321',
    '123456789',
    '987654321',
  ];
  if (sequentialPatterns.includes(digits)) return true;

  return false;
}

/**
 * Validates a telephone number with country-specific rules:
 * - India (+91): Strictly 10 digits starting with 6, 7, 8, or 9
 * - US/Canada (+1): Strictly 10 digits starting with 2-9
 * - UAE (+971): 9 digits (mobile 5x xxx xxxx)
 * - UK (+44): 10 or 11 digits
 * - Australia (+61): 9 digits
 * - General: 8 to 12 digits, no dummy repeat patterns
 */
export function isValidPhone(phone, phoneCode = '+91') {
  if (!phone) return false;
  const digits = String(phone).replace(/\D/g, '');

  if (isDummyPhoneNumber(digits)) return false;

  const code = String(phoneCode).trim();

  if (code === '+91') {
    // India mobile: exactly 10 digits starting with 6, 7, 8, or 9
    return /^[6-9]\d{9}$/.test(digits);
  }

  if (code === '+1') {
    // US / Canada: exactly 10 digits, area code and exchange starts with 2-9
    return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits);
  }

  if (code === '+971') {
    // UAE: 9 digits
    return /^[2-9]\d{8}$/.test(digits);
  }

  if (code === '+44') {
    // UK: 10 or 11 digits
    return /^[1-9]\d{9,10}$/.test(digits);
  }

  if (code === '+61') {
    // Australia: 9 digits
    return /^[2-9]\d{8}$/.test(digits);
  }

  // General international fallback
  return digits.length >= 8 && digits.length <= 13;
}

/**
 * Validates an email address and rejects disposable/fake domains.
 */
export function isValidEmail(email) {
  if (!email) return false;
  const trimmed = String(email).trim().toLowerCase();
  if (!EMAIL_REGEX.test(trimmed)) return false;

  const domain = trimmed.split('@')[1];
  if (FAKE_EMAIL_DOMAINS.has(domain)) return false;

  return true;
}

/**
 * Sanitizes phone input in real time to only allow digits, spaces, and dashes.
 */
export function sanitizePhoneInput(val) {
  return val.replace(/[^\d\s-]/g, '');
}

/**
 * Validates the entire consultation / contact form.
 * Returns { isValid: boolean, errors: Record<string, string> }
 */
export function validateForm(form, needsEnglishLevel = false) {
  const errors = {};

  if (!form.program || !form.program.trim()) {
    errors.program = 'Please select a program of interest.';
  }

  if (needsEnglishLevel && (!form.englishLevel || !form.englishLevel.trim())) {
    errors.englishLevel = 'Please select your English proficiency level.';
  }

  if (!form.salutation || !form.salutation.trim()) {
    errors.salutation = 'Please select a salutation.';
  }

  if (!form.firstName || !form.firstName.trim()) {
    errors.firstName = 'Please enter your first name.';
  }

  if (!form.lastName || !form.lastName.trim()) {
    errors.lastName = 'Please enter your last name.';
  }

  if (!form.phone || !form.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!isValidPhone(form.phone, form.phoneCode)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!form.email || !form.email.trim()) {
    errors.email = 'Please enter your e-mail address.';
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.nationality || !form.nationality.trim()) {
    errors.nationality = 'Please select your nationality.';
  }

  if (!form.residence || !form.residence.trim()) {
    errors.residence = 'Please select your country of residence.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits form data to the backend API endpoint (/api/contact).
 * Returns { success: boolean, error?: string }
 */
export async function submitContactForm(formData) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const json = await res.json().catch(() => ({ ok: true }));
      return { success: true, data: json };
    } else {
      const errJson = await res.json().catch(() => ({}));
      console.warn('API submission failed:', errJson);
      return { success: false, error: errJson.error || `Server responded with ${res.status}` };
    }
  } catch (err) {
    console.warn('Network / API error:', err);
    return { success: false, error: err.message || 'Network error' };
  }
}
