import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-slate-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">¿Tienes un proyecto? Hablemos.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Déjanos tus datos y un especialista se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
          
          <div className="lg:col-span-1 border-r border-slate-100 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -m-32"></div>
            
            <div className="relative z-10 space-y-10 mt-8">
              <h3 className="text-2xl font-bold">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-medium text-slate-300 text-sm mb-1">Email</h4>
                    <p>contacto@hantersolution.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-medium text-slate-300 text-sm mb-1">Teléfono</h4>
                    <p>+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-medium text-slate-300 text-sm mb-1">Oficina</h4>
                    <p>San Francisco, CA<br/>Operando globalmente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 p-10">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Recibido!</h3>
                <p className="text-slate-600 max-w-md">
                  Gracias por tu interés. Hemos recibido tus datos de contacto y un especialista te contactará muy pronto.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline" 
                  className="mt-8"
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-full flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                    <input 
                      {...register("name", { required: true })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Empresa</label>
                    <input 
                      {...register("company")}
                      placeholder="Ej. Mi PyME S.A."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email de Trabajo</label>
                    <input 
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Teléfono</label>
                    <input 
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-grow">
                  <label className="text-sm font-medium text-slate-700">¿En qué podemos ayudarte?</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows={5}
                    placeholder="Cuéntanos brevemente sobre los procesos que te gustaría automatizar..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto mt-auto py-6 text-lg rounded-xl">
                  Enviar Mensaje
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
