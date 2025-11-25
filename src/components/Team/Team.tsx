import { SectionHeader } from "@/components/ui/section-header";
import { TeamStats } from "./components/TeamStats.tsx";
import { TeamGrid } from "./components/TeamGrid.tsx";
import { TeamImage } from "./components/TeamImage.tsx";
import SectionWrapper from "../ui/SectionWrapper.tsx";
import { Section } from "@/components/ui/Section";

const teamMembers = [
  {
    name: "Ana Paula",
    role: "Groomer especializada",
    experience: "4 anos de experiência, ama shih tzus e vira-latas",
  },
  {
    name: "Carlos Henrique",
    role: "Esteticista de cães e gatos",
    experience: "6 anos trabalhando com pets de todas as raças",
  },
  {
    name: "Juliana Alves",
    role: "Atendimento e carinhos ilimitados",
    experience: "Especialista em criar ambiente acolhedor para os pets",
  },
  {
    name: "Dra. Sofia Mendes",
    role: "Veterinária parceira",
    experience: "10 anos de experiência em clínica veterinária",
  },
];

export default function Team() {
  return (
    <Section variant="medium">
      <SectionHeader
        title="Quem somos"
      />

      <SectionWrapper>
        <div className={``}>
          <TeamGrid members={teamMembers} />
          <div
            className={`lg:-order-1 grid gap-6
            lg:grid-cols-[280px_auto] xl:grid-cols-[315px_auto] bg-white p-8 shadow-lg`}
          >
            <TeamImage />
            <TeamStats />
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
