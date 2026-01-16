import {
  ContactSection,
  Hero,
  History,
  LogoHeader,
  ServicesIntroduction,
  ServicesSection,
  Team,
  Footer,
} from '@/components/index';
import WhatsAppButton from '@/components/others/whatsapp-button';

const Index = () => {
  return (
    <div className={`min-h-screen`}>
      <LogoHeader />
      <Hero />
      <ServicesIntroduction />
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
