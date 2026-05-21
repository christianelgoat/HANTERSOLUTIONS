import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 -m-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -m-16 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              ¿Listo para dejar de perder tiempo y dinero?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Agenda una llamada gratuita de 30 minutos. Analizaremos tu caso 
              y te diremos exactamente qué procesos pueden automatizarse en tu empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="rounded-full bg-white text-blue-600 hover:bg-slate-50 px-8 h-14 text-lg font-bold shadow-xl">
                Agendar Llamada Estratégica
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
