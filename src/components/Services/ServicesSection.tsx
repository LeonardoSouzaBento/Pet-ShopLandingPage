import DecorativeBlob from "@/components/DecorativeBlob";
import bathingImage from "@/assets/bathing-service.jpg";
import { SectionHeader } from "@/components/ui/section-header";
import { ServicesGrid } from "./components/ServicesGrid";
import { DifferentialsList } from "./components/DifferentialsList";

import {
  Droplet,
  Scissors,
  Stethoscope,
  Truck,
  Heart,
  Shield,
  Sparkles,
  Calendar,
  Home,
} from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Banho completo",
    description: "Higiene com produtos especiais para pele e pelos",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Scissors,
    title: "Tosa e estética",
    description: "Tesoura, máquina, laços, hidratação e finalização",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Stethoscope,
    title: "Cuidados veterinários",
    description:
      "Consultas de rotina, check-ups preventivos, vacinas e orientações médicas",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Truck,
    title: "Transporte pet",
    description: "Vamos até você buscar e levar seu pet com segurança",
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
    icon: Shield,
    title: "Espaço seguro e higienizado",
  },
  {
    icon: Calendar,
    title: "Agendamentos flexíveis",
  },
];

export default function ServicesSection() {
  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-light relative overflow-hidden`}>
      <DecorativeBlob position="top-right" color="primary" size="lg" />
      <DecorativeBlob position="bottom-left" color="secondary" size="md" />

      <SectionHeader
        title="O que nós oferecemos"
        subtitle="Tudo o que seu amigo precisa para ficar bonito, saudável e feliz."
        wrapperStyles="relative z-10"
      />

      <ServicesGrid services={services} />

      <div className={`mb-6 order-2 lg:order-1 fade-in `}>
        <div className={`rounded-xl overflow-hidden shadow-2xl`}>
          <img
            src={bathingImage}
            alt="Pet relaxado durante o banho"
            className={`w-full h-full object-cover bg-muted`}
            loading="lazy"
          />
        </div>
      </div>

      <DifferentialsList differentials={differentials} />
    </section>
  );
}
