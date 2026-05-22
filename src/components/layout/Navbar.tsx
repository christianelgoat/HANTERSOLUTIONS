import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setIsScrolled(true);
      if (latest > previous && latest > 150) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
    } else {
      setIsScrolled(false);
      setHidden(false);
    }
  });

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Empresa", path: "/empresa" },
    { name: "Carreras", path: "/#trabaja-con-nosotros" },
  ];

  // Helper to handle smooth scrolling for hash links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-colors duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-1" : "bg-transparent py-3"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group relative w-40 md:w-56 h-full">
              <img src="/Logo.png" alt="Hanter Logo" className={cn("absolute top-1/2 -translate-y-1/2 left-0 h-24 md:h-32 w-auto object-contain transition-transform group-hover:scale-105 transition-all duration-300", isScrolled ? "" : "brightness-0 invert")} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  isScrolled ? "hover:text-blue-600" : "hover:text-white/80",
                  location.pathname === link.path
                    ? (isScrolled ? "text-slate-900 font-bold" : "text-white")
                    : (isScrolled ? "text-slate-600" : "text-slate-300")
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button variant={isScrolled ? "default" : "outline"} className={cn("rounded-full px-6 py-5 text-lg font-semibold transition-all", isScrolled ? "bg-slate-900 text-white hover:bg-slate-800 border-transparent shadow" : "border-white border-2 text-white bg-transparent hover:bg-white hover:text-slate-900")}>
                Hablemos
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-slate-900" : "text-white drop-shadow-md")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn("md:hidden border-b", isScrolled ? "bg-white border-slate-200" : "bg-slate-900 border-slate-700")}
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path
                      ? (isScrolled ? "text-blue-600" : "text-white")
                      : (isScrolled ? "text-slate-700" : "text-slate-300")
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  <Button className={cn("w-full rounded-full py-6 text-lg font-semibold", isScrolled ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-100")}>
                    Hablemos
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
