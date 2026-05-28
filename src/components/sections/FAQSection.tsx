import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

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
    <section className="py-24 bg-[#0B0D17] font-sans text-white">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full lg:w-[40%] shrink-0">
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight text-white leading-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="border-t border-white/10 mt-2 lg:mt-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ faq: { q: string, a: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left group gap-4 bg-[#0B0D17] hover:bg-transparent"
        aria-expanded={isOpen}
      >
        <span className="text-[17px] md:text-[18px] font-medium text-white group-hover:text-gray-200 transition-colors">
          {faq.q}
        </span>
        <div className="shrink-0 text-white transition-transform duration-300">
          {isOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Plus className="h-5 w-5" strokeWidth={1.5} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[15px] md:text-[16px] text-[#A0A3AE] leading-relaxed pr-8">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
