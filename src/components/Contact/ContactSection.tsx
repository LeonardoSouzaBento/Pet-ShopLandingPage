import { SectionHeader } from "@/components/ui/section-header";
import Map from "./components/map";
import ContactCardsList from "./components/contact-card-list";
import WrapperSection from "../ui/WrapperSection";

const ContactSection = () => {
  return (
    <section className="py-10 px-6 md:px-8 lg:px-12 bg-section-light">
      <SectionHeader
        title="Venha nos visitar"
        subtitle="Queremos você e seu pet"
      />

      <WrapperSection styles="grid lg:grid-cols-2 gap-12 xl:max-w-6xl!">
        <Map />
        <ContactCardsList />
      </WrapperSection>
    </section>
  );
};

export default ContactSection;
