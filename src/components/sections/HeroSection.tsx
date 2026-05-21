import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Agencia Especializada en Automatización PyME
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Recupera <span className="text-blue-600">10 horas semanales</span>.<br />
            Automatiza con IA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto"
          >
            Deja de apagar incendios y enfócate en crecer. Implementamos sistemas de inteligencia 
            artificial que trabajan 24/7 para tu empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contacto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-lg h-14 group">
                Agenda tu Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-lg h-14 bg-white/50 backdrop-blur-sm">
                Ver Casos de Éxito
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 text-slate-500 font-medium text-sm"
          >
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-500" />
              <span>Soporte 24/7 Automatizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              <span>Implementación Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-500" />
              <span>Cero Curva de Aprendizaje</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
