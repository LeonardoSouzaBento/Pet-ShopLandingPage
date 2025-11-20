import Hero from "@/components/Hero";
import Team from "@/components/Team/Team";
import History from "@/components/History";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSection from "@/components/Services/ServicesSection";
import ContactSection from "@/components/Contact/ContactSection";

const Index = () => {
  return (
    <div className={`min-h-screen`}>
      <Hero />
      <ServicesSection />
      <Team />
      <ContactSection />
      <History />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
