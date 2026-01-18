import DecorativeBlob from '@/components/others/decorative-blob';
import DifferentialsList from '@/components/services-intro/differentials-list';
import { Differential } from '@/types';
import { SectionHeader, SectionWrapper, Section } from '@/ui/index';
import { Calendar, Home, Shield, Sparkles } from 'lucide-react';

const differentials: Differential[] = [
  {
    icon: Home,
    title: 'Ambiente acolhedor',
    description: 'Espaço pensado para o bem estar animal',
  },
  {
    icon: Sparkles,
    title: 'Produtos de alta qualidade',
    description: 'Marcas reconhecidas e confiáveis',
  },
  {
    icon: Calendar,
    title: 'Agendamentos flexíveis',
    description: 'Horários que se ajustam à sua rotina',
  },
  {
    icon: Shield,
    title: 'Espaço seguro e higienizado',
    description: 'Mantemos o ambiente organizado e limpo',
  },
];

export default function ServicesIntro() {
  return (
    <Section variant="light" className={`relative overflow-hidden`}>
      <DecorativeBlob position="top-right" color="primary" size="lg" />

      <SectionHeader
        title="O que nós oferecemos?"
        subtitle="Tudo o que seu amigo precisa para ficar bonito, saudável e feliz."
        wrapperStyles="relative z-10"
      />
      <SectionWrapper styles="lg:max-w-none">
        <DifferentialsList differentials={differentials} />
      </SectionWrapper>
    </Section>
  );
}
