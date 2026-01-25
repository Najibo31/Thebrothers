import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import DisciplinesSection from "@/components/sections/disciplines-section";
import PlanningSection from "@/components/sections/planning-section";
import TeamSection from "@/components/sections/team-section";
import EventsSection from "@/components/sections/events-section";
import ShopSection from "@/components/sections/shop-section";
import ContactSection from "@/components/sections/contact-section";
import GallerySection from "@/components/sections/gallery-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DisciplinesSection />
        <PlanningSection />
        <TeamSection />
        <GallerySection />
        <EventsSection />
        <ShopSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
