import { motion } from "framer-motion";
import { Download, Star, Shield, Zap } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

export default function DownloadCTA() {
  return (
    <section id="download" className="w-full flex flex-col items-center px-4 md:px-8 py-24 bg-surface-bg mt-12">
      <div className="w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal/30 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.span 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal font-semibold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm border border-teal/30"
            >
              🎉 Disponível Agora
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight font-[family-name:var(--font-heading)]">
              O dia que você muda tudo começa aqui.
            </h2>
            <p className="text-white/70 text-lg mb-10 font-medium">
              Baixe o LivreMente gratuitamente e comece sua jornada de libertação hoje.
            </p>

            {/* App Store Button */}
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-md bg-white hover:bg-slate-50 text-deep-blue font-bold px-8 py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base"
            >
              <svg width="22" height="22" viewBox="0 0 384 512" fill="currentColor" className="shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Baixar Grátis na App Store
            </motion.a>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 w-full max-w-md">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
