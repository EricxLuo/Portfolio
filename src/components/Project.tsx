import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Github, Play } from "lucide-react";
import { MouseEvent, useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repositoryUrl: string;
  reverse?: boolean;
  hideVisual?: boolean;
}

export default function Project({ title, description, tags, demoUrl, repositoryUrl, reverse, hideVisual }: ProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 24 });
  const shineX = useTransform(rotateY, [-5, 5], [35, 65]);
  const shineY = useTransform(rotateX, [-5, 5], [35, 65]);
  const videoId = demoUrl?.match(/(?:v=|youtu\.be\/)([^?&/]+)/)?.[1];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : undefined;
  const previewUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : undefined;

  const handlePointer = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rotateYRaw.set(((event.clientX - rect.left) / rect.width - 0.5) * 7);
    rotateXRaw.set(((event.clientY - rect.top) / rect.height - 0.5) * -7);
  };

  const resetTilt = () => { rotateXRaw.set(0); rotateYRaw.set(0); };

  return (
    <motion.article initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className={`project-grid grid items-center gap-10 border-b border-black/20 py-24 lg:gap-16 ${hideVisual ? "min-h-[65vh]" : "min-h-[90vh] lg:grid-cols-2"}`}>
      <div className={`${reverse ? "lg:order-2" : ""} ${hideVisual ? "max-w-5xl" : ""}`}>
        <div className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-black/45">Featured project</div>
        <h3 className="font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.065em] sm:text-7xl xl:text-8xl">{title}</h3>
        <p className="mt-8 max-w-xl text-xl leading-relaxed tracking-[-0.02em] text-black/60 md:text-2xl">{description}</p>
        <div className="mt-8 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}</div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={repositoryUrl} target="_blank" rel="noreferrer" className="project-link"><Github size={17} /> Source <ArrowUpRight size={16} /></a>
          {demoUrl && <a href={demoUrl} target="_blank" rel="noreferrer" className="project-link"><Play size={16} /> Demo <ArrowUpRight size={16} /></a>}
        </div>
      </div>
      {!hideVisual && <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }} onMouseMove={handlePointer} onMouseLeave={resetTilt} className={`project-visual relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-black/15 bg-[#dedbd3] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.1)] ${reverse ? "lg:order-1" : ""}`}>
        <motion.div className="project-shine" style={{ left: shineX, top: shineY }} />
        <div className="absolute left-5 top-5 z-20 rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Eric Luo®</div>
        {isPlaying ? (
          <iframe className="relative z-10 h-full w-full rounded-[1.1rem] bg-black" src={embedUrl} title={`${title} demo`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <button type="button" onClick={() => setIsPlaying(true)} className="group relative h-full w-full overflow-hidden rounded-[1.1rem] bg-black text-left" aria-label={`Play ${title} demo`}>
            <img src={previewUrl} alt="" className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
            <span className="absolute bottom-5 right-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-500 group-hover:scale-110"><Play fill="currentColor" size={24} /></span>
          </button>
        )}
      </motion.div>}
    </motion.article>
  );
}
