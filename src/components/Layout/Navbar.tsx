import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/about", label: "Sobre" },
  { to: "/pricing", label: "Planos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-glass-border flex flex-col items-center">
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
              className={`text-sm font-medium transition-colors hover:text-teal ${
                location.pathname === link.to
                  ? "text-teal"
                  : "text-light-slate"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Link
            to="/#countdown"
            className="bg-teal hover:bg-teal-dark text-deep-blue font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-teal/20"
          >
            Baixe em Breve
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-surface p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-glass-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-teal ${
                  location.pathname === link.to
                    ? "text-teal"
                    : "text-light-slate"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#countdown"
              onClick={() => setOpen(false)}
              className="bg-teal hover:bg-teal-dark text-deep-blue font-semibold text-sm px-5 py-2.5 rounded-xl text-center mt-2 transition-all"
            >
              Baixe em Breve
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
