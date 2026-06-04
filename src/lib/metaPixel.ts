// Meta Pixel (Facebook/Instagram) — conversion tracking for ads.
// Pixel IDs are public (exposed in the browser on every request), so it is
// safe to hardcode here.
export const META_PIXEL_ID = "1565720118403682";

// Only fire on the live production domain so local dev and Cloudflare preview
// deploys (*.pages.dev) never pollute the ads data.
function isEnabled(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "livrementeapp.com" || host.endsWith(".livrementeapp.com");
}

type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

let initialized = false;

/**
 * Loads fbevents.js and initializes the pixel. Safe to call multiple times.
 * PageView is NOT fired here — usePixelPageView (in App.tsx) owns every
 * PageView (initial load + SPA route changes) so they are never double counted.
 */
export function initMetaPixel(): void {
  if (initialized || !isEnabled()) return;
  initialized = true;

  if (!window.fbq) {
    const n: FbqFn & {
      callMethod?: FbqFn;
      queue?: unknown[];
      push?: FbqFn;
      loaded?: boolean;
      version?: string;
    } = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue?.push(args);
      }
    };
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    window.fbq = n;
    if (!window._fbq) window._fbq = n;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const first = document.getElementsByTagName("script")[0];
    first?.parentNode?.insertBefore(script, first);
  }

  window.fbq?.("init", META_PIXEL_ID);
}

/** Fires a standard Meta event. No-ops when the pixel isn't loaded (dev/preview). */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  window.fbq?.("track", name, params);
}

/** Fires PageView. Called on every route change by usePixelPageView. */
export function trackPageView(): void {
  window.fbq?.("track", "PageView");
}

/**
 * Grants or revokes consent on an already-loaded pixel. Used when a user
 * changes their cookie choice mid-session. No-ops if the pixel isn't loaded.
 */
export function setMetaConsent(granted: boolean): void {
  window.fbq?.("consent", granted ? "grant" : "revoke");
}

// --- Conversion events (the two actions we optimize ads for) ---------------

/** iOS download intent — a click on any "Baixar na App Store" button. */
export function trackAppStoreClick(source: string): void {
  trackEvent("Lead", {
    content_name: "App Store (iOS)",
    content_category: "app_download",
    source,
  });
}

/** Android waitlist signup — the email was successfully captured. */
export function trackAndroidWaitlist(): void {
  trackEvent("CompleteRegistration", {
    content_name: "Android Waitlist",
    status: true,
  });
}
