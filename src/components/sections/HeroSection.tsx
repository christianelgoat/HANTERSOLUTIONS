import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-end pt-24 pb-16">
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
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left max-w-3xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#ffffff] font-[Georgia] sm:text-4xl lg:text-5xl"
          >
            Recupera <span className="text-[#ffffff] font-[Georgia]">10 horas semanales</span>.<br />
            Automatiza con IA.
          </motion.h1>

        </div>
      </div>
    </section>
  );
}
