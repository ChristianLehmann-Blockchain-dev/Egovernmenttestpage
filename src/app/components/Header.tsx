import { Menu, X } from "lucide-react";
import { useState } from "react";
import { logoLro } from "@/assets/logo-lro";

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
        <div className="flex h-40 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img
              src={logoLro}
              alt="Landkreis Rostock"
              className="h-36 w-auto object-contain"
            />
            <div>
              <h1 className="font-bold text-lg leading-tight">E-Government</h1>
              <p className="text-xs text-gray-600">Digitaler Wandel</p>
            </div>
          </div>

          {/* Desktop Navigation – zentriert */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}