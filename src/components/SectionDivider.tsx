import { motion } from "motion/react";

interface SectionDividerProps {
  label: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="relative left-1/2 flex h-[18vh] w-screen -translate-x-1/2 items-center overflow-hidden">
      <div className="flex w-full items-center gap-6 px-6 md:gap-10 md:px-12 lg:px-20">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 origin-right bg-black"
        />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-medium tracking-tighter md:text-6xl"
        >
          {label}
        </motion.h2>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 origin-left bg-black"
        />
      </div>
    </div>
  );
}
