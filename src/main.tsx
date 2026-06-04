import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { initMetaPixel } from "@/lib/metaPixel";
import { getStoredConsent } from "@/lib/consent";

// Returning visitors who already accepted cookies get tracking right away.
// First-time visitors are handled by the CookieConsent banner (opt-in).
if (getStoredConsent() === "granted") {
  initMetaPixel();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
