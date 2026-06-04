import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { trackAppStoreClick } from "@/lib/metaPixel";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

export default function CountdownTimer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center gap-5"
    >
      <div className="flex items-center gap-2 text-teal text-base md:text-lg font-semibold tracking-wide">
        <motion.div
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
        >
          <Rocket size={20} />
        </motion.div>
        <span>Disponível agora na App Store!</span>
      </div>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackAppStoreClick("hero")}
        className="group"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-deep-blue hover:bg-deep-blue/90 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-base"
        >
          <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor" className="shrink-0">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          Baixar Grátis na App Store
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:translate-x-0.5 transition-transform">
            <path d="M7 17l9.2-9.2M17 17V7.8M17 7.8H7.8"/>
          </svg>
        </motion.div>
      </a>

      <p className="text-text-muted text-sm font-medium">
        Gratuito · iOS · Sem anúncios
      </p>
    </motion.div>
  );
}
