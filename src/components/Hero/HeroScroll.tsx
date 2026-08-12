import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradientText from "@/components/ui/GradientText";
import CountdownTimer from "./CountdownTimer";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm md:text-base text-teal font-semibold tracking-widest uppercase">
              Devocional, foco e grupo
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-heading)] leading-tight text-text-main">
              Disciplina que você{" "}
              <GradientText colors={["#0FB3A3", "#0D9E90", "#102A43", "#0FB3A3"]} animationSpeed={6}>não carrega sozinho.</GradientText>
            </h1>
            <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Um devocional por dia, um escudo contra as distrações e um grupo
              que vê a sua perseverança.
            </p>
          </div>
        }
      >
        {/* App screenshot using real image */}
        <div className="w-full h-full bg-[#FDF6EC] flex items-center justify-center relative overflow-hidden">
          <img
            src="/mockup2-home.png"
            alt="A tela inicial do LivreMente"
            className="w-full h-full object-cover"
          />
        </div>
      </ContainerScroll>

      {/* Countdown below the phone */}
      <div className="mt-4 md:mt-8 relative z-10">
        <CountdownTimer />
      </div>
    </div>
  );
}
