import { ArrowRight, Briefcase, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function WorkWithUsSection() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Proyectos Innovadores",
      description: "Trabaja con las últimas tecnologías en IA y automatización para resolver problemas reales.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      title: "Crecimiento Profesional",
      description: "Aprende de un equipo de expertos y desarrolla tu carrera en un entorno dinámico.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Cultura Colaborativa",
      description: "Valoramos las ideas de todos y fomentamos un ambiente de trabajo inclusivo y flexible.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="trabaja-con-nosotros">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Trabaja con Nosotros
          </h2>
          <p className="text-xl text-slate-600">
            Estamos buscando mentes creativas y apasionadas por la tecnología para unirse a nuestra misión de transformar empresas mediante la automatización inteligente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-center flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="text-left mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              ¿Listo para el siguiente paso?
            </h3>
            <p className="text-slate-300 max-w-xl">
              Explora nuestras posiciones abiertas o envíanos tu CV de forma espontánea. Siempre estamos buscando talento excepcional.
            </p>
          </div>
          <Link to="/carreras" className="shrink-0">
            <Button size="lg" className="w-full md:w-auto rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 h-14 text-lg font-semibold group flex items-center justify-center">
              Ver Posiciones Abiertas
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
}
