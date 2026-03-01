import { ShieldCheck, Signpost, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  { icon: ShieldCheck, title: "Trilhas Sinalizadas", desc: "Toda a extensão do circuito conta com sinalização clara, facilitando a navegação e garantindo segurança." },
  { icon: Signpost, title: "Orientações Claras", desc: "Informações acessíveis sobre regras, dicas e cuidados para uma visita tranquila e consciente." },
  { icon: Leaf, title: "Compromisso com a Preservação", desc: "Ações contínuas de conservação ambiental para manter a beleza natural do circuito para as futuras gerações." },
];

const SegurancaSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="text-forest-light font-body text-sm tracking-[0.15em] uppercase font-medium">
            Confiança
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-3 mb-6">
            Segurança e Organização
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Sua segurança é prioridade. Cada aspecto do circuito foi estruturado
            para oferecer tranquilidade e confiança durante toda a sua visita.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto mb-6 group-hover:bg-sand/80 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                <point.icon className="w-8 h-8 text-earth group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegurancaSection;
