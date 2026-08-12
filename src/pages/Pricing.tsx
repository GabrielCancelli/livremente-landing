import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";
import { Check, X, Sparkles } from "lucide-react";
import { trackAppStoreClick } from "@/lib/metaPixel";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  cta: string;
  features: { text: string; included: boolean }[];
}

const plans: Plan[] = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "para sempre",
    description: "Para dar o primeiro passo",
    popular: false,
    cta: "Começar Grátis",
    features: [
      { text: "Devocional diário e sequência", included: true },
      { text: "Sessões de foco de 25 e 50 minutos", included: true },
      { text: "Grupos com até 20 lugares", included: true },
      { text: "Metas do dia, escritas por você", included: true },
      { text: "SOS: respiração e alguém para ligar", included: true },
      { text: "Pássaros por marco de sequência", included: true },
      { text: "Escudo de foco (apps e sites somem)", included: false },
      { text: "Protocolos: conteúdo adulto, celular, apostas", included: false },
      { text: "Grupos com mais de 20 lugares", included: false },
    ],
  },
  {
    name: "Pro Mensal",
    price: "R$ 24,90",
    period: "/mês",
    description: "Tudo do grátis, mais o bloqueio e os programas",
    popular: false,
    cta: "Assinar Mensal",
    features: [
      { text: "Devocional diário e sequência", included: true },
      { text: "Sessões de foco de 25 e 50 minutos", included: true },
      { text: "Grupos com até 20 lugares", included: true },
      { text: "Metas do dia, escritas por você", included: true },
      { text: "SOS: respiração e alguém para ligar", included: true },
      { text: "Pássaros por marco de sequência", included: true },
      { text: "Escudo de foco (apps e sites somem)", included: true },
      { text: "Protocolos: conteúdo adulto, celular, apostas", included: true },
      { text: "Grupos com mais de 20 lugares", included: true },
    ],
  },
  {
    name: "Pro Anual",
    price: "R$ 12,49",
    period: "/mês",
    description: "Cobrado R$ 149,90 ao ano (R$ 0,41 por dia)",
    popular: true,
    cta: "Assinar Anual (50% OFF)",
    features: [
      { text: "Devocional diário e sequência", included: true },
      { text: "Sessões de foco de 25 e 50 minutos", included: true },
      { text: "Grupos com até 20 lugares", included: true },
      { text: "Metas do dia, escritas por você", included: true },
      { text: "SOS: respiração e alguém para ligar", included: true },
      { text: "Pássaros por marco de sequência", included: true },
      { text: "Escudo de foco (apps e sites somem)", included: true },
      { text: "Protocolos: conteúdo adulto, celular, apostas", included: true },
      { text: "Grupos com mais de 20 lugares", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim! Sem multa, sem burocracia. Cancele direto pela App Store e continue com acesso até o fim do período pago.",
  },
  {
    q: "A versão gratuita realmente funciona?",
    a: "Sim! Devocional, foco, grupos, metas e SOS são grátis de verdade. O Pro destrava o Escudo de foco, os Protocolos e os grupos grandes.",
  },
  {
    q: "Preciso do Pro para entrar num grupo grande?",
    a: "Não. Só quem cria o grupo com mais de 20 lugares precisa do Pro. Quem entra não paga nada.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é processado pela App Store (iOS) com total segurança, nos métodos aceitos pela Apple.",
  },
  {
    q: "Tem desconto no plano anual?",
    a: "Sim! O plano anual custa R$ 149,90 por ano, uma economia de R$ 148,90 em relação aos 12 meses do mensal.",
  },
];

export default function Pricing() {
  return (
    <main className="pt-24 pb-16 bg-surface-bg min-h-screen">
      {/* Header */}
      <section className="section max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
            Planos
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4 text-text-main">
            Invista na sua{" "}
            <GradientText colors={["#0FB3A3", "#0D9E90", "#102A43", "#0FB3A3"]} animationSpeed={6}>perseverança</GradientText>
          </h1>
          <p className="text-text-muted text-lg">
            Comece grátis. Evolua quando estiver pronto.
          </p>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`bg-white rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col relative w-full border ${
                plan.popular ? "border-teal/40 glow-teal shadow-xl" : "border-slate-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-teal/30">
                    <Sparkles size={12} fill="currentColor" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-1 text-text-main">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-extrabold font-[family-name:var(--font-heading)] text-deep-blue">
                  {plan.price}
                </span>
                <span className="text-text-muted font-medium ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="flex-1 flex flex-col gap-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="bg-teal/10 p-1 rounded-full shrink-0">
                        <Check size={14} className="text-teal" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full shrink-0">
                        <X size={14} className="text-slate-300" strokeWidth={3} />
                      </div>
                    )}
                    <span
                      className={`text-sm font-medium ${
                        feature.included
                          ? "text-text-main"
                          : "text-slate-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStoreClick(`pricing-${plan.name.toLowerCase()}`)}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all text-center block ${
                  plan.popular
                    ? "bg-deep-blue hover:bg-deep-blue/90 text-white shadow-lg hover:shadow-xl"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 mt-24">
        <div className="w-full max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-center mb-10 text-text-main"
          >
            Perguntas <GradientText colors={["#0FB3A3", "#0D9E90", "#102A43", "#0FB3A3"]} animationSpeed={6}>frequentes</GradientText>
          </motion.h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl group shadow-sm"
              >
                <summary className="cursor-pointer p-6 lg:p-8 font-semibold text-lg text-text-main list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-teal bg-teal/10 rounded-full p-1 transition-transform group-open:rotate-45 block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-base text-text-muted leading-relaxed font-medium">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
