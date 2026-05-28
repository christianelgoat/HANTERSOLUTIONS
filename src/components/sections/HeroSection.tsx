import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16 bg-[#0B0D17]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0B0D17]/40" />
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left max-w-3xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-normal tracking-tight text-[#ffffff] font-[Georgia] sm:text-5xl lg:text-7xl leading-[1.05]"
          >
            Automatiza la<br />
            complejidad,<br />
            escala el impacto.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A0A3AE] text-lg md:text-xl leading-relaxed mt-8 max-w-xl"
          >
            Implementa herramientas que trabajan por ti. Recupera el tiempo de tu equipo para enfocarte en lo que de verdad hace crecer tu negocio. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <Link 
              to="/servicios"
              className="group relative inline-flex items-center justify-between gap-6 overflow-hidden border border-white/5 bg-[#181B26] px-8 py-4 transition-all duration-300 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 text-[12px] font-bold tracking-[0.2em] text-white uppercase group-hover:text-black transition-colors duration-300 delay-75">Explorar Soluciones</span>
              <svg className="relative z-10 w-5 h-5 text-[#A0A3AE] group-hover:text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
