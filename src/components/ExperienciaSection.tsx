import { useState, useRef } from "react";
import { Mountain, Compass, TreePine, BookOpen, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import experienceVideo from "@/assets/Força.mp4";

const cards = [
  { icon: Mountain, title: "Trilhas e Níveis", desc: "Percursos para todos os profiles, do iniciante ao aventureiro, com sinalização clara em cada etapa." },
  { icon: Compass, title: "Estrutura e Apoio", desc: "Pontos de apoio estratégicos ao longo do circuito para sua comodidade e segurança." },
  { icon: TreePine, title: "Contato com a Natureza", desc: "Mergulhe em paisagens preservadas, cachoeiras cristalinas e a biodiversidade da Mata Atlântica." },
  { icon: BookOpen, title: "Orientações de Visitação", desc: "Informações claras sobre horários, regras e dicas para aproveitar ao máximo sua visita." },
];

const ExperienciaSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
      if (value > 0) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

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
            className="leaf-shape-1 overflow-hidden shadow-2xl relative group"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <video
              ref={videoRef}
              src={experienceVideo}
              className="w-full aspect-video object-contain bg-black cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              onClick={togglePlay}
            />

            {/* Custom Controls Overlay */}
            <div
              className={`absolute inset-0 bg-black/20 flex flex-col justify-end p-6 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
            >
              <div className="flex items-center justify-between pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 active:scale-95 transition-all shadow-lg border border-white/30"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="text-white fill-white w-6 h-6" />
                  ) : (
                    <Play className="text-white fill-white w-6 h-6 ml-1" />
                  )}
                </button>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-sand transition-colors outline-none"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex items-center group/volume relative h-6">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1 bg-white/30 rounded-full appearance-none cursor-pointer accent-white transition-all hover:bg-white/50"
                      style={{
                        background: `linear-gradient(to right, white ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.3) ${(isMuted ? 0 : volume) * 100}%)`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
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
