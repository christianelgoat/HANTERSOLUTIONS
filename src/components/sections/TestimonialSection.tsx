import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      company: "DistribuPyme",
      role: "Director de Operaciones",
      content: "Redujimos el tiempo de procesamiento de pedidos de 4 horas diarias a 15 minutos. La inversión inicial se recuperó el primer mes.",
    },
    {
      company: "FinCore",
      role: "Gerente Financiera",
      content: "El asistente conversacional implementado por Hanter resolvió el 70% de las consultas repetitivas de nuestros clientes, liberando a soporte.",
    },
    {
      company: "LogiTrack",
      role: "CEO",
      content: "Teníamos cuellos de botella horribles en la actualización de inventarios. Ahora todo está conectado y los reportes se generan solos.",
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Resultados reales, empresas reales.
          </h2>
          <p className="text-lg text-slate-400">
            No vendemos humo, vendemos optimización. Estos son algunos resultados de clientes que decidieron modernizar sus procesos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic leading-relaxed text-lg">
                "{test.content}"
              </p>
              <div>
                <p className="font-bold text-white">{test.company}</p>
                <p className="text-sm text-slate-500">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
