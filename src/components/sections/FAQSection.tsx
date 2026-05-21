import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export function FAQSection() {
  const faqs = [
    {
      q: "¿Es muy costoso implementar estas soluciones?",
      a: "El costo depende de la complejidad, pero nuestro enfoque está en el ROI rápido. La mayoría de nuestros clientes recuperan la inversión en menos de 3 meses gracias al ahorro en horas hombre."
    },
    {
      q: "¿Necesito conocimientos técnicos en mi equipo?",
      a: "En absoluto. Nosotros nos encargamos del diseño, desarrollo e implementación, y entregamos documentación clara y capacitación para que tu equipo opere las herramientas fácilmente."
    },
    {
      q: "¿Cuánto tiempo toma ver resultados?",
      a: "Dependiendo del proyecto. Un asistente conversacional o una pequeña automatización (RPA) puede estar funcionando en 2 a 4 semanas."
    },
    {
      q: "¿Mis datos estarán seguros?",
      a: "Sí. Implementamos protocolos de seguridad de estándar industrial. Usamos arquitecturas en la nube fiables (AWS, GCP) y el acceso a los datos está estrictamente controlado."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600">
            Aclaramos tus dudas clave antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
}

const FAQItem: React.FC<{ faq: { q: string, a: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-slate-500 transition-transform duration-300", 
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
