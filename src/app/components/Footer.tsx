import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-800 font-bold text-xl">eG</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">E-Government</h3>
                <p className="text-xs text-blue-200">Digitaler Wandel</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 mb-4">
              Wir setzen die Ende-zu-Ende-Digitalisierung in der
              öffentlichen Verwaltung um.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("strategy")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Einführungsstrategie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("team")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("references")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Referenzen
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("dashboard1")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Organisationseinheiten
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("dashboard2")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  E-Gov Dienste
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("process")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Prozessdenken
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("e2e")}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Ende-zu-Ende
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-100">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+49 123 456789</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-100">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@egov-verwaltung.de</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">
              © {currentYear} E-Government und digitaler Wandel. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <button className="hover:text-white transition-colors">
                Datenschutz
              </button>
              <button className="hover:text-white transition-colors">
                Impressum
              </button>
              <button className="hover:text-white transition-colors">
                AGB
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}