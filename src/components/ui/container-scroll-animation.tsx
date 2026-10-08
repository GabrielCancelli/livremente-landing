import React from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

const MOBILE_MAX_WIDTH = 768;
// Page scroll (px) over which the phone flattens and the title rises.
const SCROLL_RANGE = [0, 400];

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  // Driven by the page scroll, not by the container's position in the viewport: with a target
  // the range depended on the window height and, on phones and on windows taller than the
  // container, it inverted and the title loaded already pushed up under the fixed navbar.
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = React.useState(
    () => typeof window !== "undefined" && window.innerWidth <= MOBILE_MAX_WIDTH
  );

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    };
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Phones get a flat, static phone: the tilt only reads well with room around it.
  const rotate = useTransform(scrollY, SCROLL_RANGE, isMobile ? [0, 0] : [25, 0]);
  const scale = useTransform(scrollY, SCROLL_RANGE, isMobile ? [1, 1] : [0.8, 1]);
  const translate = useTransform(scrollY, SCROLL_RANGE, isMobile ? [0, 0] : [0, -80]);

  return (
    <div className="md:h-[65rem] flex items-start md:items-center justify-center relative px-4 md:px-6 pt-6 md:p-20">
      <div
        className="md:py-32 w-full relative flex flex-col items-center"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <PhoneCard rotate={rotate} scale={scale}>
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
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="mx-auto mt-10 md:-mt-8 w-[260px] md:w-[320px] relative"
    >
      {children}
    </motion.div>
  );
};
