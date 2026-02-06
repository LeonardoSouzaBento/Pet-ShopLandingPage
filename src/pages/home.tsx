import {
  ContactSection,
  Hero,
  History,
  LogoHeader,
  ServicesIntro,
  ServicesSection,
  Team,
  Footer,
} from '@/components/index';
import WhatsAppButton from '@/components/others/whatsapp-button';

const Home = () => {
  return (
    <div className={`min-h-screen`}>
      <LogoHeader />
      <Hero />
      <ServicesIntro />
      <ServicesSection />
      <Team />
      <ContactSection />
      <History />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
