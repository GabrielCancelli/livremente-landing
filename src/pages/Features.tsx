import { motion } from "framer-motion";
import { Bird } from "lucide-react";
import { featuredFeatures, secondaryFeatures } from "@/data/features";

const allFeatures = [...featuredFeatures, ...secondaryFeatures];

export default function Features() {
  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
            Um ecossistema completo para{" "}
            <span className="gradient-text">sua liberdade</span>
          </h1>
          <p className="text-light-slate text-lg max-w-2xl mx-auto">
            Cada ferramenta foi pensada com ciência e empatia para te ajudar na
            jornada de quebra de hábitos prejudiciais.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Feature sections alternating */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 mt-16 md:mt-24">
        <div className="w-full max-w-6xl">
        {allFeatures.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16 py-16 ${
                i < allFeatures.length - 1 ? "border-b border-glass-border" : ""
              }`}
            >
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: feature.color + "20" }}
                  >
                    <feature.icon
                      size={24}
                      style={{ color: feature.color }}
                    />
                  </div>
                  {feature.tag && (
                    <span className="text-xs font-medium bg-teal/20 text-teal px-3 py-1 rounded-full">
                      {feature.tag}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">
                  {feature.title}
                </h2>
                <p className="text-light-slate leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Bird badges */}
                {feature.title === "Santuário dos Pássaros" && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Pardal (0d)",
                      "Beija-flor (7d)",
                      "Coruja (15d)",
                      "Falcão (30d)",
                      "Águia (60d)",
                      "Fênix (90d)",
                    ].map((bird) => (
                      <span
                        key={bird}
                        className="text-xs glass px-3 py-1.5 rounded-full text-gain-gold flex items-center gap-1.5"
                      >
                        <Bird size={12} className="text-gain-gold" />
                        {bird}
                      </span>
                    ))}
                  </div>
                )}

                {/* Exercise badges */}
                {feature.title === "Exercícios para a Mente" && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Respiração Guiada",
                      "Jogo de Memória",
                      "Desafio Rápido",
                      "Associação de Palavras",
                      "Diário Reflexivo",
                    ].map((exercise) => (
                      <span
                        key={exercise}
                        className="text-xs glass px-3 py-1.5 rounded-full text-surface/80 flex items-center gap-1.5"
                      >
                        <feature.icon size={12} style={{ color: feature.color }} />
                        {exercise}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone mockup placeholder */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] rounded-[40px] bg-[#1a1a1a] p-[5px] shadow-lg">
                  <div className="w-full h-full overflow-hidden rounded-[36px] bg-gradient-to-b from-deep-blue to-graphite flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: feature.color + "20" }}
                      >
                        <feature.icon
                          size={32}
                          style={{ color: feature.color }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-surface text-center px-4">
                        {feature.title}
                      </p>
                      <div className="w-24 h-1 rounded-full bg-graphite-light">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${60 + i * 5}%`,
                            backgroundColor: feature.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      </section>
    </main>
  );
}
