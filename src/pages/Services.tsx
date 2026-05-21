import { ServicesSection } from "../components/sections/ServicesSection";
import { CTASection } from "../components/sections/CTASection";

export function Services() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para escalar tu PyME eliminando fricción y automatizando procesos repetitivos.
          </p>
        </div>
      </div>
      <ServicesSection />
      <CTASection />
    </div>
  );
}
