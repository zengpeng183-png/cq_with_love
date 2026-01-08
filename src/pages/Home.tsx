import { diaryData } from "@/data/diary";
import TimelineItem from "@/components/TimelineItem";
import heroImg from "@/assets/hero.jpg";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-4 space-y-6 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg mb-4"
          >
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span className="text-sm font-serif tracking-widest uppercase text-gray-800">Love Story</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white drop-shadow-lg tracking-tight"
          >
            晴晴和曾曾的恋爱日记
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto drop-shadow-md"
          >
            记录我们每一个心动的瞬间，从相遇的那一刻起...
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* Main Content / Timeline */}
      <main className="container mx-auto px-4 py-24 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2 z-0" />

        <div className="space-y-12 md:space-y-0 relative z-10">
          {diaryData.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {/* Ending Section */}
        <div className="mt-32 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block p-8 border border-primary/20 rounded-full bg-white/50 backdrop-blur-sm shadow-sm"
          >
            <p className="font-serif text-2xl text-primary italic">"To be continued..."</p>
          </motion.div>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for Us
          </p>
        </div>
      </main>
    </div>
  );
}
