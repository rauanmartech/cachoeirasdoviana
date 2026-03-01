import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import waterfallVideo from "@/assets/hero-waterfall-video.mp4";
import streamVideo from "@/assets/hero-stream-video.mp4";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const waterfallRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<HTMLVideoElement>(null);
  const videoRefs = [waterfallRef, streamRef];
  const videos = [waterfallVideo, streamVideo];

  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const currentVideo = videoRefs[activeVideo].current;
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(error => console.log("Video play failed:", error));
    }
  }, [activeVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {videos.map((src, index) => (
        <video
          key={src}
          ref={videoRefs[index]}
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ${activeVideo === index ? "opacity-100" : "opacity-0"
            }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-forest/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <TreePine className="w-5 h-5 text-sand" />
            <span className="text-sand/80 font-body text-sm tracking-[0.2em] uppercase">
              Rio Acima – MG
            </span>
            <TreePine className="w-5 h-5 text-sand" />
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Viva a Experiência do <span className="text-sand italic">Circuito de Cachoeiras</span> em Rio Acima
        </motion.h1>

        <motion.p
          className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Natureza preservada, trilhas estruturadas e uma nova fase de organização.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6 group overflow-hidden relative" asChild>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
              <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Como Chegar
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 group" asChild>
            <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-sand/40 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-sand/40 to-transparent"
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
};

export default HeroSection;
