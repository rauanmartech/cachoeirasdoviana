import { Mountain, Compass, TreePine, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import trailImg from "@/assets/trail-path.jpg";

const cards = [
  { icon: Mountain, title: "Trilhas e Níveis", desc: "Percursos para todos os profiles, do iniciante ao aventureiro, com sinalização clara em cada etapa." },
  { icon: Compass, title: "Estrutura e Apoio", desc: "Pontos de apoio estratégicos ao longo do circuito para sua comodidade e segurança." },
  { icon: TreePine, title: "Contato com a Natureza", desc: "Mergulhe em paisagens preservadas, cachoeiras cristalinas e a biodiversidade da Mata Atlântica." },
  { icon: BookOpen, title: "Orientações de Visitação", desc: "Informações claras sobre horários, regras e dicas para aproveitar ao máximo sua visita." },
];

const ExperienciaSection = () => {
  return (
    <section className="py-24 px-6 bg-[#fdfbf6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-forest-light font-body text-sm tracking-[0.15em] uppercase font-medium">
              Descubra
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mt-3 mb-6">
              A Experiência
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada trilha do circuito foi pensada para oferecer uma imersão segura e autêntica
              na natureza. Desde percursos leves até aventuras mais desafiadoras, o Circuito de
              Cachoeiras de Rio Acima oferece algo especial para cada visitante.
            </p>
          </motion.div>
          <motion.div
            className="leaf-shape-1 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.img
              src={trailImg}
              alt="Trilha estruturada no Circuito de Cachoeiras de Rio Acima"
              className="w-full h-80 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-background leaf-shape-2 p-6 border border-border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -5, borderColor: "var(--forest-light)" }}
            >
              <card.icon className="w-8 h-8 text-forest-light mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienciaSection;
