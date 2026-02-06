import type { TeamMember } from '../team.tsx';
import { Card, CardContent } from '@/ui/card.tsx';

interface Props {
  members: TeamMember[];
}

export default function TeamGrid({ members }: Props) {
  return (
    <div className={`grid mb-6 sm:grid-cols-2 lg:grid-cols-4 gap-4 `}>
      {members.map((member, index) => (
        <Card
          key={index}
          className={`bg-white rounded-2xl border-none shadow-sm hover: 
        transition-all duration-200 slide-up`}
          style={{ animationDelay: `${index * 0.1}s` }}>
          <CardContent className={`p-6`}>
            <div className={`flex gap-4 lg:flex-col`}>
              <div className="flex items-center justify-center">
                <div
                  className={`size-24 rounded-full flex items-center justify-center
                  shadow-soft overflow-hidden relative shrink-0`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`size-full object-cover scale-112 object-top relative z-1`}
                  />
                </div>
              </div>
              <div className="-mt-1 flex flex-col items-start justify-center">
                <h5 className='mb-1'>{member.name}</h5>
                <h6 className={`mb-2 text-muted-foreground leading-tight`}>{member.role}</h6>
                <p className="hidden min-[375px]:inline-block text-muted-foreground sm:hidden lg:block">
                  {member.experience}.
                </p>
              </div>
            </div>
            <p
              className="mt-3 inline-block min-[375px]:hidden sm:inline-block lg:hidden
            text-muted-foreground">
              {member.experience}.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
