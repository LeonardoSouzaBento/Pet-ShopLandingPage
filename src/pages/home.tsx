import {
  ContactSection,
  Hero,
  History,
  LogoHeader,
  ServicesIntro,
  ServicesSection,
  Team,
  Footer,
} from "@/components/index";
import WhatsAppButton from "@/components/others/whatsapp-button";
// import { LinesOverlay } from 'lines-overlay';

const Home = () => {
  return (
    <div>
      <LogoHeader />
      <Hero />
      <ServicesIntro />
      <ServicesSection />
      <Team />
      <ContactSection />
      <History />
      <Footer />
      <WhatsAppButton />
      {/* <LinesOverlay /> */}
    </div>
  );
};

export default Home;
