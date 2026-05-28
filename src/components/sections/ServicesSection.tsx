import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const categories = [
    "Chatbots", 
    "Automatización RPA", 
    "Analítica Avanzada", 
    "APIs & CRM", 
    "Auditorías Digitales"
  ];

  const services = [
    {
      id: 1,
      title: "Chatbots IA",
      category: "Atención 24/7 · Soporte",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      aspectRatio: "aspect-[4/3]",
      colSpan: "col-span-1"
    },
    {
      id: 2,
      title: "Optimización RPA",
      category: "Procesos Operativos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      aspectRatio: "aspect-[16/9]",
      colSpan: "col-span-1 md:col-span-2"
    },
    {
      id: 3,
      isEvent: true,
      colSpan: "col-span-1 md:col-span-2"
    },
    {
      id: 4,
      title: "Analítica Pro",
      category: "Datos · Dashboards",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      aspectRatio: "aspect-square",
      colSpan: "col-span-1"
    },
    {
      id: 5,
      title: "Sistemas & CRM",
      category: "Sincronización Perfecta",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      aspectRatio: "aspect-[3/4]",
      colSpan: "col-span-1"
    },
    {
      id: 6,
      title: "Auditoría Digital",
      category: "Consultoría · Estrategia",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      aspectRatio: "aspect-[16/9]",
      colSpan: "col-span-1 md:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20 space-y-5 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#111111] leading-[0.95]"
          >
            Hecho con Nuestra <br className="hidden sm:block" /> Tecnología
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[13px] md:text-[14px] text-[#6B6B6B]"
          >
            Colección de los mejores servicios diseñados para tu empresa.
          </motion.p>
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-3xl"
          >
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="px-5 py-2 border border-[#E5E5E5] rounded-full text-[13px] font-medium text-[#111111] hover:bg-[#F5F5F5] cursor-pointer transition-colors bg-white"
              >
                {cat}
              </div>
            ))}
            <div className="px-5 py-2 border border-[#E5E5E5] rounded-full text-[13px] font-medium text-[#6B6B6B] bg-[#F5F5F5] ml-2">
              por nuestro equipo
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16 mt-16">
          {services.map((item, index) => {
            
            // Event Block Render
            if (item.isEvent) {
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-[#0B0D17] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group cursor-pointer ${item.colSpan}`}
                >
                  <div className="flex justify-between items-center text-[#A0A3AE] border-b border-white/10 pb-4">
                    <span className="text-sm font-medium tracking-wide text-white">Caso de éxito destacado</span>
                    <span className="text-sm border border-white/30 px-3 py-1 rounded-full text-white">Reporte 2024</span>
                  </div>
                  
                  <div className="my-16 text-center z-10 relative">
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white transform group-hover:scale-105 transition-transform duration-500 font-[Georgia]">
                      Logística
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
                    <p className="text-[#A0A3AE] text-[14px] max-w-sm leading-relaxed">
                      Descubre cómo la implementación de agentes de IA redujo los costos operativos en un 40% en solo un mes.
                    </p>
                    <Link to="/servicios" className="group relative inline-flex items-center justify-between gap-6 overflow-hidden border border-white/10 bg-[#2D333F] px-8 py-3 transition-all duration-300 hover:border-white/20 shadow-lg rounded-md">
                      <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                      <span className="relative z-10 text-[14px] font-medium text-white group-hover:text-black transition-colors duration-300 delay-75 whitespace-nowrap">Leer el caso</span>
                    </Link>
                  </div>

                  {/* Decorative outline matching style */}
                  <div className="absolute inset-4 border border-white/5 pointer-events-none"></div>
                </motion.div>
              );
            }

            // Standard Service Render
            return (
              <Link to="/servicios" key={item.id} className={`block ${item.colSpan}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group cursor-pointer flex flex-col h-full`}
                >
                  <div className={`w-full overflow-hidden bg-[#E5E5E5] mb-5 ${item.aspectRatio}`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="flex items-start justify-between mt-auto">
                    <div>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-[#111111] leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#6B6B6B] font-medium">
                        {item.category}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 group-hover:opacity-100 transition-opacity opacity-70 mt-2">
                      <span className="text-[13px] font-bold text-[#111111] uppercase tracking-wider hidden sm:block">Explorar</span>
                      <div className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

