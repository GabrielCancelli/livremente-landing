import { motion } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: "Grátis" | "Pro";
  reverse: boolean;
  color: string;
}

const features: Feature[] = [
  {
    id: "devocional",
    title: "Um devocional por dia.",
    description: "Dois minutos de manhã e o dia já conta. A leitura te espera todo dia, e a sua sequência cresce um dia por vez.",
    image: "/mockup2-devocional.png",
    badge: "Grátis",
    reverse: false,
    color: "bg-teal-50/50 text-teal-dark"
  },
  {
    id: "escudo",
    title: "Um escudo contra as distrações.",
    description: "Os apps e sites que você escolher somem na hora do foco, e o conteúdo adulto sai do ar junto, sempre. Programe horários e o escudo liga sozinho.",
    image: "/mockup2-escudo.png",
    badge: "Pro",
    reverse: true,
    color: "bg-blue-50 text-deep-blue"
  },
  {
    id: "grupos",
    title: "Um grupo que vê você.",
    description: "Cada um vê se o outro perseverou hoje: o devocional, a sequência e o recorde. Nunca o que você escreveu. Quem cria escolhe o tamanho, e quem entra não paga.",
    image: "/mockup2-grupos.png",
    badge: "Grátis",
    reverse: false,
    color: "bg-indigo-50 text-indigo-700"
  },
  {
    id: "protocolos",
    title: "Programas para vencer dependências.",
    description: "Pornografia, celular e apostas: um texto por dia, um juramento que vale por 24 horas, e o bloqueio incluído.",
    image: "/mockup2-protocolos.png",
    badge: "Pro",
    reverse: true,
    color: "bg-violet-50 text-violet-700"
  },
  {
    id: "sos",
    title: "SOS para a hora do aperto.",
    description: "Respiração guiada e alguém para ligar: o contato que você escolher e o CVV 188. Um toque, sem julgamento.",
    image: "/mockup2-sos.png",
    badge: "Grátis",
    reverse: false,
    color: "bg-red-50 text-alert-red"
  },
  {
    id: "conquistas",
    title: "Perseverar vira hábito.",
    description: "Cada marco da sua sequência solta um pássaro novo. São seis até a Fênix, que chega aos 90 dias.",
    image: "/mockup2-conquistas.png",
    badge: "Grátis",
    reverse: true,
    color: "bg-amber-50 text-amber-700"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="py-24 px-4 w-full bg-surface-bg overflow-hidden" id="features">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 lg:gap-32">
        {features.map((feature) => (
          <motion.div 
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${feature.color}`}>
                {feature.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug text-text-main">
                {feature.title}
              </h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Mockup Container */}
            <div className="flex-1 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] aspect-[1/2.16] bg-deep-blue rounded-[3rem] p-3 shadow-2xl border-4 border-slate-200">
                {/* Notch Mockup */}
                <div className="absolute top-0 inset-x-0 w-32 h-7 bg-slate-200 rounded-b-3xl mx-auto z-20 shadow-sm border-b border-x border-slate-300"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-slate-100 rounded-[2.25rem] overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
