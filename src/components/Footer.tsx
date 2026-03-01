import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-forest py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Logo Circuito de Cachoeiras"
              className="w-10 h-10 object-contain logo-sand-overlay"
            />
            <span className="font-display text-primary-foreground">Cachoeiras Do Viana</span>
          </div>
          <p className="text-primary-foreground/50 text-sm font-body text-center">
            Rio Acima – MG · Região Metropolitana de Belo Horizonte
          </p>
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
