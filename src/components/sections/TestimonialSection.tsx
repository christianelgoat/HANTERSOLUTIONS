import { motion } from "framer-motion";
import { TestimonialsColumn } from "../ui/testimonials-columns-1";
import { Spotlight } from "../ui/spotlight";
import { StarsBackground } from "../ui/stars";

const testimonials = [
  {
    text: "La automatización con Hanter revolucionó nuestras finanzas. Recuperamos decenas de horas mensuales.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Carla P.",
    role: "Directora Financiera",
  },
  {
    text: "Los agentes de IA que desarrollaron para nosotros manejan el 80% del soporte técnico sin fricciones.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Diego M.",
    role: "Gerente de Operaciones",
  },
  {
    text: "Redujimos costos significativamente desde el primer mes. Su enfoque en PyMEs hace que la IA sea 100% accesible.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sofía R.",
    role: "CEO y Fundadora",
  },
  {
    text: "Integrar nuestro CRM con los chatbots fue un proceso rápido y fluido. Nuestros tiempos mejoraron drásticamente.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Javier L.",
    role: "Director de Ventas",
  },
  {
    text: "Gracias a Hanter, dejamos de hacer tareas repetitivas y nos enfocamos en hacer crecer nuestro negocio estratégicamente.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lucía F.",
    role: "Gerente General",
  },
  {
    text: "La consultoría personalizada que brindan en inteligencia artificial supera cualquier expectativa. Muy recomendados.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Elena V.",
    role: "Directora de Marketing",
  },
  {
    text: "Nunca imaginé que automatizar procesos sería tan sencillo. El equipo nos guió en cada paso de la implementación.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Sebastián M.",
    role: "Líder de Proyectos",
  },
  {
    text: "Nuestro retorno de inversión fue visible casi de inmediato. Hanter es un aliado estratégico para cualquier PyME.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Valeria C.",
    role: "COO",
  },
  {
    text: "El análisis de datos ahora es automático, permitiéndonos tomar decisiones informadas en tiempo real sin esfuerzo.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Andrés B.",
    role: "Director de Estrategia",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialSection() {
  return (
    <section className="bg-[#0B0D17] text-white pt-16 md:pt-24 pb-8 relative overflow-hidden w-full">
      <StarsBackground className="absolute inset-0 bg-transparent pointer-events-none" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17] via-transparent to-[#0B0D17]/50 z-10 pointer-events-none" />
      <div className="w-full z-10 relative">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center mb-8 px-6">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-wider">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="flex justify-center gap-6 mt-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden w-full px-6">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
