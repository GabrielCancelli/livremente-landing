import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackAppStoreClick } from "@/lib/metaPixel";

const APP_STORE_URL = "https://apps.apple.com/br/app/livremente/id6759587050";

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
        <div className="hidden md:block">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAppStoreClick("navbar")}
            className="bg-white hover:bg-slate-100 text-deep-blue font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            Baixar na App Store
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
              <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Baixar na App Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
