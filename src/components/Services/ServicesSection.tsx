import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/section-header";
import { Droplet, Scissors, Stethoscope, Truck } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { ServicesGrid } from "./components/ServicesGrid";
import DecorativeBlob from "../DecorativeBlob";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: "text-primary" | "text-secondary";
  bgColor: string;
}

const services: Service[] = [
  {
    icon: Droplet,
    title: "Banho completo",
    description:
      "Higiene caprichada com produtos adequados para manter pele e pelos saudáveis",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Scissors,
    title: "Tosa e estética",
    description:
      "Tosa na tesoura ou máquina, hidratação especial e finalização com estilo",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Stethoscope,
    title: "Cuidados veterinários",
    description:
      "Consultas preventivas, vacinas, exames básicos e orientações para seu pet",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Truck,
    title: "Transporte pet",
    description:
      "Coleta e entrega seguras com veículo preparado para conforto e tranquilidade",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
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
