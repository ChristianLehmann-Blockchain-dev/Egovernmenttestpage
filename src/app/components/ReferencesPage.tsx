import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { FileSignature, Database, Mail, Shield, Building2, Users, Calendar, TrendingUp } from "lucide-react";

const references = [
  {
    id: 1,
    name: "Landkreis Musterland",
    category: "Landkreis",
    services: ["DMS", "Digitale Signatur", "E-Siegel", "Postausgang"],
    description: "Umfassende Digitalisierung der Kreisverwaltung",
    details: {
      timeframe: "2022 - 2025",
      users: "1.300+ Mitarbeiter",
      achievements: [
        "Vollständig papierlose Aktenführung in allen Ämtern",
        "1,9 Millionen digitale Dokumente verwaltet",
        "Bearbeitungszeit um 65% verkürzt",
        "Einsparung von 450.000€ jährlich",
      ],
      challenges: "Integration verschiedener Fachverfahren, Migration historischer Akten, Schulung vieler Mitarbeiter",
      solution: "Schrittweise Einführung nach Gletschermodell, umfassendes Schulungsprogramm, automatisierte Digitalisierung mit OCR",
      departments: [
        {
          name: "Bauamt",
          description: "Digitales Baugenehmigungsverfahren mit Planverwaltung",
          documents: "650.000",
          processes: "42",
        },
        {
          name: "Straßenverkehrsamt",
          description: "Digitale Zulassungsvorgänge und Führerscheinwesen",
          documents: "850.000",
          processes: "38",
        },
        {
          name: "Sozialamt",
          description: "Digitale Antragsbearbeitung und Leistungsgewährung",
          documents: "400.000",
          processes: "35",
        },
      ],
    },
    stats: {
      documents: "1,9 Mio",
      processes: "115",
      satisfaction: "94%",
    },
  },
];

const serviceIcons: Record<string, any> = {
  "Digitale Signatur": FileSignature,
  "DMS": Database,
  "Postausgang": Mail,
  "E-Siegel": Shield,
};

export function ReferencesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Referenzen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erfolgreiche Projekte und zufriedene Partner – unsere Abteilung
            im Einsatz bei verschiedenen Verwaltungsebenen.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
              <p className="text-sm text-gray-600">Fachämter</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">1.300+</div>
              <p className="text-sm text-gray-600">Aktive Nutzer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">1,9 Mio</div>
              <p className="text-sm text-gray-600">Dokumente</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">94%</div>
              <p className="text-sm text-gray-600">Zufriedenheit</p>
            </CardContent>
          </Card>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference) => (
            <Dialog key={reference.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Building2 className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary">{reference.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {reference.name}
                    </CardTitle>
                    <CardDescription>{reference.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Eingesetzte Services:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {reference.services.map((service) => {
                          const Icon = serviceIcons[service];
                          return (
                            <div
                              key={service}
                              className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md"
                            >
                              {Icon && <Icon className="h-3 w-3 text-blue-600" />}
                              <span className="text-xs text-blue-700">
                                {service}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">
                          {reference.stats.documents}
                        </p>
                        <p className="text-xs text-gray-600">Dokumente</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">
                          {reference.stats.processes}
                        </p>
                        <p className="text-xs text-gray-600">Prozesse</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">
                          {reference.stats.satisfaction}
                        </p>
                        <p className="text-xs text-gray-600">Zufrieden</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <Building2 className="h-10 w-10 text-blue-600" />
                    <div className="flex-1">
                      <DialogTitle className="text-2xl mb-1">
                        {reference.name}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {reference.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                      <h4 className="font-semibold">Projektzeitraum</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {reference.details.timeframe}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-gray-600" />
                      <h4 className="font-semibold">Nutzer</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {reference.details.users}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      Erfolge & Kennzahlen
                    </h4>
                    <ul className="space-y-2">
                      {reference.details.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Herausforderungen
                      </h4>
                      <p className="text-sm text-gray-600">
                        {reference.details.challenges}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Lösung</h4>
                      <p className="text-sm text-gray-600">
                        {reference.details.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Eingesetzte Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {reference.services.map((service) => {
                        const Icon = serviceIcons[service];
                        return (
                          <div
                            key={service}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200"
                          >
                            {Icon && <Icon className="h-4 w-4 text-blue-600" />}
                            <span className="text-sm font-medium text-blue-700">
                              {service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {reference.details.departments && (
                    <div>
                      <h4 className="font-semibold mb-3">Beteiligte Fachämter</h4>
                      <div className="space-y-3">
                        {reference.details.departments.map((dept, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold text-blue-700 mb-1">{dept.name}</h5>
                            <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-gray-500">Dokumente</p>
                                <p className="text-sm font-semibold text-gray-700">{dept.documents}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Prozesse</p>
                                <p className="text-sm font-semibold text-gray-700">{dept.processes}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}