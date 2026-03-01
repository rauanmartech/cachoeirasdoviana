import { useState } from "react";
import { Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, alt: "Cachoeira com piscina natural cristalina", caption: "Piscina Natural" },
  { src: gallery2, alt: "Cachoeira em meio à mata fechada", caption: "Cachoeira da Mata" },
  { src: gallery3, alt: "Rio serpenteando pelo vale verde", caption: "Vale do Rio" },
  { src: gallery4, alt: "Cachoeira alta entre paredões rochosos", caption: "Cachoeira do Paredão" },
  { src: gallery5, alt: "Águas cristalinas sobre pedras coloridas", caption: "Águas Cristalinas" },
  { src: gallery6, alt: "Vista panorâmica do vale com cachoeiras ao pôr do sol", caption: "Mirante do Circuito" },
];

const FotografiasSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-forest-light" />
            <span className="text-forest-light font-body text-sm tracking-[0.15em] uppercase font-medium">
              Galeria
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Fotografias do Circuito
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Registros das paisagens que esperam por você em Rio Acima.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative overflow-hidden aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ${i % 2 === 0 ? "leaf-shape-1" : "leaf-shape-2"
                }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-body text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-[60]"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].alt}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl leaf-shape-1 border-4 border-white/10"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-primary-foreground/90 font-display text-2xl"
              >
                {photos[selected].caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FotografiasSection;
