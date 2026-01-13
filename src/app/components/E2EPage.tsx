import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { useState } from "react";

const e2eSteps = [
  {
    id: 1,
    title: "Antragstellung",
    description: "Bürger füllt Online-Formular aus",
    details: [
      "Intelligente Formularfelder mit Validierung",
      "Automatische Vervollständigung basierend auf Bürgerkonto",
      "Upload erforderlicher Dokumente",
      "Sofortige Vollständigkeitsprüfung",
    ],
    systems: ["Online-Portal", "Formularsystem"],
  },
  {
    id: 2,
    title: "Digitale Signatur",
    description: "Rechtsgültige elektronische Unterschrift",
    details: [
      "eID-basierte Authentifizierung",
      "Qualifizierte elektronische Signatur",
      "Zeitstempel für rechtliche Gültigkeit",
      "Automatische Signaturprüfung",
    ],
    systems: ["E-Signatur-Service", "eID-Integration"],
  },
  {
    id: 3,
    title: "Automatisierte Prüfung",
    description: "System prüft Antrag auf Vollständigkeit",
    details: [
      "Regelbasierte Validierung",
      "Automatische Plausibilitätsprüfung",
      "Abgleich mit externen Datenquellen",
      "Priorisierung nach Dringlichkeit",
    ],
    systems: ["Workflow-Engine", "Regelwerk"],
  },
  {
    id: 4,
    title: "Sachbearbeitung",
    description: "Bearbeitung durch zuständigen Mitarbeiter",
    details: [
      "Digitale Akte im DMS",
      "Alle Informationen zentral verfügbar",
      "Kollaborationstools für Rückfragen",
      "Statusverfolgung in Echtzeit",
    ],
    systems: ["DMS", "Vorgangsbearbeitung"],
  },
  {
    id: 5,
    title: "Bescheiderstellung",
    description: "Automatische Erstellung des Bescheids",
    details: [
      "Vorlagenbasierte Dokumentenerstellung",
      "Automatische Dateneinfügung",
      "Rechtliche Prüfung durch System",
      "Elektronisches Siegel",
    ],
    systems: ["Dokumentengenerator", "E-Siegel"],
  },
  {
    id: 6,
    title: "Digitaler Versand",
    description: "Zustellung an Bürger",
    details: [
      "Zustellung ins digitale Postfach",
      "Automatische Empfangsbestätigung",
      "Rechtssicherer Zustellnachweis",
      "Optionale E-Mail-Benachrichtigung",
    ],
    systems: ["Digitaler Postausgang", "Benachrichtigungssystem"],
  },
  {
    id: 7,
    title: "Archivierung",
    description: "Langfristige digitale Speicherung",
    details: [
      "Revisionssichere Archivierung",
      "Vollständige Versionshistorie",
      "Einhaltung gesetzlicher Aufbewahrungsfristen",
      "Jederzeit abrufbar für Nachweise",
    ],
    systems: ["DMS", "Langzeitarchiv"],
  },
];

export function E2EPage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Ende-zu-Ende Digitalisierung
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vom ersten Klick bis zur finalen Archivierung – der gesamte
            Verwaltungsvorgang läuft vollständig digital ab.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Interaktiver Prozessablauf
            </h2>
            
            {/* Desktop Timeline */}
            <div className="hidden md:flex items-center justify-between mb-8">
              {e2eSteps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => setSelectedStep(step.id)}
                    className={`flex flex-col items-center cursor-pointer group transition-all ${
                      selectedStep === step.id ? "scale-110" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                        selectedStep === step.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-600 group-hover:bg-blue-100"
                      }`}
                    >
                      {selectedStep && step.id <= selectedStep ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <Circle className="h-6 w-6" />
                      )}
                    </div>
                    <span
                      className={`text-xs text-center font-medium max-w-[80px] ${
                        selectedStep === step.id
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                  {index < e2eSteps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${
                        selectedStep && step.id < selectedStep
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4 mb-8">
              {e2eSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                    selectedStep === step.id
                      ? "bg-blue-50 border-2 border-blue-600"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="text-left flex-1">
                    <p
                      className={`font-medium ${
                        selectedStep === step.id
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Step Details */}
            {selectedStep && (
              <Card className="border-2 border-blue-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        Schritt {selectedStep}:{" "}
                        {e2eSteps[selectedStep - 1].title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {e2eSteps[selectedStep - 1].description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-gray-700">
                        Prozessdetails:
                      </h4>
                      <ul className="space-y-2">
                        {e2eSteps[selectedStep - 1].details.map(
                          (detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {detail}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-gray-700">
                        Beteiligte Systeme:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {e2eSteps[selectedStep - 1].systems.map(
                          (system, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {system}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Für Bürger</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Keine Behördengänge notwendig
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Transparente Statusverfolgung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Schnellere Bearbeitungszeiten
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  24/7 Verfügbarkeit
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Für Verwaltung</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Automatisierte Prozesse
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Reduzierter Papieraufwand
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Zentrale Datenhaltung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Effizienzsteigerung
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Technologie</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Sichere Verschlüsselung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Rechtsgültige E-Signatur
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  DSGVO-konform
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Revisionssicher
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
