import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { FileSignature, Database, Mail, Shield, Server, Cloud, Lock, Zap } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useState } from "react";

const eGovServices = [
  {
    id: 1,
    name: "Digitale Signatur",
    category: "Signatur & Authentifizierung",
    icon: FileSignature,
    description: "Rechtsgültige elektronische Unterschriften für Dokumente",
    status: "active",
    users: 1850,
    usage: 12450,
    uptime: 99.8,
    features: [
      "eID-Integration",
      "Qualifizierte E-Signatur",
      "Zeitstempel-Service",
      "Multi-Signatur Unterstützung",
    ],
    stats: {
      daily: 415,
      weekly: 2890,
      monthly: 12450,
      growth: 15.3,
    },
  },
  {
    id: 2,
    name: "E-Siegel",
    category: "Signatur & Authentifizierung",
    icon: Shield,
    description: "Automatische Siegelung von Dokumenten für rechtliche Gültigkeit",
    status: "active",
    users: 580,
    usage: 8920,
    uptime: 99.9,
    features: [
      "Automatische Siegelung",
      "Langzeitsignatur",
      "Stapelverarbeitung",
      "API-Integration",
    ],
    stats: {
      daily: 297,
      weekly: 2080,
      monthly: 8920,
      growth: 22.1,
    },
  },
  {
    id: 3,
    name: "DMS",
    category: "Dokumentenmanagement",
    icon: Database,
    description: "Zentrale Verwaltung und Archivierung aller digitalen Dokumente",
    status: "active",
    users: 2420,
    usage: 45600,
    uptime: 99.5,
    features: [
      "Volltextsuche",
      "Versionierung",
      "Zugriffsrechte-Verwaltung",
      "Revisionssichere Archivierung",
    ],
    stats: {
      daily: 1520,
      weekly: 10640,
      monthly: 45600,
      growth: 8.7,
    },
  },
  {
    id: 4,
    name: "Digitaler Postausgang",
    category: "Digitale Kommunikation",
    icon: Mail,
    description: "Elektronischer Versand von Bescheiden und Dokumenten",
    status: "active",
    users: 1340,
    usage: 18750,
    uptime: 99.7,
    features: [
      "Rechtssichere Zustellung",
      "Empfangsbestätigung",
      "Automatische Benachrichtigung",
      "Batch-Versand",
    ],
    stats: {
      daily: 625,
      weekly: 4375,
      monthly: 18750,
      growth: 18.5,
    },
  },
  {
    id: 5,
    name: "Workflow-Engine",
    category: "Prozessautomatisierung",
    icon: Zap,
    description: "Automatisierung und Steuerung von Verwaltungsprozessen",
    status: "active",
    users: 890,
    usage: 6340,
    uptime: 99.6,
    features: [
      "Grafischer Workflow-Designer",
      "Regelbasierte Weiterleitung",
      "Eskalationsmanagement",
      "Prozess-Monitoring",
    ],
    stats: {
      daily: 211,
      weekly: 1477,
      monthly: 6340,
      growth: 12.3,
    },
  },
  {
    id: 6,
    name: "Cloud Storage",
    category: "Infrastruktur",
    icon: Cloud,
    description: "Sichere Cloud-Speicherung für alle digitalen Ressourcen",
    status: "active",
    users: 2800,
    usage: 89200,
    uptime: 99.9,
    features: [
      "Ende-zu-Ende Verschlüsselung",
      "Redundante Speicherung",
      "DSGVO-konform",
      "Automatische Backups",
    ],
    stats: {
      daily: 2973,
      weekly: 20811,
      monthly: 89200,
      growth: 5.2,
    },
  },
  {
    id: 7,
    name: "IAM Service",
    category: "Sicherheit & Zugriff",
    icon: Lock,
    description: "Identity & Access Management für sichere Zugriffskontrolle",
    status: "active",
    users: 2800,
    usage: 156000,
    uptime: 99.95,
    features: [
      "Single Sign-On (SSO)",
      "Multi-Faktor-Authentifizierung",
      "Rollenbasierte Zugriffskontrolle",
      "Audit-Logging",
    ],
    stats: {
      daily: 5200,
      weekly: 36400,
      monthly: 156000,
      growth: 3.1,
    },
  },
  {
    id: 8,
    name: "API Gateway",
    category: "Infrastruktur",
    icon: Server,
    description: "Zentrale Schnittstelle für alle E-Gov Services",
    status: "active",
    users: 145,
    usage: 892000,
    uptime: 99.8,
    features: [
      "RESTful API",
      "Rate Limiting",
      "API-Versionierung",
      "Entwickler-Portal",
    ],
    stats: {
      daily: 29733,
      weekly: 208131,
      monthly: 892000,
      growth: 7.8,
    },
  },
];

// Mock data for trend charts
const usageTrendData = [
  { month: "Aug", Signatur: 10200, Siegel: 7100, DMS: 38900, Postausgang: 14200 },
  { month: "Sep", Signatur: 10800, Siegel: 7600, DMS: 41200, Postausgang: 15100 },
  { month: "Okt", Signatur: 11300, Siegel: 8100, DMS: 43100, Postausgang: 16800 },
  { month: "Nov", Signatur: 11900, Siegel: 8400, DMS: 44500, Postausgang: 17500 },
  { month: "Dez", Signatur: 12000, Siegel: 8700, DMS: 45200, Postausgang: 18200 },
  { month: "Jan", Signatur: 12450, Siegel: 8920, DMS: 45600, Postausgang: 18750 },
];

const performanceData = eGovServices.slice(0, 5).map((service) => ({
  service: service.name,
  Uptime: service.uptime,
  Nutzung: Math.min((service.usage / 1000) * 10, 100),
  Wachstum: service.stats.growth * 5,
}));

const categories = [
  { name: "Alle", filter: "all" },
  { name: "Signatur & Auth", filter: "Signatur & Authentifizierung" },
  { name: "Dokumente", filter: "Dokumentenmanagement" },
  { name: "Kommunikation", filter: "Digitale Kommunikation" },
  { name: "Infrastruktur", filter: "Infrastruktur" },
  { name: "Sicherheit", filter: "Sicherheit & Zugriff" },
  { name: "Automatisierung", filter: "Prozessautomatisierung" },
];

export function Dashboard2() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? eGovServices
      : eGovServices.filter((s) => s.category === selectedCategory);

  const totalUsage = eGovServices.reduce((sum, s) => sum + s.usage, 0);
  const totalUsers = eGovServices.reduce((sum, s) => sum + s.users, 0);
  const averageUptime =
    eGovServices.reduce((sum, s) => sum + s.uptime, 0) / eGovServices.length;
  const averageGrowth =
    eGovServices.reduce((sum, s) => sum + s.stats.growth, 0) / eGovServices.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard: E-Gov Leistungen</h1>
          <p className="text-gray-600">
            Übersicht und Analyse aller digitalen Verwaltungsdienste
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Server className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Aktive Services</p>
                <p className="text-2xl font-bold">{eGovServices.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <FileSignature className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Monatliche Nutzung</p>
                <p className="text-2xl font-bold">
                  {(totalUsage / 1000).toFixed(0)}k
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Ø Uptime</p>
                <p className="text-2xl font-bold">{averageUptime.toFixed(1)}%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Ø Wachstum</p>
                <p className="text-2xl font-bold text-green-600">
                  +{averageGrowth.toFixed(1)}%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Nutzungstrend</CardTitle>
              <CardDescription>
                Monatliche Nutzung der Hauptservices (letzte 6 Monate)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={usageTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="DMS"
                    stackId="1"
                    stroke="#2563eb"
                    fill="#2563eb"
                  />
                  <Area
                    type="monotone"
                    dataKey="Postausgang"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                  />
                  <Area
                    type="monotone"
                    dataKey="Signatur"
                    stackId="1"
                    stroke="#60a5fa"
                    fill="#60a5fa"
                  />
                  <Area
                    type="monotone"
                    dataKey="Siegel"
                    stackId="1"
                    stroke="#93c5fd"
                    fill="#93c5fd"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service-Performance</CardTitle>
              <CardDescription>
                Kennzahlen-Vergleich der Services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="service" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Uptime"
                    dataKey="Uptime"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Nutzung"
                    dataKey="Nutzung"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Wachstum"
                    dataKey="Wachstum"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.3}
                  />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Service Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>E-Gov Services im Detail</CardTitle>
            <CardDescription>
              Filtern Sie nach Kategorie, um Details zu den Services zu sehen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 mb-6">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.filter} value={cat.filter} className="text-xs">
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge className="bg-green-500 text-white">
                            {service.uptime}% Uptime
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                        <Badge variant="secondary" className="w-fit mt-2">
                          {service.category}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b">
                          <div>
                            <p className="text-xs text-gray-600">Aktive Nutzer</p>
                            <p className="text-lg font-bold text-blue-600">
                              {service.users}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">
                              Monatliche Nutzung
                            </p>
                            <p className="text-lg font-bold text-blue-600">
                              {service.usage.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">
                              Durchschnitt/Tag
                            </p>
                            <p className="text-sm font-semibold">
                              {service.stats.daily}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Wachstum</p>
                            <p className="text-sm font-semibold text-green-600">
                              +{service.stats.growth}%
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <p className="text-sm font-semibold mb-2 text-gray-700">
                            Features:
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-center gap-1"
                              >
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
