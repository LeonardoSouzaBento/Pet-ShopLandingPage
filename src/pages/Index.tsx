import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import History from "@/components/History";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSection from "@/components/Services/ServicesSection";

const Index = () => {
  return (
    <div className={`min-h-screen`}>
      <Hero />
      <ServicesSection />
      <About />
      <Contact />
      <History />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
