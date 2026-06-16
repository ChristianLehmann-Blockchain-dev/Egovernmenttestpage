import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { FileSignature, Database, Mail, Shield, Building2, Users, Calendar, TrendingUp } from "lucide-react";

const references = [
  {
    id: 1,
    name: "Amt 12.5 – Personalrat",
    category: "Sachgebiet",
    services: ["DMS", "Digitale Signatur", "Postausgang"],
    description: "Digitale Unterstützung der Personalratsarbeit und Dokumentenverwaltung",
    details: {
      timeframe: "2024 - laufend",
      users: "12 Mitarbeiter",
      achievements: ["Papierlose Sitzungsvorbereitung", "Digitale Beschlusserfassung", "Sichere Dokumentenablage im DMS"],
      challenges: "Vertraulichkeit der Personalratsdokumente, rechtssichere Aufbewahrung",
      solution: "Rollenbasierte Zugriffskontrolle, verschlüsselte Ablage, revisionssichere Archivierung",
      departments: [],
    },
    stats: { documents: "2.800", processes: "8" },
  },
  {
    id: 2,
    name: "Amt 14 – Rechnungs- und Gemeindeprüfungsamt",
    category: "Fachamt",
    services: ["DMS", "Digitale Signatur", "E-Siegel"],
    description: "Digitalisierung der Prüf- und Berichtsprozesse",
    details: {
      timeframe: "2024 - laufend",
      users: "18 Mitarbeiter",
      achievements: ["Digitale Prüfberichte mit E-Siegel", "Elektronischer Versand an Gemeinden", "Zentrale Ablage aller Prüfakten"],
      challenges: "Rechtssicherheit der digitalen Prüfberichte, Anbindung an Gemeinden",
      solution: "Qualifiziertes E-Siegel für Prüfberichte, digitaler Postausgang mit Zustellnachweis",
      departments: [],
    },
    stats: { documents: "5.400", processes: "14" },
  },
  {
    id: 3,
    name: "Amt 20 – Finanzen und Controlling",
    category: "Fachamt",
    services: ["DMS", "Digitale Signatur", "Postausgang"],
    description: "Digitale Rechnungsverarbeitung und Finanzberichterstattung",
    details: {
      timeframe: "2023 - laufend",
      users: "35 Mitarbeiter",
      achievements: ["Vollständig digitale Eingangsrechnungsverarbeitung", "Automatisierte Zahlungsfreigabe", "Digitale Haushaltsberichte"],
      challenges: "Integration in bestehendes Finanzsystem, mehrstufige Freigabeprozesse",
      solution: "Workflow-gestützte Rechnungsverarbeitung, digitale Signatur für Freigaben",
      departments: [],
    },
    stats: { documents: "28.000", processes: "22" },
  },
  {
    id: 4,
    name: "Amt 30 – Kommunalaufsichts- und Rechnungsamt",
    category: "Fachamt",
    services: ["DMS", "E-Siegel", "Postausgang"],
    description: "Digitale Aufsichtsprozesse und Korrespondenz mit Kommunen",
    details: {
      timeframe: "2024 - laufend",
      users: "22 Mitarbeiter",
      achievements: ["Digitale Bescheide mit E-Siegel", "Elektronische Kommunikation mit Gemeinden", "Zentrale Aktenführung im DMS"],
      challenges: "Vielzahl kommunaler Ansprechpartner, unterschiedliche Dokumententypen",
      solution: "Digitaler Postausgang mit Empfangsbestätigung, strukturierte DMS-Ablage nach Gemeinden",
      departments: [],
    },
    stats: { documents: "12.500", processes: "18" },
  },
  {
    id: 5,
    name: "Amt 10 – Service und Gebäudemanagement",
    category: "Fachamt",
    services: ["DMS", "Postausgang"],
    description: "Digitale Verwaltung von Verträgen, Wartungen und Gebäudeunterlagen",
    details: {
      timeframe: "2024 - laufend",
      users: "28 Mitarbeiter",
      achievements: ["Digitale Vertragsverwaltung", "Elektronische Wartungsprotokolle", "Zentrale Plandokumentation"],
      challenges: "Große Menge heterogener Gebäudeunterlagen, unterschiedliche Dateiformate",
      solution: "Einheitliche DMS-Struktur, automatische Metadatenerfassung, digitaler Postausgang",
      departments: [],
    },
    stats: { documents: "18.200", processes: "16" },
  },
  {
    id: 6,
    name: "Amt 11 – Personal und Organisation",
    category: "Fachamt",
    services: ["DMS", "Digitale Signatur", "E-Siegel", "Postausgang"],
    description: "Digitale Personalaktenführung und Organisationsverwaltung",
    details: {
      timeframe: "2023 - laufend",
      users: "42 Mitarbeiter",
      achievements: ["Vollständig digitale Personalakte", "Elektronische Arbeitsverträge mit Signatur", "Digitale Stellenausschreibungen und Bewerbungsverfahren"],
      challenges: "Datenschutz bei Personalunterlagen, rechtskonforme digitale Personalakte",
      solution: "Verschlüsselte Ablage, rollenbasierte Zugriffsrechte, qualifizierte elektronische Signatur",
      departments: [],
    },
    stats: { documents: "45.000", processes: "31" },
  },
  {
    id: 7,
    name: "Amt 66 – Umweltamt",
    category: "Fachamt",
    services: ["DMS", "Digitale Signatur", "E-Siegel", "Postausgang"],
    description: "Digitale Genehmigungsverfahren und Umweltschutzprozesse",
    details: {
      timeframe: "2024 - laufend",
      users: "48 Mitarbeiter",
      achievements: ["Digitale Umweltgenehmigungen mit E-Siegel", "Elektronische Bescheiderteilung", "Zentrale Verwaltung von Umweltgutachten"],
      challenges: "Komplexe mehrstufige Genehmigungsverfahren, Einbindung externer Gutachter",
      solution: "Workflow-Engine für Genehmigungsprozesse, digitaler Postausgang, DMS-Integration",
      departments: [],
    },
    stats: { documents: "22.100", processes: "27" },
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
        <div className="grid grid-cols-3 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
              <p className="text-sm text-gray-600">Fachämter</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">300+</div>
              <p className="text-sm text-gray-600">Aktive Nutzer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">0,2 Mio</div>
              <p className="text-sm text-gray-600">Dokumente</p>
            </CardContent>
          </Card>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference) => (
            <Dialog key={reference.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                <Card className="hover:shadow-lg transition-all duration-200 group h-full">
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
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t">
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
                    </div>
                  </CardContent>
                </Card>
                </div>
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