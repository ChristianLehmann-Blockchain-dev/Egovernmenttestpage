import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Badge } from "@/app/components/ui/badge";
import { CheckCircle2, Circle, Mountain, Layers, Target, Zap } from "lucide-react";
import { useState } from "react";

const glacierLayers = [
  {
    id: 1,
    name: "Layer 1: Fundament",
    title: "Fundament & Basis-Infrastruktur",
    status: "completed",
    progress: 100,
    color: "from-blue-900 to-blue-800",
    description: "Aufbau der technischen Grundlagen und Infrastruktur",
    details: [
      "Server-Infrastruktur aufgesetzt",
      "Netzwerk und Sicherheitskonzept implementiert",
      "Basis-Authentifizierung eingerichtet",
      "Grundlegende Schnittstellen definiert",
    ],
    icon: Mountain,
    timeframe: "Q1-Q2 2024",
  },
  {
    id: 2,
    name: "Layer 2: Kernservices",
    title: "Digitale Kernservices",
    status: "in-progress",
    progress: 30,
    color: "from-blue-800 to-blue-700",
    description: "Schrittweise Implementierung von DMS und E-Gov Services",
    details: [
      "DMS (Dokumentenmanagement) in Pilotphase - 30% eingeführt",
      "Digitale Signatur Service in Planung",
      "E-Siegel Funktionalität wird vorbereitet",
      "Erste Pilotabteilungen schulen Mitarbeiter",
    ],
    icon: Layers,
    timeframe: "Q3 2024 - Q4 2026",
  },
  {
    id: 3,
    name: "Layer 3: Integration",
    title: "Prozessintegration & Workflows",
    status: "planned",
    progress: 10,
    color: "from-blue-700 to-blue-600",
    description: "Integration in bestehende Prozesse und Fachverfahren",
    details: [
      "Workflow-Engine wird konfiguriert",
      "Fachverfahren werden analysiert",
      "Ende-zu-Ende Prozesse in Planung",
      "Mitarbeiterschulungen in Vorbereitung",
    ],
    icon: Target,
    timeframe: "2027 - 2028",
  },
  {
    id: 4,
    name: "Layer 4: Innovation",
    title: "Innovation & Optimierung",
    status: "planned",
    progress: 5,
    color: "from-blue-600 to-blue-500",
    description: "Kontinuierliche Verbesserung und neue Features",
    details: [
      "KI-gestützte Formularerkennung wird konzipiert",
      "Chatbot für Bürgeranfragen in Planung",
      "Predictive Analytics für Ressourcenplanung",
      "Mobile Apps für Außendienst werden evaluiert",
    ],
    icon: Zap,
    timeframe: "Ab 2029",
  },
];

const statusLabels = {
  completed: { label: "Abgeschlossen", color: "bg-green-500" },
  "in-progress": { label: "In Bearbeitung", color: "bg-blue-500" },
  planned: { label: "Geplant", color: "bg-gray-400" },
};

export function StrategyPage() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<number | null>(1);

  const overallProgress = Math.round(
    glacierLayers.reduce((sum, layer) => sum + layer.progress, 0) /
      glacierLayers.length
  );

  const currentLayer = glacierLayers.find((l) => l.status === "in-progress") || glacierLayers[glacierLayers.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Einführungsstrategie: Das Gletschermodell
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Eine systematische, schichtenweise Einführung des Digitalen Wandels –
            stabil, nachhaltig und skalierbar wie ein Gletscher.
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-700">Gesamtfortschritt</span>
                <span className="text-2xl font-bold text-blue-600">
                  {overallProgress}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-gray-600 mt-2">
                Aktueller Fokus: <span className="font-semibold">{currentLayer.title}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Glacier Visualization */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mountain className="h-6 w-6" />
                Gletschermodell Visualisierung
              </CardTitle>
              <CardDescription className="text-blue-100">
                Klicken Sie auf einen Layer für detaillierte Informationen
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Visual Glacier */}
                <div className="p-8 bg-gradient-to-b from-sky-100 to-white">
                  <div className="relative max-w-md mx-auto">
                    {/* Glacier layers from top to bottom */}
                    <div className="space-y-2">
                      {glacierLayers.map((layer, index) => {
                        const Icon = layer.icon;
                        const isHovered = hoveredLayer === layer.id;
                        const isSelected = selectedLayer === layer.id;
                        const heightClass = index === 0 ? "h-20" : index === 1 ? "h-24" : index === 2 ? "h-28" : "h-32";
                        
                        return (
                          <div
                            key={layer.id}
                            className={`relative ${heightClass} cursor-pointer transition-all duration-300 ${
                              isHovered || isSelected ? "scale-105 z-10" : ""
                            }`}
                            onMouseEnter={() => setHoveredLayer(layer.id)}
                            onMouseLeave={() => setHoveredLayer(null)}
                            onClick={() => setSelectedLayer(layer.id)}
                          >
                            <div
                              className={`h-full rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-between px-6 shadow-lg ${
                                isHovered || isSelected
                                  ? "shadow-2xl ring-4 ring-blue-300"
                                  : ""
                              }`}
                              style={{
                                opacity: layer.progress > 0 ? 1 : 0.5,
                              }}
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <Icon className="h-8 w-8 text-white" />
                                <div className="text-white">
                                  <p className="font-bold text-sm md:text-base">
                                    Layer {layer.id}
                                  </p>
                                  <p className="text-xs opacity-90 hidden md:block">
                                    {layer.title}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <Badge
                                  className={`${
                                    statusLabels[layer.status as keyof typeof statusLabels].color
                                  } text-white text-xs`}
                                >
                                  {layer.progress}%
                                </Badge>
                                {layer.status === "completed" && (
                                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                                )}
                                {layer.status === "in-progress" && (
                                  <Circle className="h-5 w-5 text-yellow-300 animate-pulse" />
                                )}
                              </div>
                            </div>
                            {/* Progress bar for layer */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-lg overflow-hidden">
                              <div
                                className="h-full bg-white/80 transition-all duration-500"
                                style={{ width: `${layer.progress}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Layer Details */}
                <div className="p-8 bg-gray-50">
                  {selectedLayer && (
                    <>
                      {(() => {
                        const layer = glacierLayers.find((l) => l.id === selectedLayer)!;
                        const Icon = layer.icon;
                        const statusInfo = statusLabels[layer.status as keyof typeof statusLabels];
                        
                        return (
                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-center`}>
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold">{layer.name}</h3>
                                  <Badge className={`${statusInfo.color} text-white mt-1`}>
                                    {statusInfo.label}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-gray-700 mb-2">{layer.description}</p>
                              <p className="text-sm text-gray-500">
                                Zeitraum: {layer.timeframe}
                              </p>
                            </div>

                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-700">Fortschritt</h4>
                                <span className="text-lg font-bold text-blue-600">
                                  {layer.progress}%
                                </span>
                              </div>
                              <Progress value={layer.progress} className="h-2" />
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-700 mb-3">
                                {layer.status === "completed"
                                  ? "Erreichte Meilensteine"
                                  : layer.status === "in-progress"
                                  ? "Aktuelle Aktivitäten"
                                  : "Geplante Maßnahmen"}
                              </h4>
                              <ul className="space-y-2">
                                {layer.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    {layer.status === "completed" ? (
                                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    ) : layer.status === "in-progress" ? (
                                      <Circle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    )}
                                    <span className="text-sm text-gray-700">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })()}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Glacier Model */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stabilität</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Wie ein Gletscher bauen wir auf einem soliden Fundament auf.
                Jeder Layer stützt den nächsten und sorgt für langfristige Stabilität.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nachhaltigkeit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Schicht für Schicht entsteht eine nachhaltige Lösung. Keine
                überstürzten Änderungen, sondern durchdachte, langfristige
                Entwicklung.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skalierbarkeit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Das Modell wächst organisch mit den Anforderungen. Neue Layer
                können hinzugefügt werden, ohne die Basis zu gefährden.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}