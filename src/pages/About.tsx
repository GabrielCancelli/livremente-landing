import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";
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
    title: "Privacidade de verdade",
    desc: "O bloqueio é processado no seu aparelho e o app nunca sabe o nome dos apps que você escolheu. Seu grupo vê a sua perseverança, nunca o que você escreveu.",
    color: "#0FB3A3",
  },
  {
    icon: Microscope,
    title: "Constância acima de intensidade",
    desc: "Dois minutos por dia valem mais do que uma hora de vez em quando. Tudo no app é desenhado para caber num dia cheio.",
    color: "#0FB3A3",
  },
  {
    icon: Gamepad2,
    title: "Marcos que celebram",
    desc: "Cada etapa da sequência solta um pássaro novo, do Pardal à Fênix. A caminhada tem festa no meio, não só no fim.",
    color: "#FFC107",
  },
  {
    icon: Users,
    title: "Grupo que vê você",
    desc: "Disciplina não se carrega sozinho. No grupo, cada um vê se o outro perseverou hoje, e um cutucão de incentivo chega na hora certa.",
    color: "#4ECDC4",
  },
];

export default function About() {
  return (
    <main className="pt-24 pb-16 bg-surface-bg min-h-screen">
      {/* Header */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-5xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            O Propósito
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4 text-text-main">
            Por que o <GradientText colors={["#0FB3A3", "#0D9E90", "#102A43", "#0FB3A3"]} animationSpeed={6}>LivreMente</GradientText> existe?
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
            className="bg-white rounded-3xl p-8 lg:p-12 flex flex-col gap-4 w-full shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-60"></div>
            <Heart size={32} className="text-alert-red relative z-10" />
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-main relative z-10">
              A Missão
            </h2>
            <p className="text-text-muted leading-relaxed font-medium relative z-10">
              Ajudar pessoas a perseverar no que importa: um devocional por dia, tempo protegido para o que tem valor, e a força de caminhar em grupo. Disciplina que ninguém precisa carregar sozinho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 flex flex-col gap-4 w-full shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
            <Brain size={32} className="text-teal relative z-10" />
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-main relative z-10">
              A Visão
            </h2>
            <p className="text-text-muted leading-relaxed font-medium relative z-10">
              Ser o companheiro diário de quem decidiu viver com propósito no Brasil: a leitura que abre o dia, o escudo que guarda o foco e o grupo que percebe quando você some.
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
          className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-center mb-10 text-text-main"
        >
          Pilares <GradientText colors={["#0FB3A3", "#0D9E90", "#102A43", "#0FB3A3"]} animationSpeed={6}>Fundamentais</GradientText>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 w-full">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm border border-slate-100 rounded-2xl p-6 lg:p-10 flex gap-4 lg:gap-6 items-start w-full hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: value.color + "15" }}
              >
                <value.icon size={20} style={{ color: value.color }} />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-text-main">{value.title}</h3>
                <p className="text-sm font-medium text-text-muted">{value.desc}</p>
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
          className="bg-white shadow-sm border border-slate-200 rounded-3xl p-8 lg:p-12 text-center w-full"
        >
          <p className="text-base text-text-muted font-medium mb-4 uppercase tracking-widest text-sm">O Método LivreMente</p>
          <p className="font-extrabold text-2xl lg:text-3xl xl:text-4xl leading-tight text-deep-blue">
            Devocional + Foco +<br className="hidden md:block" /> Escudo + Grupo
          </p>
          <p className="text-sm font-semibold text-teal mt-6 flex items-center justify-center gap-1 bg-teal/10 px-4 py-2 rounded-full w-fit mx-auto">
            Orgulhosamente Brasileiro 🇧🇷
          </p>
        </motion.div>
        </div>
      </section>
    </main>
  );
}
