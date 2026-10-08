import { motion } from "framer-motion";
import { Star, Shield, Zap } from "lucide-react";
import { trackAppStoreClick, trackPlayStoreClick } from "@/lib/metaPixel";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { AppleIcon, AndroidIcon } from "@/components/ui/StoreIcons";

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
              Comece pequeno. Hoje.
            </h2>
            <p className="text-white/70 text-lg mb-10 font-medium">
              Dois minutos de devocional já contam. A constância faz o resto.
            </p>

            {/* Store buttons */}
            <div className="w-full max-w-md flex flex-col gap-4">
              <motion.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStoreClick("home_cta")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white hover:bg-slate-50 text-deep-blue font-bold px-6 py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base"
              >
                <AppleIcon size={22} className="shrink-0" />
                Baixar na App Store
              </motion.a>
              <motion.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPlayStoreClick("home_cta")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-teal hover:bg-teal-dark text-white font-bold px-6 py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base"
              >
                <AndroidIcon size={24} className="shrink-0" />
                Baixar na Google Play
              </motion.a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 w-full max-w-md">
              {[
                { icon: Star, label: "Gratuito" },
                { icon: Shield, label: "Sem anúncios" },
                { icon: Zap, label: "Leve e rápido" },
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
