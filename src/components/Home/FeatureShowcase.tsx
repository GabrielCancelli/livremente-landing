import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  reverse: boolean;
  color: string;
}

const features: Feature[] = [
  {
    id: "bloqueador",
    title: "Bloqueador de Sites e Apps",
    description: "Recupere o controle do seu tempo. O Escudo de Foco bloqueia distrações na raiz, impedindo que você acesse sites e apps que são gatilhos, protegendo sua jornada de recuperação.",
    image: "/mockup-escudo.PNG",
    reverse: false,
    color: "bg-blue-50 text-deep-blue"
  },
  {
    id: "konsel",
    title: "Konsel IA: Seu Conselheiro 24/7",
    description: "O Konsel está sempre à disposição para te ouvir, oferecer conselhos baseados em neurociência e guiar você em momentos críticos de ansiedade ou gatilhos.",
    image: "/mockup-konsel.png",
    reverse: true,
    color: "bg-teal-50/50 text-teal-dark"
  },
  {
    id: "emergencia",
    title: "Botão SOS de Emergência",
    description: "Bateu a fissura? Um toque no botão de emergência ativa a quebra de padrão com exercícios de respiração e lembretes instantâneos, desarmando o impulso na hora.",
    image: "/mockup-sos.png",
    reverse: false,
    color: "bg-red-50 text-alert-red"
  },
  {
    id: "comunidade",
    title: "Irmandade e Fórum",
    description: "Você não está lutando sozinho. Troque experiências, entre em grupos de apoio focados, compartilhe sua vitória e converse em tempo real com irmãos na mesma jornada de libertação.",
    image: "/mockup-comunidade.PNG",
    reverse: true,
    color: "bg-indigo-50 text-indigo-700"
  },
  {
    id: "analise",
    title: "Análise dos seus Desafios",
    description: "Acompanhe os dados reais do seu progresso. Descubra seus padrões de vulnerabilidade, streaks invictos, horários críticos e receba insights personalizados para ajustar sua estratégia humana.",
    image: "/mockup-analise.PNG",
    reverse: false,
    color: "bg-violet-50 text-violet-700"
  },
  {
    id: "conteudos",
    title: "Biblioteca de Conteúdos Diários",
    description: "Aprenda tudo sobre o vício e como o cérebro funciona. Trilhas educacionais estruturadas, desafios práticos e devocionais guiados para reconstruir sua mentalidade passo a passo.",
    image: "/mokup-library.png",
    reverse: true,
    color: "bg-orange-50 text-orange-700"
  },
  {
    id: "diario",
    title: "Diário de Humor e Tentações",
    description: "Registre diariamente como você se sente e mapeie catalogando cada tentação. Entender os gatilhos é o primeiro passo para dominar os impulsos antes que eles controlem você.",
    images: [
      "/mockup-diario1.PNG",
      "/mockup-diario2.PNG",
      "/mockup-diario3.PNG",
      "/mockup-diario4.PNG",
      "/mockup-diario5.PNG",
      "/mockup-diario6.PNG"
    ],
    reverse: false,
    color: "bg-amber-50 text-amber-700"
  },
  {
    id: "juramento",
    title: "Juramento Pessoal",
    description: "Assine seu compromisso definitivo com a liberdade. O juramento fica guardado e atua como uma âncora emocional constante lembrando seus motivos e tudo o que você tem a perder ao retroceder.",
    image: "/mockup-juramento.PNG",
    reverse: true,
    color: "bg-emerald-50 text-emerald-700"
  }
];

function MockupSlider({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    setCurrentIndex(index);
    const node = scrollRef.current;
    node.scrollTo({
      left: index * node.clientWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full h-full relative group">
      <div 
        ref={scrollRef}
        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={(e) => {
          const node = e.currentTarget;
          const index = Math.round(node.scrollLeft / node.clientWidth);
          if (index !== currentIndex) {
            setCurrentIndex(index);
          }
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
            <img 
              src={img} 
              alt={`${title} ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Setas (escondidas em touch, visíveis no hover em desktop) */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => currentIndex > 0 && scrollToIndex(currentIndex - 1)}
          className={`p-1.5 ml-1 rounded-full bg-black/40 text-white backdrop-blur-sm transition ${currentIndex === 0 ? 'invisible' : 'hover:bg-black/60'}`}
        >
          <ChevronLeft size={18} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => currentIndex < images.length - 1 && scrollToIndex(currentIndex + 1)}
          className={`p-1.5 mr-1 rounded-full bg-black/40 text-white backdrop-blur-sm transition ${currentIndex === images.length - 1 ? 'invisible' : 'hover:bg-black/60'}`}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pontos de indicacao */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5 z-10 pointer-events-none">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${currentIndex === idx ? 'bg-white w-4' : 'bg-white/50 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
}

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
                Recurso Principal
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-main">
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
                  {feature.images ? (
                    <MockupSlider images={feature.images} title={feature.title} />
                  ) : (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist yet
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'bg-slate-200');
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xs border text-slate-500 border-slate-400 p-2 rounded">${feature.image} (Pendente)</span>`;
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
