import { Users, CalendarCheck, MapPinned, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const items = [
  { icon: Users, text: "Organização para excursões e grupos de todos os tamanhos" },
  { icon: CalendarCheck, text: "Atendimento estruturado com planejamento prévio" },
  { icon: MapPinned, text: "Espaços preparados para receber grupos com conforto" },
  { icon: ClipboardList, text: "Orientações personalizadas para cada tipo de visita" },
];

const GruposSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="text-primary-foreground/60 font-body text-sm tracking-[0.15em] uppercase font-medium">
            Para grupos
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6">
            Grupos e Excursões
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Oferecemos atendimento especializado para grupos, escolas e excursões.
            Planeje sua visita com antecedência e garanta uma experiência organizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          {items.map((item, index) => (
            <motion.div
              key={item.text}
              className="flex items-start gap-4 bg-primary-foreground/5 rounded-lg p-5 hover:bg-primary-foreground/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <item.icon className="w-6 h-6 text-sand shrink-0 mt-0.5" />
              <p className="text-primary-foreground/90 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Button variant="hero" size="lg" className="text-base px-10 py-6 hover:shadow-[0_0_20px_rgba(234,226,210,0.3)] transition-all" asChild>
            <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
              Organize sua Visita em Grupo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GruposSection;
