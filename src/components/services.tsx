import { PawIcon } from "@/components/common/paw-svg";
import DifferentialsList from "@/components/services/differentials-list";
import { Differential } from "@/types";
import { Section, SectionHeader, SectionWrapper } from "@/ui/index";
import { Calendar, Home, Shield, Sparkles } from "lucide-react";
import { ServicesGrid } from "./services/services";

const differentials: Differential[] = [
  {
    icon: Home,
    title: "Ambiente acolhedor",
    description: "Espaço pensado para o bem estar animal",
  },
  {
    icon: Sparkles,
    title: "Produtos de alta qualidade",
    description: "Marcas reconhecidas e confiáveis",
  },
  {
    icon: Calendar,
    title: "Agendamentos flexíveis",
    description: "Horários que se ajustam à sua rotina",
  },
  {
    icon: Shield,
    title: "Espaço seguro e higienizado",
    description: "Mantemos o ambiente organizado e limpo",
  },
];

export function Services() {
  return (
    <Section variant="light" className={`relative overflow-hidden pt-9.25`}>
      <PawIcon position="top-right" color="primary" size="lg" />
      <PawIcon position="top-left" color="secondary" size="sm" />
      <PawIcon position="bottom-left" color="secondary" size="md" />

      <SectionHeader
        title="O que oferecemos?"
        subtitle="Tudo o que seu amigo precisa para ficar bonito, saudável e feliz"
        cssWrapper="relative z-10"
      />
      <SectionWrapper className="lg:max-w-none border border-border/33 bg-white/75 shadow-md hover:shadow-lg rounded-2xl mb-6">
        <DifferentialsList differentials={differentials} />
      </SectionWrapper>
      <SectionWrapper>
        <ServicesGrid />
      </SectionWrapper>
    </Section>
  );
}
