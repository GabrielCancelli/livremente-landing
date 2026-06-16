import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, Loader2, Sparkles, Heart } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { trackEvent } from "@/lib/metaPixel";

type Palette = "A" | "B" | "D";

const DONE_KEY = "lm_cores_done";

// 9 screens (3 telas x 3 paletas). "geral" reuses the welcome trio (the bird = identidade).
const IMG: Record<string, Record<Palette, string>> = {
  welcome: { A: "/survey/welcome-a.webp", B: "/survey/welcome-b.webp", D: "/survey/welcome-d.webp" },
  home: { A: "/survey/home-a.webp", B: "/survey/home-b.webp", D: "/survey/home-d.webp" },
  grupos: { A: "/survey/grupos-a.webp", B: "/survey/grupos-b.webp", D: "/survey/grupos-d.webp" },
};

// The image-pick questions, in order.
const PICKS: { key: string; img: keyof typeof IMG; eyebrow: string; q: string }[] = [
  { key: "boasvindas", img: "welcome", eyebrow: "Tela de boas-vindas", q: "Qual versão você acha mais bonita?" },
  { key: "home", img: "home", eyebrow: "Tela principal", q: "E aqui — qual te agrada mais?" },
  { key: "grupos", img: "grupos", eyebrow: "Tela de grupos", q: "Qual versão você prefere?" },
  { key: "geral", img: "welcome", eyebrow: "No geral", q: "Qual dessas identidades de cor você acha mais bonita?" },
];

const FAIXAS = ["16–24", "25–34", "35–44", "45+"];
const GENEROS = ["Feminino", "Masculino", "Prefiro não dizer"];

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Cores() {
  // step 0 = intro, 1..4 = PICKS, 5 = perfil
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Record<string, Palette>>({});
  const [faixa, setFaixa] = useState("");
  const [genero, setGenero] = useState("");
  const [comentario, setComentario] = useState("");
  const [contato, setContato] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Stable per-session values (computed once).
  const sessionId = useMemo(() => crypto.randomUUID(), []);
  const marketingSource = useMemo(
    () => new URLSearchParams(window.location.search).get("src") || null,
    []
  );
  // Independent shuffled display order per question (anti-order-bias).
  const orders = useMemo(() => {
    const o: Record<string, Palette[]> = {};
    for (const p of PICKS) o[p.key] = shuffle(["A", "B", "D"]);
    return o;
  }, []);

  useEffect(() => {
    const prev = document.title;
    document.title = "Pesquisa sobre telas de aplicativos";
    trackEvent("ViewContent", { content_name: "Pesquisa de Cor" });
    if (localStorage.getItem(DONE_KEY)) setStatus("done");
    return () => {
      document.title = prev;
    };
  }, []);

  const totalSteps = PICKS.length + 1; // picks + perfil
  const select = (key: string, p: Palette) => setPicks((s) => ({ ...s, [key]: p }));

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMsg("");
    if (!supabase) {
      setErrorMsg("Sistema indisponível no momento. Tente novamente mais tarde.");
      setStatus("error");
      return;
    }
    const { error } = await supabase.from("color_survey").insert([
      {
        session_id: sessionId,
        pick_boasvindas: picks.boasvindas,
        pick_home: picks.home,
        pick_grupos: picks.grupos,
        pick_geral: picks.geral,
        faixa_etaria: faixa || null,
        genero: genero || null,
        comentario: comentario.trim() || null,
        contato: contato.trim() || null,
        marketing_source: marketingSource,
        user_agent: navigator.userAgent,
      },
    ]);
    if (error) {
      console.error(error);
      setErrorMsg("Ocorreu um erro ao enviar. Tente novamente.");
      setStatus("error");
      return;
    }
    localStorage.setItem(DONE_KEY, "1");
    trackEvent("Lead", { content_name: "Pesquisa de Cor", content_category: "survey" });
    setStatus("done");
  };

  // ---------- THANK YOU ----------
  if (status === "done") {
    return (
      <Shell>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-teal/15 flex items-center justify-center mb-5">
            <Heart size={30} className="text-teal" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-3 font-[family-name:var(--font-heading)]">
            Valeu de verdade!
          </h1>
          <p className="text-white/70 font-medium mb-8 max-w-sm">
            Sua opinião ajuda muito na nossa pesquisa de design. Foi rapidinho, né? 💛
          </p>
          <button
            onClick={() => {
              localStorage.removeItem(DONE_KEY);
              setPicks({});
              setFaixa("");
              setGenero("");
              setComentario("");
              setContato("");
              setStep(0);
              setStatus("idle");
            }}
            className="mt-4 text-white/40 hover:text-white/70 text-sm font-medium transition"
          >
            Responder de novo
          </button>
        </motion.div>
      </Shell>
    );
  }

  // ---------- INTRO ----------
  if (step === 0) {
    return (
      <Shell>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/20 text-teal font-semibold text-sm mb-6 uppercase tracking-wider border border-teal/30">
            <Sparkles size={14} /> Pesquisa · 1 minuto
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight font-[family-name:var(--font-heading)]">
            Qual dessas telas<br />você acha mais bonita?
          </h1>
          <p className="text-white/70 text-base mb-10 font-medium max-w-sm">
            Uma pesquisa rápida sobre design de telas de aplicativos. Vamos te
            mostrar algumas telas em variações de cor — toque na que você mais
            gosta. Não tem certo ou errado.
          </p>
          <button
            onClick={() => setStep(1)}
            className="w-full max-w-xs bg-teal hover:bg-teal-dark text-white font-bold px-6 py-4 rounded-2xl transition shadow-lg uppercase tracking-wide text-sm"
          >
            Começar
          </button>
        </motion.div>
      </Shell>
    );
  }

  // ---------- PERFIL (last step) ----------
  if (step === totalSteps) {
    return (
      <Shell>
        <Progress step={step} total={totalSteps} onBack={() => setStep(step - 1)} />
        <motion.div
          key="perfil"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full"
        >
          <h2 className="text-2xl font-extrabold text-white mb-1 font-[family-name:var(--font-heading)]">
            Pra terminar
          </h2>
          <p className="text-white/60 font-medium mb-6 text-sm">Só pra entender quem respondeu.</p>

          <Label>Nome ou e-mail <span className="text-white/40 normal-case">(opcional)</span></Label>
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            maxLength={140}
            placeholder="Como te chamar, ou seu e-mail"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition font-medium mb-6"
          />

          <Label>Sua idade</Label>
          <ChipRow options={FAIXAS} value={faixa} onChange={setFaixa} />

          <Label className="mt-6">Gênero <span className="text-white/40 normal-case">(opcional)</span></Label>
          <ChipRow options={GENEROS} value={genero} onChange={setGenero} />

          <Label className="mt-6">Quer comentar algo? <span className="text-white/40 normal-case">(opcional)</span></Label>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows={3}
            maxLength={500}
            placeholder="Por que escolheu essa cor?"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition font-medium resize-none"
          />

          {status === "error" && (
            <div className="mt-4 bg-red-500/20 text-red-100 border border-red-500/30 p-3 rounded-lg text-sm font-semibold text-center">
              {errorMsg}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!faixa || status === "loading"}
            className="mt-7 w-full bg-teal hover:bg-teal-dark text-white font-bold px-6 py-4 rounded-2xl transition shadow-lg uppercase tracking-wide text-sm disabled:opacity-50 flex items-center justify-center"
          >
            {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : "Enviar resposta"}
          </button>
          {!faixa && (
            <p className="text-white/40 text-xs text-center mt-3">Escolha sua idade pra enviar.</p>
          )}
        </motion.div>
      </Shell>
    );
  }

  // ---------- IMAGE PICK STEPS (1..PICKS.length) ----------
  const pick = PICKS[step - 1];
  const order = orders[pick.key];
  const chosen = picks[pick.key];

  return (
    <Shell wide>
      <Progress step={step} total={totalSteps} onBack={() => setStep(step - 1)} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pick.key}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <p className="text-teal font-bold text-xs uppercase tracking-wider mb-1 text-center">
            {pick.eyebrow}
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-5 text-center font-[family-name:var(--font-heading)] px-1 text-balance">
            {pick.q}
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {order.map((p) => {
              const isSel = chosen === p;
              return (
                <motion.button
                  key={p}
                  onClick={() => select(pick.key, p)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-2xl overflow-hidden transition-all ${
                    isSel
                      ? "ring-4 ring-teal shadow-lg"
                      : "ring-1 ring-white/10 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={IMG[pick.img][p]}
                    alt="Opção de cor"
                    className="w-full block"
                    loading="eager"
                  />
                  {isSel && (
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-teal flex items-center justify-center shadow-md">
                      <Check size={16} className="text-white" strokeWidth={3} />
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={() => setStep(step + 1)}
            disabled={!chosen}
            className="mt-6 w-full bg-teal hover:bg-teal-dark text-white font-bold px-6 py-4 rounded-2xl transition shadow-lg uppercase tracking-wide text-sm disabled:opacity-40"
          >
            {step === PICKS.length ? "Quase lá" : "Próximo"}
          </button>
          {!chosen && (
            <p className="text-white/40 text-xs text-center mt-3">Toque em uma das telas.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}

// ---------- small building blocks ----------

function Shell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className="min-h-screen bg-deep-blue flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className={`relative z-10 w-full ${wide ? "max-w-xl" : "max-w-md"}`}>{children}</div>
    </main>
  );
}

function Progress({ step, total, onBack }: { step: number; total: number; onBack: () => void }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <button
        onClick={onBack}
        aria-label="Voltar"
        className="text-white/50 hover:text-white p-1 -ml-1 transition shrink-0"
      >
        <ChevronLeft size={22} />
      </button>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-teal rounded-full"
          initial={false}
          animate={{ width: `${(step / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
      <span className="text-white/50 text-xs font-bold shrink-0 tabular-nums">
        {step}/{total}
      </span>
    </div>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-white/80 font-bold text-sm uppercase tracking-wide mb-3 ${className}`}>
      {children}
    </p>
  );
}

function ChipRow({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const sel = value === o;
        return (
          <button
            key={o}
            onClick={() => onChange(sel ? "" : o)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition border ${
              sel
                ? "bg-teal text-white border-teal shadow"
                : "bg-white/10 text-white/80 border-white/15 hover:bg-white/15"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
