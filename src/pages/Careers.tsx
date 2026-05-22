import { Button } from "../components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Careers() {
  const jobs = [
    {
      title: "Desarrollador Frontend (React)",
      location: "Remoto / Híbrido",
      type: "Tiempo Completo",
      department: "Ingeniería",
      description: "Buscamos un desarrollador Frontend apasionado por crear experiencias de usuario excepcionales con React y Tailwind CSS.",
    },
    {
      title: "Ingeniero de IA / Machine Learning",
      location: "Remoto",
      type: "Tiempo Completo",
      department: "Datos e IA",
      description: "Únete a nuestro equipo para diseñar e implementar modelos de IA que automaticen procesos complejos para nuestros clientes.",
    },
    {
      title: "Especialista en Automatización (RPA)",
      location: "Híbrido",
      type: "Tiempo Completo",
      department: "Operaciones",
      description: "Buscamos un especialista en RPA para identificar, diseñar e implementar flujos de trabajo automatizados.",
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Únete a Hanter Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ayúdanos a construir el futuro de la automatización empresarial. Buscamos talento que quiera hacer un impacto real.
          </p>
        </div>
      </div>

      {/* Jobs Listing Section */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Posiciones Abiertas</h2>
          <p className="text-lg text-slate-600">Explora las oportunidades para hacer crecer tu carrera con nosotros.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 max-w-3xl">
                    {job.description}
                  </p>
                </div>
                <div className="shrink-0 flex self-start">
                  <Link to={`/contacto?asunto=Aplicación: ${encodeURIComponent(job.title)}`}>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6">
                      Aplicar Ahora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application */}
        <div className="mt-16 bg-blue-50 rounded-3xl p-10 text-center border border-blue-100">
          <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-3">¿No encuentras lo que buscas?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Siempre estamos en busca de personas talentosas. Envíanos tu CV y te contactaremos cuando se abra una posición adecuada para tu perfil.
          </p>
          <Link to="/contacto?asunto=Aplicación Espontánea">
            <Button variant="outline" size="lg" className="rounded-full bg-white text-blue-700 border-blue-200 hover:bg-blue-50">
              Enviar Aplicación Espontánea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
