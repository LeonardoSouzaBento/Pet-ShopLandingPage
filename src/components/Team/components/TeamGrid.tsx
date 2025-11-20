import { TeamMemberCard } from "./TeamMemberCard.tsx";

interface Member {
  name: string;
  role: string;
  experience: string;
}

interface Props {
  members: Member[];
}

export function TeamGrid({ members }: Props) {
  return (
    <div className={`grid min-[500px]:grid-cols-2 lg:grid-cols-2 gap-6 mb-12`}>
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          experience={member.experience}
          index={index}
        />
      ))}
    </div>
  );
}
