import { Section } from '@/ui/section_';
import { SectionHeader } from '@/ui/section-header';
import { Droplet, Scissors, Stethoscope, Truck } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';
import { ServicesGrid } from './services/services-grid';
import DecorativeBlob from './others/decorative-blob';
import type { Service } from '@/types';

const services: Service[] = [
  {
    icon: Droplet,
    title: 'Banho completo',
    description: 'Higiene caprichada com produtos adequados para manter pele e pelos saudáveis',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Scissors,
    title: 'Tosa e estética',
    description: 'Tosa na tesoura ou máquina, hidratação especial e finalização com estilo',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Stethoscope,
    title: 'Cuidados veterinários',
    description: 'Consultas preventivas, vacinas, exames básicos e orientações para seu pet',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Truck,
    title: 'Transporte pet',
    description: 'Coleta e entrega seguras com veículo preparado para conforto e tranquilidade',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];

export default function ServicesSection() {
  return (
    <Section variant="light" className={`relative overflow pt-0!`}>
      <DecorativeBlob position="bottom-left" color="secondary" size="md" />

      <SectionWrapper styles="lg:max-w-none">
        <SectionHeader title="Nossos serviços" />
        <ServicesGrid services={services} />
      </SectionWrapper>
    </Section>
  );
}
