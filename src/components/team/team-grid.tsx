import type { TeamMember } from '../team.tsx';
import { Card, CardContent } from '@/ui/card.tsx';

interface Props {
  members: TeamMember[];
}

export default function TeamGrid({ members }: Props) {
  return (
    <div className={`grid mb-6 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 `}>
      {members.map((member, index) => (
        <Card
          key={index}
          className={`bg-white rounded-2xl border-none shadow-sm hover: 
        transition-all duration-200 slide-up`}
          style={{ animationDelay: `${index * 0.1}s` }}>
          <CardContent className={`p-6 text-center`}>
            <div
              className={`size-28 rounded-full bg-linear-to-br from-primary/50 
          to-primary flex items-center justify-center mx-auto -mt-12 mb-6 shadow-soft
          overflow-hidden`}>
              <img
                src={member.image}
                alt={member.name}
                className={`size-full object-cover scale-110 object-top`}
              />
            </div>

            <h6 className={`mb-ex-offset`}>{member.name}</h6>
            <p className={`font-semibold mb-2`}>{member.role}</p>
            <p>{member.experience}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
