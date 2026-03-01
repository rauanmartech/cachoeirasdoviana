import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NovaFaseSection from "@/components/NovaFaseSection";
import ExperienciaSection from "@/components/ExperienciaSection";
import FotografiasSection from "@/components/FotografiasSection";
import GruposSection from "@/components/GruposSection";
import SegurancaSection from "@/components/SegurancaSection";
import SEOSection from "@/components/SEOSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const DecorativeBranch = ({ className, rotate = 0, color = "var(--forest-light)" }: { className?: string, rotate?: number, color?: string }) => (
  <motion.div
    className={`absolute pointer-events-none z-40 ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 0.8, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    style={{ rotate: `${rotate}deg` }}
  >
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft colored circles like in reference */}
      <circle cx="280" cy="120" r="80" fill={color} fillOpacity="0.15" />
      <circle cx="80" cy="300" r="40" fill="var(--earth)" fillOpacity="0.15" />

      {/* Line art branch inspirado na referência (more visible) */}
      <path
        d="M150 380C150 380 160 250 250 100C280 50 320 20 320 20"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-forest/60"
      />

      {/* Leaves along the stem (more visible) */}
      {[
        { t: "translate(180, 300) rotate(-40)", s: 0.8 },
        { t: "translate(140, 240) rotate(-60)", s: 1 },
        { t: "translate(210, 200) rotate(20)", s: 0.9 },
        { t: "translate(180, 140) rotate(-45)", s: 1.1 },
        { t: "translate(250, 110) rotate(30)", s: 0.85 },
        { t: "translate(230, 60) rotate(-35)", s: 0.7 }
      ].map((pos, i) => (
        <path
          key={i}
          transform={pos.t}
          d="M0 0C30 -20 70 -10 80 30C50 50 10 40 0 0Z"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-forest/60"
          style={{ scale: pos.s }}
        />
      ))}
    </svg>
  </motion.div>
);

const Index = () => {
  return (
    <>
      <Header />
      <main className="relative bg-background">
        {/* Simplified layout for better performance */}
        <div id="hero" className="relative h-screen md:sticky md:top-0 z-0 overflow-hidden">
          <HeroSection />
        </div>

        {/* Removed complex overlaps and decorative elements on mobile */}
        <div id="nova-fase" className="relative z-10 bg-background shadow-none md:shadow-[0_-40px_100px_rgba(0,0,0,0.1)] md:rounded-t-[120px] overflow-hidden">
          <div className="relative pt-16 md:pt-24 pb-12 px-6">
            <DecorativeBranch className="hidden md:block top-0 -left-16" rotate={15} />
            <DecorativeBranch className="hidden md:block top-10 -right-16" rotate={-160} />
            <NovaFaseSection />
          </div>
        </div>

        <div id="experiencia" className="relative z-20 bg-background md:bg-[#fdfbf6]">
          <ExperienciaSection />
        </div>

        <div id="fotografias" className="relative z-20 bg-background">
          <FotografiasSection />
        </div>

        <div id="grupos" className="relative z-20 bg-primary">
          <GruposSection />
        </div>

        <div id="seguranca" className="relative z-20 bg-background">
          <SegurancaSection />
        </div>

        <div className="relative z-20 bg-background">
          <SEOSection />
          <CTAFinalSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
