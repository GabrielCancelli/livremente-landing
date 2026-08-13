import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageView } from "@/lib/metaPixel";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Download from "@/pages/Download";
import Cores from "@/pages/Cores";
import ExcluirConta from "@/pages/ExcluirConta";
import NotFound from "@/pages/NotFound";

// Focused conversion pages render without the global navbar/footer
const BARE_ROUTES = ["/baixar", "/cores"];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fires a Meta Pixel PageView on initial load and every SPA route change.
function PixelPageView() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView();
  }, [pathname]);
  return null;
}

// The cookie banner mentions the brand, so the neutral color survey hides it.
// Safe for LGPD: the pixel is opt-in, so with no banner a new visitor never
// grants consent and nothing is tracked (the survey stores data first-party).
function ConsentGate() {
  const { pathname } = useLocation();
  if (pathname === "/cores") return null;
  return <CookieConsent />;
}

function Layout() {
  const { pathname } = useLocation();
  const bare = BARE_ROUTES.includes(pathname);

  return (
    <>
      {!bare && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/excluir-conta" element={<ExcluirConta />} />
        <Route path="/baixar" element={<Download />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!bare && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PixelPageView />
      <Layout />
      <ConsentGate />
    </BrowserRouter>
  );
}
