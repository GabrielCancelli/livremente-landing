import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center gap-6 px-4"
      >
        <p className="text-8xl md:text-9xl font-extrabold font-[family-name:var(--font-heading)] gradient-text">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">
          Página não encontrada
        </h1>
        <p className="text-light-slate text-base max-w-md leading-relaxed">
          A página que você procura não existe ou foi movida. Volte para a
          página inicial e continue explorando.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-deep-blue font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-teal/20 text-sm"
        >
          <Home size={18} />
          Voltar ao início
        </Link>
      </motion.div>
    </main>
  );
}
