import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTAFinalSection = () => {
  return (
    <section className="py-24 px-6 bg-earth text-earth-foreground relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-sand/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-forest/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Faça Parte da Nova Fase do Circuito
          </h2>
          <p className="text-earth-foreground/80 text-lg mb-10 leading-relaxed">
            Planeje sua visita e viva uma experiência única nas cachoeiras de Rio Acima.
            Organização, segurança e natureza em um só lugar.
          </p>
          <Button variant="hero" size="lg" className="text-base px-12 py-7 text-earth group" asChild>
            <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
              Planejar Minha Visita
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
