import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center border-t border-glass-border bg-graphite/50">
      <div className="w-full max-w-6xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="LivreMente"
                loading="lazy"
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-light-slate text-sm max-w-sm leading-relaxed">
              Ferramentas inteligentes, comunidade real e progresso gamificado
              para conquista de liberdade mental.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-surface">Navegação</h4>
            {[
              { to: "/", label: "Home" },
              { to: "/features", label: "Features" },
              { to: "/about", label: "Sobre" },
              { to: "/pricing", label: "Planos" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-light-slate hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-surface">Legal</h4>
            <Link
              to="/privacy"
              className="text-sm text-light-slate hover:text-teal transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/terms"
              className="text-sm text-light-slate hover:text-teal transition-colors"
            >
              Termos de Uso
            </Link>
            <a
              href="mailto:contato@livrementeapp.com"
              className="text-sm text-light-slate hover:text-teal transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-light-slate">
            © {new Date().getFullYear()} LivreMente. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-light-slate">
            <span>Feito com</span>
            <Heart size={12} className="text-alert-red fill-alert-red" />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
