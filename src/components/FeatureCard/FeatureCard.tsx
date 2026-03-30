import { motion } from "framer-motion";
import type { Feature } from "@/data/features";

export default function FeatureCard({
  feature,
  index,
  variant = "spotlight",
}: {
  feature: Feature;
  index: number;
  variant?: "spotlight" | "compact";
}) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true, margin: "-30px" }}
        className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-teal/30 transition-all duration-300 group cursor-default"
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
          style={{ backgroundColor: feature.color + "15" }}
        >
          <feature.icon size={20} style={{ color: feature.color }} />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold font-[family-name:var(--font-heading)]">
              {feature.title}
            </h3>
            {feature.tag && (
              <span className="text-[10px] font-medium bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                {feature.tag}
              </span>
            )}
          </div>
          <p className="text-sm text-light-slate leading-relaxed">
            {feature.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass rounded-3xl p-8 md:p-9 flex flex-col gap-5 hover:border-teal/30 transition-all duration-300 group cursor-default"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ backgroundColor: feature.color + "18" }}
      >
        <feature.icon size={28} style={{ color: feature.color }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] leading-snug">
          {feature.title}
        </h3>
        <p
          className="text-sm font-medium italic"
          style={{ color: feature.color + "CC" }}
        >
          {feature.tagline}
        </p>
      </div>

      <p className="text-base text-light-slate leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
