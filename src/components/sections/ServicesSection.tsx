import { motion } from "framer-motion";
import { MessageSquare, Workflow, BarChart3, Users, Network, ShieldCheck } from "lucide-react";
import { RobotModel } from "../3d/RobotModel";

export function ServicesSection() {
  const services = [
    {
      title: "Chatbots con Inteligencia Artificial",
      description: "Atención al cliente 24/7. Respuestas inmediatas, calificación de leads automática y soporte multilingüe sin intervención humana.",
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Automatización de Procesos (RPA)",
      description: "Conecta tus aplicaciones y elimina el trabajo manual. Facturación, entrada de datos y reportes generados en piloto automático.",
      icon: <Workflow className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Análisis de Datos Avanzado",
      description: "Descubre patrones ocultos en tus ventas y operaciones. Dashboards en tiempo real potenciados por modelos predictivos.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Integración de Sistemas y CRM",
      description: "Hacemos que tus herramientas hablen entre sí. Sincronización perfecta entre ventas, marketing y operaciones.",
      icon: <Network className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Capacitación en IA para Equipos",
      description: "Entrenamos a tu personal para aprovechar al máximo las herramientas modernas de IA generativa en su día a día.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Auditoría Digital",
      description: "Analizamos el flujo de tu empresa y te entregamos un mapa exacto de cuellos de botella y oportunidades de optimización.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative flex items-center justify-center mb-20 min-h-[300px] lg:scale-100">
          <div className="text-center max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#000000] font-[Georgia] mb-6">
              Todo lo que necesitas para <span className="text-[#000000]">automatizar</span>
            </h2>
            <p className="text-lg text-[#000000] font-[system-ui]">
              Diseñamos soluciones tecnológicas a la medida de tu empresa. 
              Sin jerga técnica complacada, solo resultados medibles.
            </p>
          </div>
          
          {/* 3D Robot Model */}
          <div className="absolute right-0 lg:-right-40 top-[50%] lg:top-[35%] -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[600px] z-20 pointer-events-none opacity-30 lg:opacity-100">
            <RobotModel />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 block">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
