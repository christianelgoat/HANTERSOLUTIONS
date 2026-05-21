import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function CalculatorSection() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(15);

  const calculateSavings = () => {
    const weeklySavings = employees * hoursPerWeek * hourlyRate;
    const monthlySavings = weeklySavings * 4;
    const yearlySavings = monthlySavings * 12;

    return { monthlySavings, yearlySavings };
  };

  const { monthlySavings, yearlySavings } = calculateSavings();

  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/50 backdrop-blur-sm border border-blue-400 mb-6">
              <Calculator className="h-5 w-5" />
              <span className="font-medium">Calculadora ROI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Calcula tu ahorro potencial
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Descubre exactamente cuánto dinero estás perdiendo en tareas repetitivas y cuánto podrías ahorrar automatizando procesos con IA.
            </p>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-medium mb-2">
                    <span>Empleados realizando tareas manuales</span>
                    <span className="font-bold">{employees}</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" max="50" 
                    value={employees} 
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full accent-white"
                  />
                </div>
                
                <div>
                  <label className="flex justify-between text-sm font-medium mb-2">
                    <span>Horas a la semana por empleado</span>
                    <span className="font-bold">{hoursPerWeek} hrs</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" max="40" 
                    value={hoursPerWeek} 
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-white"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-sm font-medium mb-2">
                    <span>Costo promedio por hora ($)</span>
                    <span className="font-bold">${hourlyRate}</span>
                  </label>
                  <input 
                    type="range" 
                    min="5" max="100" 
                    value={hourlyRate} 
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            <h3 className="text-xl font-semibold mb-8 text-slate-800 text-center">
              Ahorro Estimado al Automatizar
            </h3>
            
            <div className="space-y-8">
              <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Ahorro Mensual</p>
                <p className="text-4xl md:text-5xl font-bold text-blue-600">
                  ${monthlySavings.toLocaleString()}
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white shadow-xl shadow-blue-900/20">
                <p className="text-sm font-medium text-blue-200 uppercase tracking-wider mb-2">Impacto Anual en Ganancias</p>
                <p className="text-5xl md:text-6xl font-black">
                  ${yearlySavings.toLocaleString()}
                </p>
              </div>
              
              <p className="text-center text-sm text-slate-500">
                *Cálculo conservador asumiendo automatización del 80% de tareas repetitivas.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
