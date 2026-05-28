import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0B0D17] text-white">
      <div className="container mx-auto max-w-5xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight mb-8 leading-[1.05] text-[#FFFFFF] font-[Georgia]">
              Convirtiendo la<br />
              complejidad<br />
              en crecimiento
            </h2>
            <p className="text-[#A0A3AE] text-lg md:text-xl leading-relaxed max-w-lg">
              Diseñamos soluciones para desafíos empresariales complejos — alineando estrategia, operaciones y ejecución para impulsar un crecimiento medible y sostenible.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link 
              to="/contacto"
              className="group relative inline-flex items-center justify-between gap-6 overflow-hidden border border-white/5 bg-[#181B26] px-6 py-4 transition-all duration-300 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] text-white uppercase group-hover:text-black transition-colors duration-300 delay-75">Agendar Consulta</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 text-[#A0A3AE] group-hover:text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-white">4.8/5</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#A0A3AE]">Confiado por más de 150+ Equipos</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
