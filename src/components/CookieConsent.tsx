import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import {
  getStoredConsent,
  storeConsent,
  onOpenCookiePreferences,
} from "@/lib/consent";
import { initMetaPixel, trackPageView, setMetaConsent } from "@/lib/metaPixel";

// LGPD cookie banner. The Meta Pixel only loads after the user accepts; nothing
// is tracked until then. The choice is persisted and can be revisited via the
// "Preferências de cookies" link in the footer.
export default function CookieConsent() {
  // Show on first visit (no choice stored yet) — derived at first render so
  // there's no post-mount flash.
  const [visible, setVisible] = useState(() => getStoredConsent() === null);

  useEffect(() => {
    // Reopen when the user clicks "Preferências de cookies" in the footer.
    return onOpenCookiePreferences(() => setVisible(true));
  }, []);

  const accept = () => {
    storeConsent("granted");
    setVisible(false);
    // Load the pixel now and register a PageView for the current page (the
    // route hook already ran on mount and no-opped because nothing was loaded).
    initMetaPixel();
    setMetaConsent(true);
    trackPageView();
  };

  const reject = () => {
    storeConsent("denied");
    setVisible(false);
    // Stops sending if the pixel was loaded earlier this session; no-op otherwise.
    setMetaConsent(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", duration: 0.5 }}
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed bottom-0 inset-x-0 z-[60] flex justify-center p-4"
        >
          <div className="w-full max-w-3xl bg-deep-blue text-white rounded-2xl shadow-2xl border border-white/10 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center shrink-0">
                <Cookie size={20} className="text-teal" />
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Usamos cookies para entender como as pessoas descobrem o
                LivreMente e melhorar o site. Você escolhe. Saiba mais na{" "}
                <Link
                  to="/privacy"
                  className="text-teal hover:underline font-semibold"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={reject}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
              >
                Rejeitar
              </button>
              <button
                onClick={accept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-bold bg-teal hover:bg-teal-dark text-white transition-colors shadow-lg"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
