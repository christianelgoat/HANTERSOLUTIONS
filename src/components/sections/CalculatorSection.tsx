import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, TrendingUp, Download, BarChart2, Lightbulb, ChevronRight } from "lucide-react";

export function CalculatorSection() {
  const [employees, setEmployees] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(18);

  const calculateSavings = () => {
    // Estimación basíca de ahorro para la calculadora
    const weeklySavings = employees * hoursPerWeek * hourlyRate;
    const monthlySavings = weeklySavings * 4;
    const yearlySavings = monthlySavings * 12;

    return { monthlySavings, yearlySavings };
  };

  const { monthlySavings, yearlySavings } = calculateSavings();

  return (
    <section className="py-24 bg-[#110C29] text-white overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-8 items-stretch">
          
          {/* Left Column: Title and Info */}
          <div className="lg:col-span-5 flex flex-col justify-center py-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Calcula tu ahorro <br />
              <span className="text-white">potencial</span>
            </h2>
            
            <p className="text-white text-sm leading-relaxed mb-10 max-w-sm">
              Descubre cómo la implementación de agentes de IA y automatización de procesos puede reducir tus costos operativos y liberar a tu talento humano para tareas de alto valor.
            </p>


          </div>

          {/* Right Column: Sliders */}
          <div className="lg:col-span-7 flex">
            <div className="bg-[#181335] rounded-[2rem] p-8 border border-white/5 shadow-2xl w-full flex flex-col justify-between">
              <div className="space-y-8">
                
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-300">Empleados manuales</span>
                    <span className="bg-[#2A244A] text-white px-3 py-1.5 rounded-md font-bold text-sm min-w-[3rem] text-center border border-white/5">{employees}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" 
                    value={employees} onChange={(e) => setEmployees(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2A244A] rounded-lg appearance-none cursor-pointer accent-white" 
                  />
                </div>
                
                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-300">Horas semanales/empleado</span>
                    <span className="bg-[#2A244A] text-white px-3 py-1.5 rounded-md font-bold text-sm min-w-[3rem] text-center border border-white/5">{hoursPerWeek}</span>
                  </div>
                  <input 
                    type="range" min="1" max="40" 
                    value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2A244A] rounded-lg appearance-none cursor-pointer accent-white" 
                  />
                </div>
                
                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-300">Costo por hora ($)</span>
                    <span className="bg-[#2A244A] text-white px-3 py-1.5 rounded-md font-bold text-sm min-w-[3rem] text-center border border-white/5">{hourlyRate}</span>
                  </div>
                  <input 
                    type="range" min="5" max="100" 
                    value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} 
                    className="w-full h-1 bg-[#2A244A] rounded-lg appearance-none cursor-pointer accent-white" 
                  />
                </div>

              </div>

              <div className="mt-10 mb-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Ahorro Mensual Estimado</p>
                <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-3xl text-slate-400">$</span>
                  {monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
