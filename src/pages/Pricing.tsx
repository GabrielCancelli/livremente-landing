import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

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
    description: "Comece sua jornada com o essencial",
    popular: false,
    cta: "Começar Grátis",
    features: [
      { text: "Streak counter diário", included: true },
      { text: "Devocional diário (limitado)", included: true },
      { text: "3 exercícios mentais", included: true },
      { text: "Comunidade (leitura)", included: true },
      { text: "Bird Sanctuary (3 pássaros)", included: true },
      { text: "Konsel AI", included: false },
      { text: "Todos os exercícios", included: false },
      { text: "Site Blocking", included: false },
      { text: "Amizades ilimitadas", included: false },
      { text: "Comunidade (postagens)", included: false },
    ],
  },
  {
    name: "Premium",
    price: "R$ 19,90",
    period: "/mês",
    description: "Acesso completo a todas as ferramentas",
    popular: true,
    cta: "Assinar Premium",
    features: [
      { text: "Streak counter diário", included: true },
      { text: "Devocional diário completo", included: true },
      { text: "Todos os 5 exercícios mentais", included: true },
      { text: "Comunidade completa", included: true },
      { text: "Bird Sanctuary (8 pássaros)", included: true },
      { text: "Konsel AI (coaching)", included: true },
      { text: "Site Blocking nativo", included: true },
      { text: "Amizades ilimitadas", included: true },
      { text: "Comunidade (postagens)", included: true },
      { text: "Suporte prioritário", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim! Sem multa, sem burocracia. Cancele direto pelo app ou pela loja (App Store / Google Play).",
  },
  {
    q: "A versão gratuita realmente funciona?",
    a: "Sim! O plano gratuito tem tudo que você precisa para começar. O Premium desbloqueia ferramentas avançadas para quem quer ir mais fundo.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é processado via App Store (iOS) ou Google Play (Android) com total segurança. Suportamos Pix, cartão e boleto via plataformas das lojas.",
  },
  {
    q: "Tem desconto no plano anual?",
    a: "Sim! O plano anual custa R$ 149,90/ano (economia de R$ 89). Disponível após o lançamento.",
  },
];

export default function Pricing() {
  return (
    <main className="pt-24 pb-16">
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
          <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
            Invista na sua{" "}
            <span className="gradient-text">liberdade mental</span>
          </h1>
          <p className="text-light-slate text-lg">
            Comece grátis. Evolua quando estiver pronto.
          </p>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col relative w-full ${
                plan.popular ? "border-teal/40 glow-teal" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-teal text-deep-blue text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Sparkles size={12} />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-light-slate">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold font-[family-name:var(--font-heading)]">
                  {plan.price}
                </span>
                <span className="text-light-slate text-sm ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="flex-1 flex flex-col gap-3 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check size={16} className="text-teal shrink-0" />
                    ) : (
                      <X
                        size={16}
                        className="text-light-slate/40 shrink-0"
                      />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-surface"
                          : "text-light-slate/40"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-teal hover:bg-teal-dark text-deep-blue hover:shadow-lg hover:shadow-teal/20"
                    : "glass hover:border-teal/30 text-surface"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-4xl">
          <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-center mb-10"
        >
          Perguntas <span className="gradient-text">frequentes</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl group"
            >
              <summary className="cursor-pointer p-6 lg:p-8 font-medium text-base list-none flex items-center justify-between">
                {faq.q}
                <span className="text-teal transition-transform group-open:rotate-45 text-xl">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-base text-light-slate leading-relaxed">
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
