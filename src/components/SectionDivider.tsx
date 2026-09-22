import { motion } from "motion/react";

interface SectionDividerProps {
  label: string;
  index?: string;
}

export default function SectionDivider({ label, index }: SectionDividerProps) {
  return (
    <div className="flex min-h-[24vh] w-full items-end overflow-hidden border-b border-black/20 pb-7 pt-24">
      <div className="flex w-full items-end justify-between gap-6">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl"
        >
          {label}
        </motion.span>
        {index && <span className="pb-1 font-mono text-sm text-black/45">/{index}</span>}
      </div>
    </div>
  );
}
