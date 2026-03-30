import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date("2026-04-04T00:00:00-03:00").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, LAUNCH_DATE - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-20 md:w-20 md:h-24 glass rounded-xl flex items-center justify-center overflow-hidden">
        <span className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-surface tabular-nums">
          {display}
        </span>
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-deep-blue/30" />
      </div>
      <span className="text-xs md:text-sm text-light-slate uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-light-slate text-sm md:text-base tracking-wide">
        <Clock size={16} className="text-teal" />
        <span>Lançamento em</span>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <FlipUnit value={timeLeft.days} label="Dias" />
        <span className="text-2xl text-teal font-bold mt-[-1.5rem]">:</span>
        <FlipUnit value={timeLeft.hours} label="Horas" />
        <span className="text-2xl text-teal font-bold mt-[-1.5rem]">:</span>
        <FlipUnit value={timeLeft.minutes} label="Min" />
        <span className="text-2xl text-teal font-bold mt-[-1.5rem]">:</span>
        <FlipUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}
