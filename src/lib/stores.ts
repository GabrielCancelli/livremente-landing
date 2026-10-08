export const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";
// Android em produção na Play desde 2026-09-28.
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.livremente.app";

/** Visitor is on an Android device (used to send single-store CTAs to the Play). */
export function isAndroidDevice(): boolean {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
