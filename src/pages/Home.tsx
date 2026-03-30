import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Timer, Shield } from "lucide-react";
import HeroScroll from "@/components/Hero/HeroScroll";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import { featuredFeatures, secondaryFeatures } from "@/data/features";

export default function Home() {
  return (
    <main>
      {/* Hero + Phone Mockup + Countdown */}
      <section className="pt-20">
        <HeroScroll />
      </section>

      {/* Features Grid */}
      <section id="features" className="section">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              Feito para você
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] leading-snug">
              Tudo que você precisa para{" "}
              <span className="gradient-text">se libertar</span>
            </h2>
            <p className="text-light-slate text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Ferramentas que combinam ciência, fé e comunidade — pensadas para quem quer mudar de verdade.
            </p>
          </motion.div>

          {/* Spotlight features — 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredFeatures.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} variant="spotlight" />
            ))}
          </div>

          {/* Secondary features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-center text-light-slate text-sm font-medium mb-6">
              E mais...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryFeatures.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} variant="compact" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-teal hover:text-teal-dark font-semibold text-base transition-colors group"
            >
              Ver todos os detalhes
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Ciência */}
      <section className="section">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                stat: "90 dias",
                label: "de neurociência para rewiring cerebral",
                color: "#FFC107",
              },
              {
                icon: Timer,
                stat: "8 pássaros",
                label: "para colecionar na sua jornada",
                color: "#0FB3A3",
              },
              {
                icon: Shield,
                stat: "100%",
                label: "privacidade — seus dados são seus",
                color: "#0FB3A3",
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 text-center flex flex-col items-center gap-4"
              >
                <item.icon size={32} style={{ color: item.color }} />
                <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">
                  {item.stat}
                </p>
                <p className="text-sm text-light-slate leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight">
            Pronto para{" "}
            <span className="gradient-text">mudar sua história</span>?
          </h2>
          <p className="text-light-slate text-base md:text-lg max-w-xl leading-relaxed">
            Junte-se a milhares de pessoas que estão conquistando liberdade
            mental. O lançamento está chegando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2">
            <button disabled className="bg-teal/60 text-deep-blue font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2.5 text-sm cursor-not-allowed opacity-75">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store em breve
            </button>
            <button disabled className="glass text-surface/60 font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2.5 text-sm cursor-not-allowed opacity-75">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play em breve
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
