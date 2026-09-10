import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  hasVideo?: boolean;
  demoUrl?: string;
  repositoryUrl: string;
}

export default function Project({ title, description, tags, hasVideo, demoUrl, repositoryUrl }: ProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = demoUrl
    ?.replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/")
    .split("?")[0];
  const videoId = demoUrl?.match(/(?:v=|youtu\.be\/)([^?&/]+)/)?.[1];
  const previewUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : undefined;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-15%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen flex flex-col justify-center w-full py-24"
    >
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-tight -ml-1 md:-ml-2">{title}</h2>
      <div className="mb-8 flex flex-wrap gap-6 text-lg text-gray-500">
        <a href={repositoryUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-black">
          View on GitHub ↗
        </a>
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-black">
            Watch demo ↗
          </a>
        )}
      </div>
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-10 max-w-4xl tracking-tight">
        {description}
      </p>
      
      {tags && (
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-2 bg-gray-100 text-black text-sm md:text-base font-medium tracking-wide rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {hasVideo && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-5xl aspect-video bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-200/50 shadow-sm relative group cursor-pointer" 
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              className="h-full w-full bg-black"
              src={embedUrl}
              title={`${title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center text-gray-400 transition-colors group-hover:bg-gray-100/50"
              style={previewUrl ? { backgroundImage: `url(${previewUrl})` } : undefined}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                <Play size={40} className="text-black ml-2 md:w-12 md:h-12" fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-medium tracking-wide text-white drop-shadow-md">Play Demo</span>
            </div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
}
