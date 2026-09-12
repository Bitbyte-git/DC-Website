// Admin session token — kept in memory only, never persisted to
// localStorage/sessionStorage. A hard reload or typing the /admin URL
// directly always wipes this and forces a fresh login; only navigating
// within the app (after a real login) carries it forward.
let token = null;

export function getAdminToken() {
  return token;
}

export function setAdminToken(value) {
  token = value;
}

export function clearAdminToken() {
  token = null;
}
