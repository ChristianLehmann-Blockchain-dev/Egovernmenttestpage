import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Startseite" },
    { id: "strategy", label: "Einführungsstrategie" },
    { id: "team", label: "Team" },
    { id: "process", label: "Prozessdenken" },
    { id: "e2e", label: "Ende-zu-Ende" },
    { id: "references", label: "Referenzen" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">eG</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">E-Government</h1>
              <p className="text-xs text-gray-600">Digitaler Wandel</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  currentPage === item.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Dashboard Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant={currentPage === "dashboard1" ? "default" : "outline"}
              onClick={() => onNavigate("dashboard1")}
              className="text-sm"
            >
              Dashboard 1
            </Button>
            <Button
              variant={currentPage === "dashboard2" ? "default" : "outline"}
              onClick={() => onNavigate("dashboard2")}
              className="text-sm"
            >
              Dashboard 2
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button
                  variant={currentPage === "dashboard1" ? "default" : "outline"}
                  onClick={() => {
                    onNavigate("dashboard1");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Dashboard 1
                </Button>
                <Button
                  variant={currentPage === "dashboard2" ? "default" : "outline"}
                  onClick={() => {
                    onNavigate("dashboard2");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Dashboard 2
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}