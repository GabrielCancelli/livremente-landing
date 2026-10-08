import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { trackAppStoreClick, trackPlayStoreClick } from "@/lib/metaPixel";
import { openCookiePreferences } from "@/lib/consent";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { AppleIcon, AndroidIcon } from "@/components/ui/StoreIcons";

const linkClass = "text-sm text-white/70 hover:text-teal transition-colors";
const badgeClass =
  "inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit border border-white/10";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-deep-blue">
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
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Devocional diário, foco e um grupo que vê a sua perseverança.
              Disciplina que você não carrega sozinho.
            </p>
            {/* Store badges */}
            <div className="flex flex-wrap gap-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStoreClick("footer")}
                className={badgeClass}
              >
                <AppleIcon size={14} className="shrink-0" />
                Disponível na App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPlayStoreClick("footer")}
                className={badgeClass}
              >
                <AndroidIcon size={16} className="shrink-0" />
                Disponível na Google Play
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Navegação</h4>
            {[
              { to: "/", label: "Início" },
              { to: "/about", label: "Sobre" },
              { to: "/pricing", label: "Planos" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <Link to="/privacy" className={linkClass}>
              Política de Privacidade
            </Link>
            <Link to="/terms" className={linkClass}>
              Termos de Uso
            </Link>
            <a href="mailto:contato@livrementeapp.com" className={linkClass}>
              Contato
            </a>
            <button onClick={openCookiePreferences} className={`${linkClass} text-left`}>
              Preferências de cookies
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} LivreMente. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/50">
            <span>Feito com</span>
            <Heart size={12} className="text-alert-red fill-alert-red" />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
