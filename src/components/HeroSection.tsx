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
      {/* Simplified video rendering */}
      <div className="absolute inset-0">
        <video
          src={videos[0]}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-forest/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <TreePine className="w-5 h-5 text-sand" />
            <span className="text-sand/80 font-body text-sm tracking-[0.2em] uppercase">
              Rio Acima – MG
            </span>
            <TreePine className="w-5 h-5 text-sand" />
          </div>
        </motion.div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
          Viva a Experiência do <span className="text-sand italic">Circuito de Cachoeiras</span> em Rio Acima
        </h1>

        <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body font-light leading-relaxed">
          Natureza preservada, trilhas estruturadas e uma nova fase de organização.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Como Chegar
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
