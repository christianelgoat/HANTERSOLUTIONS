import { CTASection } from "../components/sections/CTASection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto max-w-5xl px-4 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black mb-8"
          >
            Nuestra Empresa
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-light text-black max-w-3xl mx-auto leading-relaxed"
          >
            Nacimos con la misión de democratizar el acceso a la Inteligencia Artificial para las PyMEs.
          </motion.p>
        </motion.div>
      </div>
      
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 md:divide-x divide-black/10 gap-16 md:gap-0"
          >
            <motion.div 
              variants={itemVariants}
              className="text-center md:px-10 group cursor-default"
            >
              <h3 className="text-2xl font-bold mb-6 text-black tracking-tight transition-transform duration-500 group-hover:-translate-y-1">Nuestra Misión</h3>
              <p className="text-lg font-light text-black leading-relaxed text-justify transition-opacity duration-500 group-hover:opacity-80">
                Ayudar a las empresas tradicionales a dar el salto tecnológico eliminando el trabajo manual mediante soluciones inteligentes accesibles y efectivas.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center md:px-10 group cursor-default"
            >
              <h3 className="text-2xl font-bold mb-6 text-black tracking-tight transition-transform duration-500 group-hover:-translate-y-1">Nuestra Visión</h3>
              <p className="text-lg font-light text-black leading-relaxed text-justify transition-opacity duration-500 group-hover:opacity-80">
                Ser el aliado tecnológico número uno para PyMEs en Latinoamérica y el mundo, liderando la revolución de la automatización en el sector medio.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center md:px-10 group cursor-default"
            >
              <h3 className="text-2xl font-bold mb-6 text-black tracking-tight transition-transform duration-500 group-hover:-translate-y-1">Nuestro Equipo</h3>
              <p className="text-lg font-light text-black leading-relaxed text-justify transition-opacity duration-500 group-hover:opacity-80">
                Un equipo multidisciplinario de ingenieros, científicos de datos y estrategas de negocio, enfocados en crear valor tangible y ROI directo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
