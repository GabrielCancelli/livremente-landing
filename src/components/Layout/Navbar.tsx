import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackAppStoreClick, trackPlayStoreClick } from "@/lib/metaPixel";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { AppleIcon, AndroidIcon } from "@/components/ui/StoreIcons";

const links = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/pricing", label: "Planos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-blue shadow-lg border-b border-white/10 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo — real asset */}
        <Link to="/" className="flex items-center gap-0 group shrink-0">
          <img
            src="/logo.png"
            alt="LivreMente"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.to
                  ? "text-teal"
                  : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAppStoreClick("navbar")}
            className="bg-white hover:bg-slate-100 text-deep-blue font-semibold text-sm px-4 py-2.5 rounded-full transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <AppleIcon size={16} />
            App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPlayStoreClick("navbar")}
            className="bg-teal hover:bg-teal-dark text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <AndroidIcon size={18} />
            Google Play
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden w-full bg-deep-blue border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-white ${
                  location.pathname === link.to
                    ? "text-teal"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setOpen(false);
                trackAppStoreClick("navbar_mobile");
              }}
              className="bg-white hover:bg-slate-100 text-deep-blue font-semibold text-sm px-5 py-2.5 rounded-full text-center mt-2 transition-all inline-flex items-center justify-center gap-2"
            >
              <AppleIcon size={16} />
              Baixar na App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setOpen(false);
                trackPlayStoreClick("navbar_mobile");
              }}
              className="bg-teal hover:bg-teal-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full text-center transition-all inline-flex items-center justify-center gap-2"
            >
              <AndroidIcon size={18} />
              Baixar na Google Play
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
