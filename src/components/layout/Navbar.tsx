import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Empresa", path: "/empresa" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform group-hover:scale-105">
                <Bot className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                HANTER
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button className="rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all">
                Hablemos
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden border-b border-slate-200 bg-white"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-slate-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full py-6 text-lg font-semibold">
                    Hablemos
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
