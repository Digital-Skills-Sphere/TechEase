import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import Btn from "../Other Components/Btn";

interface HeroHighlightProps {
  className?: string;
}

export const HeroHighlight: React.FC<HeroHighlightProps> = ({ className }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative py-32 flex flex-col gap-12 items-center bg-white dark:bg-black justify-center w-full group px-16"
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className={cn("relative z-20", className)}>
          <div className="text-5xl">Ready to Work Together?</div>
        </div>
        <div className="text-center text-[18px] text-paraColor leading-[35px]">
          An interior design agency can create content that showcases its work,
          highlights design trends, and provides educational resources for
          clients and followers. Some potential content ideas for an interior
          design agency. An interior design agency can create content that
          showcases its work
        </div>
        <Btn heading="Contact Us" />
      </div>
    </div>
  );
};

export const Highlight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    ></motion.span>
  );
};
