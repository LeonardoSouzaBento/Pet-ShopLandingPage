import { ContactCardList, Map } from '@/components/contact/index';
import { Section, SectionHeader, SectionWrapper } from '@/ui/index';

const ContactSection = () => {
  return (
    <Section variant="light">
      <SectionHeader title="Venha nos visitar" subtitle="Queremos você e seu pet" />

      <SectionWrapper styles="grid lg:grid-cols-2 gap-6 xl:max-w-6xl!">
        <Map />
        <ContactCardList />
      </SectionWrapper>
    </Section>
  );
};

export default ContactSection;
