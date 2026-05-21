import { CTASection } from "../components/sections/CTASection";
import { Users, Target, Rocket } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestra Empresa</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Nacimos con la misión de democratizar el acceso a la Inteligencia Artificial para las PyMEs.
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ayudar a las empresas tradicionales a dar el salto tecnológico eliminando el trabajo manual mediante soluciones inteligentes accesibles y efectivas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser el aliado tecnológico número uno para PyMEs en Latinoamérica y el mundo, liderando la revolución de la automatización en el sector medio.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestro Equipo</h3>
              <p className="text-slate-600 leading-relaxed">
                Un equipo multidisciplinario de ingenieros, científicos de datos y estrategas de negocio, enfocados en crear valor tangible y ROI directo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
