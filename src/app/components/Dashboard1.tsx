import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Building2, Users, FileText, TrendingUp, Activity, CheckCircle2, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const organizationUnits = [
  {
    id: 1,
    name: "Bürgerbüro",
    category: "Kernverwaltung",
    employees: 45,
    leikaServices: [
      { name: "Personalausweis-Beantragung", status: "active", usage: 450 },
      { name: "Meldebescheinigung", status: "active", usage: 380 },
      { name: "Führungszeugnis", status: "active", usage: 220 },
      { name: "Wohnsitz-Anmeldung", status: "active", usage: 190 },
    ],
    totalProcesses: 1240,
    digitalQuota: 78,
    satisfaction: 4.5,
  },
  {
    id: 2,
    name: "Bauamt",
    category: "Fachverwaltung",
    employees: 32,
    leikaServices: [
      { name: "Baugenehmigung", status: "active", usage: 125 },
      { name: "Bauvoranfrage", status: "active", usage: 89 },
      { name: "Abbruchgenehmigung", status: "active", usage: 34 },
      { name: "Nutzungsänderung", status: "pilot", usage: 12 },
    ],
    totalProcesses: 260,
    digitalQuota: 65,
    satisfaction: 4.2,
  },
  {
    id: 3,
    name: "Sozialamt",
    category: "Fachverwaltung",
    employees: 58,
    leikaServices: [
      { name: "Wohngeld-Antrag", status: "active", usage: 340 },
      { name: "Grundsicherung", status: "active", usage: 280 },
      { name: "Bildung & Teilhabe", status: "active", usage: 210 },
      { name: "Sozialhilfe", status: "active", usage: 165 },
    ],
    totalProcesses: 995,
    digitalQuota: 72,
    satisfaction: 4.3,
  },
  {
    id: 4,
    name: "Ordnungsamt",
    category: "Ordnungsverwaltung",
    employees: 28,
    leikaServices: [
      { name: "Veranstaltungsgenehmigung", status: "active", usage: 78 },
      { name: "Parkausweis", status: "active", usage: 145 },
      { name: "Gewerbeanmeldung", status: "active", usage: 92 },
      { name: "Sondernutzungserlaubnis", status: "pilot", usage: 23 },
    ],
    totalProcesses: 338,
    digitalQuota: 58,
    satisfaction: 4.0,
  },
  {
    id: 5,
    name: "Standesamt",
    category: "Kernverwaltung",
    employees: 18,
    leikaServices: [
      { name: "Eheschließung-Anmeldung", status: "active", usage: 156 },
      { name: "Geburtsurkunde", status: "active", usage: 234 },
      { name: "Sterbeurkunde", status: "active", usage: 123 },
      { name: "Eheurkunde", status: "active", usage: 98 },
    ],
    totalProcesses: 611,
    digitalQuota: 82,
    satisfaction: 4.7,
  },
];

const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"];

const statusColors = {
  active: "bg-green-500",
  pilot: "bg-yellow-500",
  planned: "bg-gray-400",
};

export function Dashboard1() {
  const [selectedUnit, setSelectedUnit] = useState<string>("all");

  const filteredUnits =
    selectedUnit === "all"
      ? organizationUnits
      : organizationUnits.filter((u) => u.id.toString() === selectedUnit);

  // Calculate totals
  const totalEmployees = organizationUnits.reduce((sum, u) => sum + u.employees, 0);
  const totalProcesses = organizationUnits.reduce((sum, u) => sum + u.totalProcesses, 0);
  const averageDigitalQuota = Math.round(
    organizationUnits.reduce((sum, u) => sum + u.digitalQuota, 0) / organizationUnits.length
  );
  const totalLeikaServices = organizationUnits.reduce(
    (sum, u) => sum + u.leikaServices.length,
    0
  );

  // Data for charts
  const chartData = organizationUnits.map((unit) => ({
    name: unit.name,
    Prozesse: unit.totalProcesses,
    Digitalisierung: unit.digitalQuota,
  }));

  const pieData = organizationUnits.map((unit) => ({
    name: unit.name,
    value: unit.totalProcesses,
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Dashboard: Organisationseinheiten & LeiKa-Leistungen
              </h1>
              <p className="text-gray-600">
                Übersicht über alle Organisationseinheiten und deren digitale Leistungen
              </p>
            </div>
            <Select value={selectedUnit} onValueChange={setSelectedUnit}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Organisationseinheit wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Einheiten</SelectItem>
                {organizationUnits.map((unit) => (
                  <SelectItem key={unit.id} value={unit.id.toString()}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Einheiten</p>
                  <p className="text-2xl font-bold">{organizationUnits.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Mitarbeiter</p>
                  <p className="text-2xl font-bold">{totalEmployees}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">LeiKa-Leistungen</p>
                  <p className="text-2xl font-bold">{totalLeikaServices}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Ø Digitalisierung</p>
                  <p className="text-2xl font-bold">{averageDigitalQuota}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Prozesse pro Organisationseinheit</CardTitle>
              <CardDescription>
                Monatliche Vorgangsbearbeitung nach Einheit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Prozesse" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prozessverteilung</CardTitle>
              <CardDescription>
                Anteil der Prozesse nach Organisationseinheit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Organization Units Detail */}
        <div className="space-y-6">
          {filteredUnits.map((unit) => (
            <Card key={unit.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-2xl">{unit.name}</CardTitle>
                      <Badge variant="secondary">{unit.category}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {unit.employees} Mitarbeiter · {unit.leikaServices.length} LeiKa-Leistungen
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Digitalisierungsquote</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {unit.digitalQuota}%
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Monatliche Prozesse</p>
                      <p className="text-xl font-bold">{unit.totalProcesses}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Aktive Leistungen</p>
                      <p className="text-xl font-bold">
                        {unit.leikaServices.filter((s) => s.status === "active").length}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Zufriedenheit</p>
                      <p className="text-xl font-bold">{unit.satisfaction} / 5.0</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">LeiKa-Leistungen</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {unit.leikaServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          {service.status === "active" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                          )}
                          <span className="text-sm font-medium">
                            {service.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`${
                              statusColors[service.status as keyof typeof statusColors]
                            } text-white text-xs`}
                          >
                            {service.status === "active" ? "Aktiv" : "Pilot"}
                          </Badge>
                          <span className="text-sm text-gray-600 min-w-[60px] text-right">
                            {service.usage}/Monat
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}