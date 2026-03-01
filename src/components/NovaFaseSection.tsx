import { Shield, Users, Star, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Shield, title: "Organização", desc: "Gestão profissional com processos estruturados para garantir a melhor experiência." },
  { icon: Users, title: "Segurança", desc: "Equipe preparada e trilhas sinalizadas para a tranquilidade de todos os visitantes." },
  { icon: Star, title: "Experiência", desc: "Cada detalhe pensado para proporcionar momentos memoráveis em contato com a natureza." },
  { icon: Leaf, title: "Preservação", desc: "Compromisso com a sustentabilidade e o cuidado com o meio ambiente." },
];

const NovaFaseSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="text-forest-light font-body text-sm tracking-[0.15em] uppercase font-medium">
            Uma nova gestão
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mt-3 mb-6">
            A Nova Fase do Circuito
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            O Circuito de Cachoeiras de Rio Acima iniciou uma nova fase sob uma gestão focada em
            profissionalismo, segurança e respeito à natureza. Nosso compromisso é transformar cada
            visita em uma experiência organizada e inesquecível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-card leaf-shape-1 p-8 text-center border border-border transition-all duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NovaFaseSection;
