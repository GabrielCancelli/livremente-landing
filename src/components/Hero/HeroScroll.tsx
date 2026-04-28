import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import CountdownTimer from "./CountdownTimer";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm md:text-base text-teal font-semibold tracking-widest uppercase">
              Saúde Mental Reimaginada
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-heading)] leading-tight text-text-main">
              Liberte-se.{" "}
              <span className="gradient-text">De verdade.</span>
            </h1>
            <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ferramentas inteligentes, comunidade real e progresso gamificado.
              Tudo o que você precisa para vencer o vício, quebrar hábitos
              prejudiciais e reconquistar o controle da sua mente.
            </p>
          </div>
        }
      >
        {/* App screenshot using real image */}
        <div className="w-full h-full bg-deep-blue flex items-center justify-center relative overflow-hidden">
          <img 
            src="/mockup-home-dark.png" 
            alt="LivreMente App" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('p-8', 'text-white/50', 'text-center');
              e.currentTarget.parentElement!.innerHTML = '<span class="text-sm border border-white/20 p-2 rounded">/mockup-home-dark.png (Faltando)</span>';
            }}
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
