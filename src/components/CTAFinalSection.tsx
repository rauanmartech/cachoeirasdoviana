import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTAFinalSection = () => {
  return (
    <section className="py-24 px-6 bg-earth text-earth-foreground relative overflow-hidden">
      {/* Decorative leaf elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-sand/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-60 h-60 bg-forest/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            Faça Parte da Nova Fase do Circuito
          </h2>
          <p className="text-earth-foreground/80 text-lg mb-10 leading-relaxed">
            Planeje sua visita e viva uma experiência única nas cachoeiras de Rio Acima.
            Organização, segurança e natureza em um só lugar.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="hero" size="lg" className="text-base px-12 py-7 text-earth group" asChild>
              <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
                Planejar Minha Visita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
