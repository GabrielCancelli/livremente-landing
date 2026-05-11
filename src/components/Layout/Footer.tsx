import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

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
            {/* App Store Badge */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit border border-white/10"
            >
              <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor" className="shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Disponível na App Store
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-surface">Navegação</h4>
            {[
              { to: "/", label: "Home" },
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
