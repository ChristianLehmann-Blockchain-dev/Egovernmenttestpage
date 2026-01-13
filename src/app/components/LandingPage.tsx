import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight, FileSignature, Database, Mail, Shield, Users, Layers, Workflow } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-800 text-sm font-medium">
                Wir gestalten den digitalen Wandel
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              E-Government und digitaler Wandel
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Wir sind Ihre Organisationseinheit für die Einführung und Umsetzung 
              der Ende-zu-Ende-Digitalisierung in der öffentlichen Verwaltung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("strategy")}
                className="text-lg px-8"
              >
                Einführungsstrategie kennenlernen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("dashboard1")}
                className="text-lg px-8"
              >
                Zu den Dashboards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kernbereiche der Plattform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie die verschiedenen Aspekte unserer Abteilung
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate("strategy")}
            >
              <CardHeader>
                <Layers className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Einführungsstrategie</CardTitle>
                <CardDescription>
                  Gletschermodell mit 4 Layern für systematische Digitalisierung
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate("process")}
            >
              <CardHeader>
                <Workflow className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Prozessdenken</CardTitle>
                <CardDescription>
                  Transformation analoger Prozesse in digitale Workflows
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate("e2e")}
            >
              <CardHeader>
                <ArrowRight className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Ende-zu-Ende</CardTitle>
                <CardDescription>
                  Vollständige Digitalisierung vom Anfang bis zum Abschluss
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate("team")}
            >
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Unser Team</CardTitle>
                <CardDescription>
                  Experten für e-Government und digitale Transformation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* E-Gov Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">E-Gov Dienste</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moderne digitale Dienste für die öffentliche Verwaltung
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FileSignature className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Digitale Signatur</h3>
              <p className="text-sm text-gray-600">
                Rechtsgültige elektronische Unterschriften
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">E-Siegel</h3>
              <p className="text-sm text-gray-600">
                Sichere Dokumenten-Authentifizierung
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Database className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">DMS</h3>
              <p className="text-sm text-gray-600">
                Dokumenten-Management-System
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Postausgang</h3>
              <p className="text-sm text-gray-600">
                Digitale Kommunikation mit Bürgern
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für die digitale Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Erfahren Sie mehr über unsere Referenzprojekte und wie unsere Abteilung
            den digitalen Wandel in der Verwaltung gestaltet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate("references")}
              className="text-lg px-8"
            >
              Referenzen ansehen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("dashboard2")}
              className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white"
            >
              E-Gov Dienste Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}