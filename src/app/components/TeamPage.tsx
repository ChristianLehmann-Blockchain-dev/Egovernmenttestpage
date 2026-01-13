import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Mail, Code, Users, Database, ClipboardCheck } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Max Mustermann",
    role: "Abteilungsleiter",
    category: "Leitung",
    description: "Verantwortlich für die strategische Ausrichtung und Koordination der Abteilung E-Government und digitaler Wandel.",
    icon: Users,
    email: "max.mustermann@egov-verwaltung.de",
  },
  {
    name: "Anna Schmidt",
    role: "E-Gov Sachbearbeiterin",
    category: "E-Government",
    description: "Bearbeitung und Koordination von E-Government-Projekten und digitalen Verwaltungsleistungen.",
    icon: ClipboardCheck,
    email: "anna.schmidt@egov-verwaltung.de",
  },
  {
    name: "Thomas Weber",
    role: "E-Gov Sachbearbeiter",
    category: "E-Government",
    description: "Umsetzung von E-Government-Services und Unterstützung bei der digitalen Transformation.",
    icon: ClipboardCheck,
    email: "thomas.weber@egov-verwaltung.de",
  },
  {
    name: "Lisa Müller",
    role: "DMS Fachadministratorin",
    category: "DMS",
    description: "Administration und Weiterentwicklung des Dokumentenmanagementsystems sowie Anwendersupport.",
    icon: Database,
    email: "lisa.mueller@egov-verwaltung.de",
  },
  {
    name: "Michael Fischer",
    role: "Sachbearbeiter digitaler Wandel",
    category: "Digitaler Wandel",
    description: "Analyse und Optimierung von Verwaltungsprozessen im Rahmen der digitalen Transformation.",
    icon: Code,
    email: "michael.fischer@egov-verwaltung.de",
  },
  {
    name: "Sarah Becker",
    role: "Sachbearbeiterin digitaler Wandel",
    category: "Digitaler Wandel",
    description: "Begleitung und Unterstützung von Digitalisierungsprojekten in der Verwaltung.",
    icon: Code,
    email: "sarah.becker@egov-verwaltung.de",
  },
];

const categories = [
  { name: "Gesamtteam", color: "gray", value: "all" },
  { name: "Leitung", color: "blue", value: "Leitung" },
  { name: "E-Government", color: "green", value: "E-Government" },
  { name: "DMS", color: "purple", value: "DMS" },
  { name: "Digitaler Wandel", color: "orange", value: "Digitaler Wandel" },
];

export function TeamPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMembers = activeCategory === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeCategory);

  const getButtonClasses = (category: { value: string; color: string }) => {
    const isActive = activeCategory === category.value;
    
    if (isActive) {
      switch (category.color) {
        case "gray":
          return "bg-gray-600 text-white shadow-lg scale-105";
        case "blue":
          return "bg-blue-600 text-white shadow-lg scale-105";
        case "green":
          return "bg-green-600 text-white shadow-lg scale-105";
        case "purple":
          return "bg-purple-600 text-white shadow-lg scale-105";
        case "orange":
          return "bg-orange-600 text-white shadow-lg scale-105";
        default:
          return "bg-blue-600 text-white shadow-lg scale-105";
      }
    } else {
      switch (category.color) {
        case "gray":
          return "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200";
        case "blue":
          return "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200";
        case "green":
          return "bg-white text-gray-600 hover:bg-green-50 border border-gray-200";
        case "purple":
          return "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200";
        case "orange":
          return "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200";
        default:
          return "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200";
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unser Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experten für e-Government und digitale Transformation arbeiten
            gemeinsam an der Zukunft der öffentlichen Verwaltung.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${getButtonClasses(category)}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-200 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-xs text-gray-500">{member.category}</p>
                    </div>
                  </div>
                  <CardDescription className="text-sm font-medium text-blue-600">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span className="hidden xl:inline">Kontakt</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-600">Teammitglieder</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Erfolgreiche Projekte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}