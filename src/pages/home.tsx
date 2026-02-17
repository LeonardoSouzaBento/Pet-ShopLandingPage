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
// import { RowGrid } from "lines-overlay";

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
      {/* <RowGrid /> */}
    </div>
  );
};

export default Home;
