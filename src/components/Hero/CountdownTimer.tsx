import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { trackAppStoreClick, trackPlayStoreClick } from "@/lib/metaPixel";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { AppleIcon, AndroidIcon } from "@/components/ui/StoreIcons";

export default function CountdownTimer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center gap-5 px-4"
    >
      <div className="flex items-center gap-2 text-teal text-base md:text-lg font-semibold tracking-wide">
        <motion.div
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
        >
          <Rocket size={20} />
        </motion.div>
        <span>Disponível no iPhone e no Android</span>
      </div>

      <div className="w-full max-w-sm sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <motion.a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAppStoreClick("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-deep-blue hover:bg-deep-blue/90 text-white font-bold px-7 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 text-base"
        >
          <AppleIcon size={20} className="shrink-0" />
          Baixar na App Store
        </motion.a>
        <motion.a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPlayStoreClick("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-teal hover:bg-teal-dark text-white font-bold px-7 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 text-base"
        >
          <AndroidIcon size={22} className="shrink-0" />
          Baixar na Google Play
        </motion.a>
      </div>

      <p className="text-text-muted text-sm font-medium">
        Gratuito · iPhone e Android · Sem anúncios
      </p>
    </motion.div>
  );
}
