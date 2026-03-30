import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Gamepad2,
  Users,
  ShieldCheck,
  Microscope,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Privacidade primeiro",
    desc: "Seus dados são seus. Sem venda de informações, sem rastreamento invasivo.",
    color: "#0FB3A3",
  },
  {
    icon: Microscope,
    title: "Ciência aplicada",
    desc: "Baseado em técnicas cognitivo-comportamentais validadas por pesquisa.",
    color: "#0FB3A3",
  },
  {
    icon: Gamepad2,
    title: "Gamificação saudável",
    desc: "Progresso motivante sem manipulação. Você cresce no seu ritmo.",
    color: "#FFC107",
  },
  {
    icon: Users,
    title: "Comunidade genuína",
    desc: "Conexão real entre pessoas na mesma jornada. Suporte que faz diferença.",
    color: "#4ECDC4",
  },
];

export default function About() {
  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
            Por que o <span className="gradient-text">LivreMente</span> existe?
          </h1>
        </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 mt-16 md:mt-24">
        <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 lg:p-12 flex flex-col gap-4 w-full"
          >
            <Heart size={32} className="text-alert-red" />
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
              Missão
            </h2>
            <p className="text-light-slate leading-relaxed">
              Ajudar pessoas a conquistarem liberdade mental, oferecendo
              ferramentas inteligentes para foco, quebra de hábitos prejudiciais
              e bem-estar emocional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 lg:p-12 flex flex-col gap-4 w-full"
          >
            <Brain size={32} className="text-teal" />
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
              Visão
            </h2>
            <p className="text-light-slate leading-relaxed">
              Ser a plataforma #1 de saúde mental mobile no Brasil, com
              ferramentas que combinam ciência, tecnologia e comunidade para
              transformar vidas.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 mt-16 md:mt-24">
        <div className="w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-center mb-10"
        >
          Nossos <span className="gradient-text">valores</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 w-full">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 lg:p-10 flex gap-4 lg:gap-6 items-start w-full"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: value.color + "20" }}
              >
                <value.icon size={20} style={{ color: value.color }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{value.title}</h3>
                <p className="text-sm text-light-slate">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 py-16 md:py-24">
        <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-10 text-center border-teal/20 w-full"
        >
          <p className="text-base text-light-slate mb-3">LivreMente combina:</p>
          <p className="font-semibold gradient-text text-xl lg:text-2xl">
            Gamificação + Comunidade + Ciência + Fé + Bloqueio de Sites + IA
          </p>
          <p className="text-xs text-light-slate mt-2 flex items-center justify-center gap-1">
            Tudo em português
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Brasil"
              loading="lazy"
              className="w-4 h-3 inline-block rounded-sm"
            />
          </p>
        </motion.div>
        </div>
      </section>
    </main>
  );
}
