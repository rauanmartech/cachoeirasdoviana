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
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
              className="flex items-start gap-4 bg-primary-foreground/5 rounded-lg p-5 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <item.icon className="w-6 h-6 text-sand shrink-0 mt-0.5" />
              <p className="text-primary-foreground/90 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button variant="hero" size="lg" className="text-base px-10 py-6" asChild>
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
