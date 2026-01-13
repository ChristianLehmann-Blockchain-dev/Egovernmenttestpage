import { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { LandingPage } from "@/app/components/LandingPage";
import { TeamPage } from "@/app/components/TeamPage";
import { ProcessPage } from "@/app/components/ProcessPage";
import { E2EPage } from "@/app/components/E2EPage";
import { ReferencesPage } from "@/app/components/ReferencesPage";
import { StrategyPage } from "@/app/components/StrategyPage";
import { Dashboard1 } from "@/app/components/Dashboard1";
import { Dashboard2 } from "@/app/components/Dashboard2";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={handleNavigate} />;
      case "strategy":
        return <StrategyPage />;
      case "team":
        return <TeamPage />;
      case "process":
        return <ProcessPage />;
      case "e2e":
        return <E2EPage />;
      case "references":
        return <ReferencesPage />;
      case "dashboard1":
        return <Dashboard1 />;
      case "dashboard2":
        return <Dashboard2 />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
}