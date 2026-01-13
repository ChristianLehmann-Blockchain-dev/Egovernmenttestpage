import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight, FileText, Printer, Mail as MailIcon, Clock, Zap, Cloud, Shield } from "lucide-react";

const processComparisons = [
  {
    title: "Antragsbearbeitung",
    analog: [
      "Papierformular ausfüllen",
      "Persönlicher Besuch im Amt",
      "Manuelle Prüfung durch Sachbearbeiter",
      "Physische Ablage in Aktenordner",
      "Bearbeitungszeit: 2-4 Wochen",
    ],
    digital: [
      "Online-Formular mit Validierung",
      "Einreichung 24/7 von überall",
      "Automatische Vollständigkeitsprüfung",
      "Digitale Archivierung im DMS",
      "Bearbeitungszeit: 2-5 Tage",
    ],
  },
  {
    title: "Dokumentenversand",
    analog: [
      "Dokument ausdrucken",
      "Unterschrift mit Stift",
      "Versand per Post",
      "Wartezeit auf Zustellung",
      "Keine Zustellbestätigung",
    ],
    digital: [
      "Digitales Dokument erstellen",
      "Elektronische Signatur",
      "Sofortiger E-Versand",
      "Echtzeit-Zustellung",
      "Automatische Empfangsbestätigung",
    ],
  },
  {
    title: "Aktenführung",
    analog: [
      "Physische Aktenordner",
      "Manuelle Suche",
      "Begrenzter Zugriff (Bürozeiten)",
      "Platzbedarf für Archivierung",
      "Keine Versionierung",
    ],
    digital: [
      "Elektronische Akten (DMS)",
      "Volltextsuche",
      "Zugriff jederzeit möglich",
      "Kein physischer Speicherplatz",
      "Vollständige Versionshistorie",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Effizienzsteigerung",
    description: "Bis zu 70% schnellere Bearbeitungszeiten durch Automatisierung",
    color: "yellow",
  },
  {
    icon: Clock,
    title: "24/7 Verfügbarkeit",
    description: "Bürger können Dienste rund um die Uhr nutzen",
    color: "blue",
  },
  {
    icon: Cloud,
    title: "Ortsunabhängigkeit",
    description: "Zugriff von überall, keine Behördengänge nötig",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Höhere Sicherheit",
    description: "Digitale Signatur und verschlüsselte Übertragung",
    color: "green",
  },
];

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Prozessdenken: Analog zu Digital
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die digitale Transformation verändert grundlegend, wie Verwaltungsprozesse
            funktionieren. Sehen Sie den Unterschied.
          </p>
        </div>

        {/* Process Comparisons */}
        <div className="space-y-8 mb-16">
          {processComparisons.map((process, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-2xl">{process.title}</CardTitle>
                <CardDescription>
                  Vergleich zwischen analogem und digitalem Ablauf
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                  {/* Analog */}
                  <div className="p-6 bg-gray-50">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-gray-600" />
                      <h3 className="font-semibold text-lg">Analoger Prozess</h3>
                    </div>
                    <ul className="space-y-3">
                      {process.analog.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-gray-700">
                              {i + 1}
                            </span>
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Digital */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-lg text-blue-600">
                        Digitaler Prozess
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {process.digital.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-white">
                              {i + 1}
                            </span>
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Vorteile der Digitalisierung
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Transformation Timeline */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">
              Der Weg zur vollständigen Digitalisierung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
              <div className="flex flex-col items-center text-center flex-1">
                <Printer className="h-12 w-12 mb-3 opacity-80" />
                <h4 className="font-semibold mb-1">Papierbasiert</h4>
                <p className="text-sm opacity-90">Traditionelle Verwaltung</p>
              </div>
              <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0 opacity-60" />
              <div className="flex flex-col items-center text-center flex-1">
                <FileText className="h-12 w-12 mb-3" />
                <h4 className="font-semibold mb-1">Hybrid</h4>
                <p className="text-sm opacity-90">Teildigitalisierung</p>
              </div>
              <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0 opacity-60" />
              <div className="flex flex-col items-center text-center flex-1">
                <Cloud className="h-12 w-12 mb-3" />
                <h4 className="font-semibold mb-1">Digital</h4>
                <p className="text-sm opacity-90">Vollständig digitalisiert</p>
              </div>
              <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0 opacity-60" />
              <div className="flex flex-col items-center text-center flex-1">
                <Zap className="h-12 w-12 mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-1">Intelligent</h4>
                <p className="text-sm opacity-90">KI-gestützte Prozesse</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
