import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { trackAndroidWaitlist } from "@/lib/metaPixel";

interface AndroidWaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AndroidWaitlistModal({ open, onClose }: AndroidWaitlistModalProps) {
  // Lock background scroll and close on Escape while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && <ModalContent onClose={onClose} />}
    </AnimatePresence>
  );
}

// Mounted only while open, so form state resets naturally on each open
function ModalContent({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    if (!supabase) {
      setErrorMsg("Sistema indisponível no momento. Tente novamente mais tarde.");
      setStatus("error");
      return;
    }

    const { error } = await supabase.from("waitlist").insert([
      { email, platform: "android" },
    ]);

    if (error) {
      console.error(error);
      // Duplicate email = already on the list, treat as success
      if (error.code === "23505") {
        trackAndroidWaitlist();
        setStatus("success");
        return;
      }
      setErrorMsg("Ocorreu um erro ao cadastrar. Tente novamente.");
      setStatus("error");
      return;
    }

    setEmail("");
    trackAndroidWaitlist();
    setStatus("success");
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative z-10 w-full max-w-md bg-deep-blue rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Decorative blur */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal/20 blur-3xl rounded-full pointer-events-none" />

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-white/50 hover:text-white p-1 z-20 transition-colors"
        >
          <X size={22} />
        </button>

        <div className="relative z-10 flex flex-col items-center text-center">
          {status === "success" ? (
            <>
              <CheckCircle2 size={44} className="text-teal mb-3" />
              <h3 className="text-white text-2xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                Você está na lista!
              </h3>
              <p className="text-white/70 text-sm font-medium mb-6">
                Vamos te avisar por e-mail assim que o LivreMente chegar no
                Android — antes de todo mundo.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-teal hover:bg-teal-dark text-white font-bold px-6 py-4 rounded-xl transition shadow-lg"
              >
                Fechar
              </button>
            </>
          ) : (
            <>
              <div className="w-14 h-14 rounded-2xl bg-teal/15 flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="w-7 h-7 text-teal"
                  aria-hidden="true"
                >
                  <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48 47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0L116.18 64.45a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                LivreMente no Android
              </h3>
              <p className="text-white/70 text-sm font-medium mb-6">
                Ainda estamos finalizando a versão Android. Deixe seu e-mail e
                seja o primeiro a saber quando lançar.
              </p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                  autoFocus
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent disabled:opacity-50 transition font-medium"
                />

                {status === "error" && (
                  <div className="bg-red-500/20 text-red-100 border border-red-500/30 p-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-teal hover:bg-teal-dark text-white font-bold px-5 py-4 rounded-xl transition shadow-lg disabled:opacity-70 flex justify-center uppercase tracking-wide text-sm"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Entrar na lista"
                  )}
                </button>
              </form>

              <p className="text-white/40 text-xs mt-4">
                Sem spam. Só um aviso quando o app estiver pronto.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
