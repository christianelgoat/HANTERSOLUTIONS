import { Link } from "react-router-dom";
import { Bot, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/Logo.png" alt="Hanter Logo" className="h-10 w-auto object-contain transition-opacity hover:opacity-90" />
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Automatización inteligente para PyMEs. Recupera tu tiempo, 
              reduce costos y opera sin fricciones con Inteligencia Artificial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Servicios</Link></li>
              <li><Link to="/empresa" className="hover:text-blue-400 transition-colors">Empresa</Link></li>
              <li><Link to="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Chatbots con IA</li>
              <li>Automatización de Procesos</li>
              <li>Análisis de Datos</li>
              <li>Integración CRM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-blue-500" />
                <span>contacto@hantersolution.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-blue-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-500" />
                <span>San Francisco, CA<br/>Operando globalmente</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 md:mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hanter Solution. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
