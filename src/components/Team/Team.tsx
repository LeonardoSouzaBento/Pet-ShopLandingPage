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
        subtitle="Somos um pet shop que acredita que cada animal merece cuidado, afeto e atenção especial. Aqui, seu pet é tratado como parte da família. Nossa equipe é treinada para oferecer o melhor atendimento, sempre com muito carinho e dedicação."
        subtitleStyles="lg:hidden"
      />
      <SectionWrapper>
        <div className={``}>
          <TeamGrid members={teamMembers} />
          <div className={`lg:-order-1 grid gap-6
            lg:grid-cols-[218px_auto] bg-white p-8`}>
            <TeamImage />
            <TeamStats />
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
