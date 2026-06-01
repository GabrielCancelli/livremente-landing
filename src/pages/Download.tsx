import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Shield, Zap } from "lucide-react";
import AndroidWaitlistModal from "@/components/Download/AndroidWaitlistModal";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

export default function Download() {
  const [androidOpen, setAndroidOpen] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = "Baixe o LivreMente";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="min-h-screen bg-deep-blue flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md flex flex-col items-center text-center"
      >
        {/* Logo */}
        <img src="/logo.png" alt="LivreMente" className="h-10 w-auto mb-10" />

        <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal font-semibold text-sm mb-6 uppercase tracking-wider border border-teal/30">
          Comece agora
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight font-[family-name:var(--font-heading)]">
          Baixe o LivreMente
        </h1>
        <p className="text-white/70 text-base md:text-lg mb-10 font-medium">
          Reconquiste sua mente. Escolha sua plataforma e comece sua jornada de
          libertação hoje.
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4">
          {/* App Store */}
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white hover:bg-slate-50 text-deep-blue font-bold px-6 py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 text-base"
          >
            <svg width="22" height="22" viewBox="0 0 384 512" fill="currentColor" className="shrink-0">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Baixar na App Store
          </motion.a>

          {/* Android — opens waitlist */}
          <motion.button
            onClick={() => setAndroidOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-teal hover:bg-teal-dark text-white font-bold px-6 py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 text-base"
          >
            <svg width="24" height="24" viewBox="0 0 576 512" fill="currentColor" className="shrink-0">
              <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48 47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0L116.18 64.45a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55" />
            </svg>
            Quero no Android
          </motion.button>
        </div>

        <p className="text-white/40 text-xs mt-5 font-medium">
          Android em breve — entre na lista e seja o primeiro a saber.
        </p>

        {/* Trust signals */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 w-full">
          {[
            { icon: Star, label: "Gratuito" },
            { icon: Shield, label: "100% Privado" },
            { icon: Zap, label: "Leve e Rápido" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <item.icon size={18} className="text-teal" />
              </div>
              <span className="text-white/60 text-xs font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <AndroidWaitlistModal open={androidOpen} onClose={() => setAndroidOpen(false)} />
    </main>
  );
}
