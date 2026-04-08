import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function WaitlistCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");
    setErrorMsg("");

    if (!supabase) {
      setErrorMsg("Sistema indisponível no momento. Tente novamente mais tarde.");
      setStatus("error");
      return;
    }

    const { error } = await supabase.from("waitlist").insert([
      { name, email }
    ]);

    if (error) {
      console.error(error);
      if (error.code === '23505') {
        setErrorMsg("Este e-mail já está na nossa lista de espera!");
      } else {
        setErrorMsg("Ocorreu um erro ao cadastrar. Tente novamente.");
      }
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
  };

  return (
    <section id="waitlist" className="w-full flex flex-col items-center px-4 md:px-8 py-24 bg-surface-bg mt-12">
      <div className="w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal/30 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal font-semibold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm border border-white/10">
              Acesso Antecipado
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight font-[family-name:var(--font-heading)]">
              Pronto para virar o jogo?
            </h2>
            <p className="text-white/70 text-lg mb-10 font-medium">
              Seja o primeiro a descobrir quando o LivreMente for lançado. Inscreva-se na lista de espera e receba as atualizações exclusivas no seu e-mail.
            </p>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="bg-white/10 backdrop-blur-md border border-teal/30 rounded-2xl p-6 w-full max-w-md flex flex-col items-center gap-3"
              >
                <CheckCircle2 size={40} className="text-teal" />
                <h3 className="text-white text-xl font-bold font-[family-name:var(--font-heading)]">Você está na lista!</h3>
                <p className="text-white/70 text-sm font-medium">Fique de olho no seu e-mail para novidades.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Seu primeiro nome" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent disabled:opacity-50 transition font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent disabled:opacity-50 transition font-medium"
                />
                
                {status === "error" && (
                  <div className="bg-red-500/20 text-red-100 border border-red-500/30 p-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-teal hover:bg-teal-light text-deep-blue font-bold px-5 py-4 rounded-xl transition shadow-lg disabled:opacity-70 mt-2 flex justify-center uppercase tracking-wide text-sm"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-deep-blue border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Quero ser notificado"
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
