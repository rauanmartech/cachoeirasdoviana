import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const SEOSection = () => {
  return (
    <section className="py-16 px-6 bg-[#fdfbf6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-forest-light" />
            <span className="text-forest-light font-body text-sm tracking-[0.15em] uppercase font-medium">
              Localização
            </span>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Localizado em <strong className="text-foreground">Rio Acima</strong>, na região metropolitana de
            Belo Horizonte, o Circuito de Cachoeiras está a poucos minutos da capital mineira —
            ideal para um dia de imersão na natureza sem longas viagens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSection;
