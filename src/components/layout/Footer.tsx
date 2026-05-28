import { Link } from "react-router-dom";
import { Bot, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] text-[#111111] py-12 md:py-16 font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/Logo.png" alt="Hanter Logo" className="h-32 w-auto object-contain transition-opacity hover:opacity-90 grayscale contrast-[100] invert-[1] mix-blend-multiply" style={{ filter: "brightness(0) saturate(100%)" }} />
            </Link>
            <p className="text-sm text-[#6B6B6B] max-w-xs">
              Automatización inteligente para PyMEs. Recupera tu tiempo, 
              reduce costos y opera sin fricciones con Inteligencia Artificial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-[#6B6B6B] hover:text-[#111111] transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="text-[#6B6B6B] hover:text-[#111111] transition-colors">Servicios</Link></li>
              <li><Link to="/empresa" className="text-[#6B6B6B] hover:text-[#111111] transition-colors">Empresa</Link></li>
              <li><Link to="/contacto" className="text-[#6B6B6B] hover:text-[#111111] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              <li>Chatbots con IA</li>
              <li>Automatización de Procesos</li>
              <li>Análisis de Datos</li>
              <li>Integración CRM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-[#111111]" />
                <span>contacto@hantersolution.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-[#111111]" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#111111]" />
                <span>Lima, Perú<br/>Operando globalmente</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 md:mt-16 border-t border-[#E5E5E5] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6B6B]">
          <p>© {new Date().getFullYear()} Hanter Solution. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-[#111111] transition-colors">Aviso Legal</Link>
            <Link to="/legal" className="hover:text-[#111111] transition-colors">Política de Privacidad</Link>
            <Link to="/legal" className="hover:text-[#111111] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
