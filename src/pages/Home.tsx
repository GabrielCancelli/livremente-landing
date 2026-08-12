import { motion } from "framer-motion";
import { Sparkles, Timer, Shield } from "lucide-react";
import HeroScroll from "@/components/Hero/HeroScroll";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import DownloadCTA from "@/components/Home/WaitlistCTA";

export default function Home() {
  return (
    <main className="bg-surface-bg min-h-screen">
      {/* Hero + Phone Mockup + Download CTA */}
      <section className="pt-24 pb-12 w-full overflow-hidden">
        <HeroScroll />
      </section>

      {/* Feature Showcase (Zig Zag Layout) */}
      <FeatureShowcase />

      {/* Social Proof / Ciência */}
      <section className="py-24 px-4 w-full">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                stat: "2 minutos",
                label: "por dia bastam: o devocional é curto de propósito, e o dia já conta",
                color: "#102A43",
                bg: "bg-blue-50"
              },
              {
                icon: Timer,
                stat: "6 pássaros",
                label: "para soltar na caminhada, um a cada marco da sequência, do Pardal à Fênix aos 90 dias",
                color: "#0FB3A3",
                bg: "bg-teal-50"
              },
              {
                icon: Shield,
                stat: "100%",
                label: "do bloqueio processado no seu aparelho: o app nunca sabe o nome dos apps que você escolheu",
                color: "#102A43",
                bg: "bg-slate-100"
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`${item.bg} rounded-3xl p-8 text-center flex flex-col items-center gap-4 border border-slate-200/50 shadow-sm`}
              >
                <item.icon size={36} style={{ color: item.color }} />
                <p className="text-4xl font-bold font-[family-name:var(--font-heading)] text-text-main">
                  {item.stat}
                </p>
                <p className="text-sm text-text-muted leading-relaxed font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Download CTA */}
      <DownloadCTA />
    </main>
  );
}
