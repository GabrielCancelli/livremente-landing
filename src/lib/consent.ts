// Cookie consent state (LGPD). Persists the user's choice and gates the Meta Pixel:
// nothing is loaded or tracked until the user explicitly accepts.
const STORAGE_KEY = "lm_cookie_consent";

export type ConsentChoice = "granted" | "denied";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // localStorage unavailable (private mode / disabled) — fail silently
  }
}

// Lets the footer "Preferências de cookies" link reopen the banner so the user
// can review or revoke consent at any time (LGPD right to revoke).
const OPEN_EVENT = "lm-open-cookie-prefs";

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookiePreferences(handler: () => void): () => void {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
