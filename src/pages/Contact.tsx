import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-black pt-32 pb-24 md:pt-40 md:pb-32 font-sans selection:bg-black selection:text-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column - Copy & Info */}
          <div className="flex flex-col gap-12 lg:sticky lg:top-40">
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:max-w-xl"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.05]">
                ¿Tienes un proyecto?
                <br />
                <span className="text-black/40">Hablemos.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-black/70 leading-relaxed">
                Descubre cómo nuestras soluciones de inteligencia artificial
                pueden transformar las operaciones de tu empresa.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-black/10"
            >
              <div className="space-y-2 group">
                <div className="flex items-center gap-3 text-black/40 mb-4 transition-colors group-hover:text-black">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Email
                  </span>
                </div>
                <p className="text-lg font-medium text-black">
                  contacto@hantersolution.com
                </p>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center gap-3 text-black/40 mb-4 transition-colors group-hover:text-black">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Teléfono
                  </span>
                </div>
                <p className="text-lg font-medium text-black">
                  +51 987 654 321
                </p>
              </div>

              <div className="space-y-2 group sm:col-span-2">
                <div className="flex items-center gap-3 text-black/40 mb-4 transition-colors group-hover:text-black">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Oficina
                  </span>
                </div>
                <p className="text-lg font-medium text-black">
                  Lima, Perú — Operando globalmente
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants} className="relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-[#F8F9FA]"
              >
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-black mb-4">
                  Mensaje Recibido
                </h3>
                <p className="text-lg text-black/60 max-w-md font-light mb-10">
                  Gracias por tu interés. Un especialista se pondrá en contacto
                  contigo a la brevedad.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="group relative inline-flex items-center justify-between gap-6 overflow-hidden border border-black bg-white px-6 py-4 transition-all duration-300 hover:bg-black"
                >
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] text-black uppercase group-hover:text-white transition-colors duration-300">
                    Enviar Otro Mensaje
                  </span>
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-black/50 transition-colors group-focus-within:text-black">
                      Nombre Completo
                    </label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-medium text-black focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                    />
                  </div>
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-black/50 transition-colors group-focus-within:text-black">
                      Empresa
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Ej. Hanter Solutions"
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-medium text-black focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-black/50 transition-colors group-focus-within:text-black">
                      Email de Trabajo
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="juan@empresa.com"
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-medium text-black focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                    />
                  </div>
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-black/50 transition-colors group-focus-within:text-black">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+51 987 654 321"
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-medium text-black focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                    />
                  </div>
                </div>

                <div className="space-y-3 relative group mt-4">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-black/50 transition-colors group-focus-within:text-black">
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-medium text-black focus:outline-none focus:border-black transition-colors resize-none rounded-none placeholder:text-black/20"
                  ></textarea>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="group relative inline-flex w-full md:w-auto items-center justify-between gap-6 overflow-hidden bg-black px-8 py-5 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                    <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-colors duration-300">
                      Agendar Consulta
                    </span>
                    <ArrowUpRight className="relative z-10 w-5 h-5 text-white/50 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
