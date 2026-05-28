import { Rocket, TrendingUp, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { SplineScene } from "../ui/splite";
import { Spotlight } from "../ui/spotlight";
import { StarsBackground } from "../ui/stars";
import { GooeyText } from "../ui/gooey-text-morphing";

function SplineSceneBasic() {
  return (
    <div className="w-full min-h-[500px] lg:min-h-[600px] bg-[#0B0D17] relative overflow-hidden">
      <StarsBackground className="absolute inset-0 bg-transparent pointer-events-none" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col lg:flex-row h-full absolute inset-0 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Left content */}
        <div className="flex-1 py-8 relative z-10 flex flex-col justify-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-[1.1] mb-8">
            Impulsa el Futuro<br />
            de la Tecnología
          </h1>
          <p className="text-[#A0A3AE] max-w-md text-lg leading-relaxed">
            Estamos en busca de ingenieros, diseñadores y visionarios listos para desafiar los límites de la automatización inteligente y la IA.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative mt-12 md:mt-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export function WorkWithUsSection() {
  const benefits = [
    {
      icon: <Rocket className="h-6 w-6 text-[#111111]" strokeWidth={1.5} />,
      title: "DESAFÍOS DE PRÓXIMA GENERACIÓN",
      description: "Trabaja en la vanguardia de la IA aplicada, resolviendo problemas complejos con un impacto real en industrias globales.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#111111]" strokeWidth={1.5} />,
      title: "EVOLUCIÓN EXPONENCIAL",
      description: "Accede a mentoría de líderes en la industria, presupuestos de formación continua y un camino de carrera diseñado para tu ambición.",
    },
    {
      icon: <Network className="h-6 w-6 text-[#111111]" strokeWidth={1.5} />,
      title: "ECOSISTEMA DE INNOVACIÓN",
      description: "Únete a un equipo diverso donde la curiosidad es recompensada y la flexibilidad es la base de nuestra productividad.",
    },
  ];

  return (
    <section className="relative pt-8 pb-24 md:pb-32 bg-white font-sans" id="trabaja-con-nosotros">
      <div className="h-[100px] md:h-[125px] flex items-center justify-center mb-8 md:mb-10">
        <GooeyText
          texts={["Los", "pequeños", "pasos", "también", "cambian", "el mundo."]}
          morphTime={1}
          cooldownTime={0.5}
          className="font-bold tracking-tighter"
          textClassName="text-[#111111] whitespace-nowrap"
        />
      </div>

      {/* Spline Interactive Component - full width */}
      <div className="w-full relative z-10 mb-20 md:mb-32">
        <SplineSceneBasic />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-32">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <div className="border-t border-[#E5E5E5] pt-8 mb-6">
                <div className="mb-6 opacity-80">
                  {benefit.icon}
                </div>
                <h3 className="text-[13px] font-bold text-[#111111] uppercase tracking-[0.1em] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-16 pb-8">
          <div className="max-w-2xl">
            <h3 className="text-[32px] md:text-[48px] font-bold text-[#111111] mb-6 tracking-tight leading-[1.1]">
              ¿Estás listo para dejar<br />tu huella?
            </h3>
            <p className="text-[16px] text-[#6B6B6B] leading-relaxed max-w-md">
              Si no encuentras el rol perfecto pero crees que tu talento pertenece aquí, envíanos tu perfil. Siempre estamos buscando a los mejores.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <Link 
              to="/carreras" 
              className="group relative px-8 py-4 overflow-hidden rounded-full font-bold tracking-[0.1em] text-[12px] uppercase transition-all duration-300"
            >
              <div className="absolute inset-0 bg-transparent border border-[#111111] rounded-full"></div>
              <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></div>
              <span className="relative z-10 flex items-center gap-2 text-[#111111] group-hover:text-white transition-colors duration-300 delay-75">
                VER POSICIONES ABIERTAS
              </span>
            </Link>
            <Link 
              to="/contacto"
              className="group relative px-8 py-4 overflow-hidden rounded-full font-bold tracking-[0.1em] text-[12px] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute inset-0 bg-[#111111] rounded-full"></div>
              <div className="absolute inset-0 bg-[#0B0D17] transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></div>
              <span className="relative z-10 flex items-center gap-2 text-white">
                ENVIAR CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
