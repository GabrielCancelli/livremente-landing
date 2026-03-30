import React, { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.75, 0.95] : [0.8, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      className="h-[55rem] md:h-[65rem] flex items-center justify-center relative px-6 py-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-32 w-full relative flex flex-col items-center"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <PhoneCard rotate={rotate} translate={translate} scale={scale}>
          {children}
        </PhoneCard>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="w-full max-w-3xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const PhoneCard = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="mx-auto mt-4 md:-mt-8 w-[280px] h-[580px] md:w-[320px] md:h-[660px] relative"
    >
      {/* Phone frame */}
      <div className="w-full h-full rounded-[48px] bg-[#1a1a1a] p-[6px] shadow-[0_0_0_2px_#333,0_20px_60px_rgba(0,0,0,0.5)] glow-teal">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[28px] bg-[#1a1a1a] rounded-b-2xl flex items-center justify-center">
          <div className="w-[60px] h-[4px] bg-[#333] rounded-full mt-1" />
        </div>

        {/* Screen */}
        <div className="w-full h-full overflow-hidden rounded-[42px] bg-deep-blue">
          {children}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-20 w-[120px] h-[4px] bg-[#555] rounded-full" />
    </motion.div>
  );
};
