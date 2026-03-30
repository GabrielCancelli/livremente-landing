import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import CountdownTimer from "./CountdownTimer";
import { Home, BookOpen, Users, User } from "lucide-react";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm md:text-base text-teal font-semibold tracking-widest uppercase">
              Saúde Mental Reimaginada
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-heading)] leading-tight">
              Conquiste{" "}
              <span className="gradient-text">liberdade mental</span>
            </h1>
            <p className="text-light-slate text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ferramentas inteligentes, comunidade real e progresso gamificado.
              Tudo o que você precisa para quebrar hábitos prejudiciais e
              fortalecer sua mente.
            </p>
          </div>
        }
      >
        {/* App screenshot placeholder with real icon */}
        <div className="w-full h-full bg-gradient-to-b from-deep-blue to-graphite flex flex-col items-center justify-center p-4 gap-4">
          {/* Fake status bar */}
          <div className="w-full flex justify-between items-center px-2 pt-4">
            <span className="text-[10px] text-light-slate">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-2 rounded-sm bg-light-slate/50" />
              <div className="w-3 h-2 rounded-sm bg-light-slate/50" />
              <div className="w-5 h-2 rounded-sm bg-teal" />
            </div>
          </div>

          {/* Fake app content */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-2xl overflow-hidden">
              <img
                src="/icon.png"
                alt="LivreMente"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-surface">
              Dia 7 — Beija-flor
            </p>
            <div className="w-32 h-2 rounded-full bg-graphite-light overflow-hidden">
              <div className="w-1/4 h-full bg-teal rounded-full" />
            </div>
            <p className="text-[10px] text-light-slate">
              Brain Rewiring: 8%
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 w-full max-w-[200px]">
              {["Devocional", "Comunidade", "Exercícios", "Streaks"].map(
                (item) => (
                  <div
                    key={item}
                    className="glass rounded-xl p-2 text-center"
                  >
                    <span className="text-[9px] text-surface/80">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Fake tab bar with Lucide icons */}
          <div className="w-full flex justify-around py-2 border-t border-glass-border">
            {[
              { icon: Home, active: true },
              { icon: BookOpen, active: false },
              { icon: Users, active: false },
              { icon: User, active: false },
            ].map((tab, i) => (
              <tab.icon
                key={i}
                size={18}
                className={`${tab.active ? "text-teal" : "text-light-slate/40"}`}
              />
            ))}
          </div>
        </div>
      </ContainerScroll>

      {/* Countdown below the phone */}
      <div className="mt-4 md:mt-8 relative z-10">
        <CountdownTimer />
      </div>
    </div>
  );
}
