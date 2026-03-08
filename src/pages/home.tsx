import {
  ContactSection,
  Hero,
  History,
  LogoHeader,
  Team,
  Footer,
  Services,
} from "@/components/index";
import { WhatsAppButton } from "@/components/common";
// import { LinesOverlay } from "lines-overlay";

const Home = () => {
  return (
    <div>
      <LogoHeader />
      <Hero />
      <Services />
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
