export function Legal() {
  return (
    <div className="flex flex-col w-full bg-slate-50 py-20 min-h-[80vh]">
      <div className="container mx-auto max-w-4xl px-4">
        
        <div className="bg-white p-10 md:p-16 rounded-3xl border border-slate-200 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Términos Legales y Privacidad</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-6">Última actualización: Mayo 2026</p>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Información Legal</h3>
            <p className="mb-4">
              Hanter Solution (en adelante, "la Empresa") provee servicios de consultoría y desarrollo 
              de software enfocado en Inteligencia Artificial.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Política de Privacidad</h3>
            <p className="mb-4">
              Respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. 
              Cualquier información recopilada a través de nuestros formularios de contacto será utilizada 
              exclusivamente para propósitos de comunicación comercial y no será vendida a terceros.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Servicios y Limitación de Responsabilidad</h3>
            <p className="mb-4">
              Los cálculos de ROI presentados en nuestro sitio son estimaciones basadas en promedios del mercado 
              y no constituyen una garantía de resultados financieros exactos. Cada implementación depende de las 
              variables específicas del cliente.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Propiedad Intelectual</h3>
            <p className="mb-4">
              Todo el contenido, diseños y códigos presentados en este sitio son propiedad intelectual de 
              Hanter Solution.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
