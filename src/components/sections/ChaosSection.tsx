import { motion } from "framer-motion";
import { Banknote, Network, Gauge } from "lucide-react";

export function ChaosSection() {
  const painPoints = [
    {
      icon: <Banknote className="h-6 w-6 text-slate-700" />,
      title: "Costo de la ineficiencia",
      description: "Tareas manuales y repetitivas drenan el tiempo de tu equipo y tu presupuesto sin que te des cuenta. Cada hora perdida en procesos obsoletos es inversión que no retorna.",
    },
    {
      icon: <Network className="h-6 w-6 text-slate-700" />,
      title: "Operación sin procesos",
      description: "Sin estándares, cada error humano genera clientes insatisfechos y cuellos de botella constantes. La falta de estructura impide escalar con seguridad y precisión.",
    },
    {
      icon: <Gauge className="h-6 w-6 text-slate-700" />,
      title: "La competencia no espera",
      description: "Mientras dudas sobre implementar IA, el mercado ya está automatizando y ofreciendo soporte 24/7. La brecha tecnológica se expande cada segundo que postergas tu evolución.",
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            ¿Tu empresa opera en modo caos?
          </h2>
          <p className="text-lg text-slate-600">
            El trabajo repetitivo no solo es aburrido, también es el mayor freno para el crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-transparent p-8 rounded-sm border border-slate-200 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 inline-flex p-3 rounded-sm bg-slate-100 border border-slate-200">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
