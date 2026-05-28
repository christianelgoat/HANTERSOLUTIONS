import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    title: "Automatización Industrial",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    title: "IA Generativa",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    title: "Agentes Cognitivos",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    title: "Data Analytics",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    title: "Visión Computacional",
  }
];

export function CalculatorSection() {
  const [employees, setEmployees] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(18);
  const [activeIndex, setActiveIndex] = useState(Math.floor(CAROUSEL_ITEMS.length / 2));
  const [isManual, setIsManual] = useState(false);

  // Auto-play the carousel (duration updated as requested)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsManual(false);
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 13000);
    return () => clearInterval(timer);
  }, []);

  const calculateSavings = () => {
    const weeklySavings = employees * hoursPerWeek * hourlyRate;
    const monthlySavings = weeklySavings * 4;
    return { monthlySavings };
  };

  const { monthlySavings } = calculateSavings();

  return (
    <section className="py-24 bg-[#0B0D17] text-white overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Calculator */}
          <div className="lg:col-span-6 flex flex-col gap-10 w-full">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Georgia] font-normal tracking-tight mb-4 text-[#ffffff]">
                Calcula tu ahorro potencial
              </h2>
              <p className="text-[#A0A3AE] text-base md:text-lg leading-relaxed max-w-2xl">
                Descubre cómo la implementación de agentes de IA y automatización de procesos puede reducir tus costos operativos y liberar a tu talento humano para tareas de alto valor.
              </p>
            </div>

            {/* Calculator Block */}
            <div className="w-full">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-base font-medium text-white">Empleados manuales</span>
                    <span className="bg-[#2D333F] text-white px-3 py-1 font-bold text-sm min-w-[3rem] text-center border border-white/5">{employees}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" 
                    value={employees} onChange={(e) => setEmployees(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2D333F] appearance-none cursor-pointer accent-white" 
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-base font-medium text-white">Horas semanales/empleado</span>
                    <span className="bg-[#2D333F] text-white px-3 py-1 font-bold text-sm min-w-[3rem] text-center border border-white/5">{hoursPerWeek}</span>
                  </div>
                  <input 
                    type="range" min="1" max="40" 
                    value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2D333F] appearance-none cursor-pointer accent-white" 
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-base font-medium text-white">Costo por hora ($)</span>
                    <span className="bg-[#2D333F] text-white px-3 py-1 font-bold text-sm min-w-[3rem] text-center border border-white/5">{hourlyRate}</span>
                  </div>
                  <input 
                    type="range" min="5" max="100" 
                    value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2D333F] appearance-none cursor-pointer accent-white" 
                  />
                </div>
              </div>

              <div className="mt-12 mb-2">
                <p className="text-sm font-bold text-[#A0A3AE] uppercase tracking-[0.2em] mb-2">Ahorro Mensual Estimado</p>
                <div className="text-5xl md:text-6xl font-[Georgia] font-normal text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-4xl text-[#A0A3AE]">$</span>
                  {monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2D Vertical Coverflow Carousel */}
          <div className="lg:col-span-6 relative w-full h-[500px] sm:h-[600px] md:h-[700px] flex justify-center items-center">
            {CAROUSEL_ITEMS.map((item, index) => {
              // Calculate relative position based on activeIndex
              let diff = index - activeIndex;
              const half = Math.floor(CAROUSEL_ITEMS.length / 2);
              
              if (diff > half) diff -= CAROUSEL_ITEMS.length;
              if (diff < -half) diff += CAROUSEL_ITEMS.length;

              const isActive = diff === 0;
              const absDiff = Math.abs(diff);
              
              // 2D Flat Vertical Coverflow logic matching the user's image request
              const zIndex = 50 - absDiff * 10;
              const scale = 1 - absDiff * 0.25; // Scale down inactive cards more
              const yOffset = diff * 50; // Offset them vertically
              
              const blur = absDiff > 1 ? absDiff * 1.5 : 0; // Add blur for depth
              const opacity = Math.max(0, 1 - absDiff * 0.45); // Fade out more

              return (
                <motion.div
                  key={item.id}
                  className="absolute top-1/2 left-1/2 overflow-hidden cursor-pointer bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all"
                  style={{
                    width: "min(550px, 95vw)", // Larger squares
                    height: "min(550px, 95vw)",
                  }}
                  animate={{
                    x: "-50%",
                    y: `calc(-50% + ${yOffset}%)`,
                    scale: scale,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: isManual ? 400 : 100,
                    damping: isManual ? 30 : 20,
                    mass: 0.8
                  }}
                  onClick={() => {
                    setIsManual(true);
                    setActiveIndex(index);
                  }}
                  whileHover={{ 
                    scale: isActive ? 1.05 : scale * 1.05,
                    filter: "blur(0px)", // unblur on hover
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="w-full h-full relative overflow-hidden"
                    animate={isActive ? { y: [0, -15, 0] } : { y: 0 }}
                    transition={isActive ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#110C29]/80 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6">
                        <motion.h3 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="text-white text-xl md:text-2xl font-bold text-center"
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
