import { TeamMemberCard } from "./TeamMemberCard.tsx";
import type { TeamMember } from "../Team";

interface Props {
  members: TeamMember[];
}

export function TeamGrid({ members }: Props) {
  return (
    <div className={`grid mb-6 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 `}>
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          experience={member.experience}
          index={index}
          image={member.image}
        />
      ))}
    </div>
  );
}
