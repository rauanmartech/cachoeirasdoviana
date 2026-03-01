import logoImg from "@/assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-forest/80 backdrop-blur-md border-b border-primary-foreground/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logoImg}
            alt="Logo Circuito de Cachoeiras"
            className="w-10 h-10 object-contain logo-sand-overlay"
          />
          <span className="font-display text-lg text-primary-foreground tracking-wide">
            Cachoeiras Do Viana
          </span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Nova Fase", href: "#nova-fase" },
            { label: "Experiência", href: "#experiencia" },
            { label: "Fotos", href: "#fotografias" },
            { label: "Grupos", href: "#grupos" },
            { label: "Segurança", href: "#seguranca" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors relative group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sand transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        <motion.a
          href="https://wa.me/5531999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sand text-earth px-4 py-2 rounded-md text-sm font-body font-semibold hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          WhatsApp
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
