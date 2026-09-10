import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import SectionDivider from "./SectionDivider";

const videoSource = "/videos/editing%20collage.mp4";

export default function HobbyVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const revealProgress = useSpring(
    useTransform(scrollYProgress, [0.08, 0.42], [0.08, 1]),
    { stiffness: 90, damping: 24 }
  );
  const videoScale = useTransform(revealProgress, [0.08, 1], [0.96, 1]);
  const videoRadius = useTransform(revealProgress, [0.08, 1], ["2rem", "0rem"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch((error: unknown) => {
        console.warn("The hobbies video could not autoplay.", error);
      });
    };

    playVideo();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playVideo();
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative left-1/2 w-screen -translate-x-1/2">
      <SectionDivider label="Hobbies" />
      <div className="relative h-[150vh]">
        <div className="sticky top-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ clipPath: useTransform(revealProgress, (value) => `inset(0 ${(1 - value) * 100}% 0 0)`), scale: videoScale, borderRadius: videoRadius }}
          className="relative h-screen w-screen overflow-hidden bg-black shadow-2xl"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoSource}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video editing hobby showcase"
          >
            Your browser does not support the video tag.
          </video>
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
            <h2 className="mix-blend-difference text-3xl font-medium tracking-tighter text-white md:text-5xl lg:text-7xl">
              Video Editing
            </h2>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
