import { SectionHeader } from "@/components/ui/section-header";
import Map from "./components/map";
import ContactCardsList from "./components/contact-card-list";
import SectionWrapper from "../ui/SectionWrapper";
import { Section } from "@/components/ui/Section";

const ContactSection = () => {
  return (
    <Section variant="light">
      <SectionHeader
        title="Venha nos visitar"
        subtitle="Queremos você e seu pet"
      />

      <SectionWrapper styles="grid lg:grid-cols-2 gap-8 xl:max-w-6xl!">
        <Map />
        <ContactCardsList />
      </SectionWrapper>
    </Section>
  );
};

export default ContactSection;
