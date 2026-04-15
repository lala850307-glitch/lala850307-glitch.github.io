import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedProjects from "./components/FeaturedProjects";
import CtaSection from "./components/CtaSection";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedProjects />
      <CtaSection />
      <Footer />
    </main>
  );
}
