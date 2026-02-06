import man from '@/assets/man.png';
import woman1 from '@/assets/woman1.png';
import woman2 from '@/assets/woman2.png';
import woman3 from '@/assets/woman3.png';
import { SectionHeader, SectionWrapper, Section } from '@/ui/index';
import { TeamGrid, TeamImage, TeamStats } from './team/index';

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ana Paula',
    role: 'Groomer especializada',
    experience: 'Quatro anos de experiência, ama shih tzus e vira-latas',
    image: woman1,
  },
  {
    name: 'Carlos Henrique',
    role: 'Esteticista de cães e gatos',
    experience: 'Seis anos trabalhando com pets de todas as raças',
    image: man,
  },
  {
    name: 'Juliana Alves',
    role: 'Atendimente experiente',
    experience: 'Especialista em criar ambiente acolhedor para os pets',
    image: woman2,
  },
  {
    name: 'Dra. Sofia Mendes',
    role: 'Veterinária parceira',
    experience: 'Dez anos de experiência em clínica veterinária',
    image: woman3,
  },
];

export default function Team() {
  return (
    <Section variant="medium" className="relative z-2">
      <SectionHeader title="Quem somos" />

      <SectionWrapper>
        <div className={``}>
          <TeamGrid members={teamMembers} />
          <div
            className={`lg:-order-1 grid gap-6
            lg:grid-cols-[280px_auto] xl:grid-cols-[315px_auto] bg-white p-8 shadow-lg`}>
            <TeamImage />
            <TeamStats />
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
