import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Hourglass } from "lucide-react";

export function ChaosSection() {
  const painPoints = [
    {
      icon: <Hourglass className="h-8 w-8 text-rose-500" />,
      title: "Cada hora perdida tiene un costo real",
      description: "Tareas manuales y repetitivas están drenando el tiempo de tu equipo y tu presupuesto sin que te des cuenta.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-amber-500" />,
      title: "Operación en modo caos",
      description: "Sin procesos estandarizados, cada error humano significa clientes insatisfechos y cuellos de botella constantes.",
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-blue-500" />,
      title: "El mercado no espera",
      description: "Mientras dudas sobre implementar IA, tu competencia ya está automatizando y ofreciendo soporte 24/7.",
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
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
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-50">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
