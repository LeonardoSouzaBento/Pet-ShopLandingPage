import { ContactCardList, Map } from "@/components/contact/index";
import { Section, SectionHeader, SectionWrapper } from "@/ui/index";
import { PawIcon } from "./common";

export const ContactSection = () => {
  return (
    <Section variant="light">
      <PawIcon
        position="top-right"
        color="secondary"
        size="sm"
        className="rotate-0"
      />
      <PawIcon
        position="top-left"
        color="secondary"
        size="sm"
        className="top-20 left-14 -rotate-75"
      />
      <SectionHeader
        title="Venha nos visitar"
        subtitle="Queremos você e seu pet"
      />

      <SectionWrapper className="grid lg:grid-cols-2 gap-6 xl:max-w-6xl">
        <Map />
        <ContactCardList />
      </SectionWrapper>
    </Section>
  );
};
