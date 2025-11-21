import DecorativeBlob from "@/components/DecorativeBlob";
import { SectionHeader } from "@/components/ui/section-header";
import { DifferentialsList } from "./components/DifferentialsList";
import { ServicesGrid } from "./components/ServicesGrid";
import {
  Calendar,
  Droplet,
  Home,
  Scissors,
  Shield,
  Sparkles,
  Stethoscope,
  Truck,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const services = [
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

const differentials = [
  {
    icon: Home,
    title: "Ambiente acolhedor",
  },
  {
    icon: Sparkles,
    title: "Produtos de alta qualidade",
  },
  {
    icon: Calendar,
    title: "Agendamentos flexíveis",
  },
  {
    icon: Shield,
    title: "Espaço seguro e higienizado",
  },
];

export default function ServicesSection() {
  return (
    <section
      className={`py-10 px-3 sm:px-6 md:px-8 lg:px-12 bg-section-light relative overflow-hidden`}
    >
      <DecorativeBlob position="top-right" color="primary" size="lg" />
      <DecorativeBlob position="bottom-left" color="secondary" size="md" />

      <SectionHeader
        title="O que nós oferecemos?"
        subtitle="Tudo o que seu amigo precisa para ficar bonito, saudável e feliz."
        wrapperStyles="relative z-10"
      />
      <SectionWrapper styles="lg:max-w-none">
        <DifferentialsList differentials={differentials} />
        <ServicesGrid services={services} />
      </SectionWrapper>
    </section>
  );
}
