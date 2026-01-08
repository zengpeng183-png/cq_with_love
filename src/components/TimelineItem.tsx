import type { DiaryEntry } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { toast } from "sonner";

interface TimelineItemProps {
  entry: DiaryEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!entry.mediaSrc) {
      toast.info("这是一个视频演示位。请在代码中替换为您自己的视频链接。", {
        description: "This is a video placeholder. Please replace with your own video source."
      });
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 relative w-full max-w-5xl mx-auto px-4",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Date Badge - Mobile Only */}
      <div className="md:hidden self-start bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-serif mb-2">
        {entry.date}
      </div>

      {/* Media Side */}
      <div className="w-full md:w-1/2 relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] aspect-[4/3] bg-muted">
          {entry.mediaType === 'video' ? (
            <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
              <video
                ref={videoRef}
                src={entry.mediaSrc}
                poster={entry.mediaPoster}
                className="w-full h-full object-cover"
                playsInline
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <img 
              src={entry.mediaSrc} 
              alt={entry.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          )}
        </div>
        
        {/* Decorative elements */}
        <div className={cn(
          "absolute -bottom-4 -z-10 w-full h-full rounded-2xl border border-primary/20",
          isEven ? "-right-4" : "-left-4"
        )} />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
        <div className="hidden md:block text-primary font-serif italic text-lg opacity-80">
          {entry.date}
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
          {entry.title}
        </h2>
        <div className="w-12 h-1 bg-primary/30 mx-auto md:mx-0 rounded-full" />
        <p className="text-muted-foreground leading-relaxed text-lg font-light">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}
