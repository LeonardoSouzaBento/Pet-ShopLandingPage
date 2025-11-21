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
    <div className={`grid mb-6 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-6 `}>
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
