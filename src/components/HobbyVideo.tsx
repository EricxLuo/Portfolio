import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const videoSource = "./videos/editing-collage.mp4";

export default function HobbyVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const clip = useTransform(progress, [0.04, 0.24], [42, 0]);
  const scale = useTransform(progress, [0.04, 0.45, 0.82], [0.88, 1, 1.06]);
  const titleY = useTransform(progress, [0.18, 0.58], [80, -80]);
  const titleOpacity = useTransform(progress, [0.12, 0.3, 0.67, 0.82], [0, 1, 1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => undefined);
    play();
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && play(), { threshold: 0.1 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[190vh] bg-[#121212] text-white">
      <div className="absolute left-5 right-5 top-10 z-20 flex items-end justify-between border-b border-white/25 pb-5 md:left-10 md:right-10 lg:left-16 lg:right-16">
        <h2 className="font-display text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Hobbies</h2>
        <span className="font-mono text-sm text-white/45">/03</span>
      </div>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ clipPath: useTransform(clip, (value) => `inset(${value}% ${value * 0.65}% round ${Math.max(value / 2, 0)}px)`), scale }} className="absolute inset-0 overflow-hidden bg-black">
          <video ref={videoRef} className="h-full w-full object-cover" src={videoSource} preload="metadata" autoPlay loop muted playsInline aria-label="A montage of Eric's video editing work" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.5),transparent_35%,rgba(0,0,0,.65))]" />
        </motion.div>
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 px-5 text-center">
          <h3 className="font-display mix-blend-difference text-[8.5vw] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white opacity-45 md:text-[6vw]">Video<br />editing</h3>
        </motion.div>
      </div>
    </section>
  );
}
