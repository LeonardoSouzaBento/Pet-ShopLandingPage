import { ContactCardList, Map } from '@/components/contact-section/index';
import { Section } from '@/ui/Section';
import { SectionHeader } from '@/ui/section-header';
import SectionWrapper from '@/ui/SectionWrapper';

const ContactSection = () => {
  return (
    <Section variant="light">
      <SectionHeader title="Venha nos visitar" subtitle="Queremos você e seu pet" />

      <SectionWrapper styles="grid lg:grid-cols-2 gap-8 xl:max-w-6xl!">
        <Map />
        <ContactCardList />
      </SectionWrapper>
    </Section>
  );
};

export default ContactSection;
