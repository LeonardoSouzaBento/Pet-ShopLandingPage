"use client";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface Props {
  name: string;
  role: string;
  experience: string;
  index: number;
  image: string;
}

export function TeamMemberCard({ name, role, experience, index, image }: Props) {
  return (
    <Card
      className={`bg-white rounded-2xl border-none shadow-sm hover:shadow-hover-sm 
        transition-all duration-200 slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className={`p-6 text-center`}>
        <div className={`size-28 rounded-full bg-linear-to-br from-primary/50 
          to-primary flex items-center justify-center mx-auto -mt-12 mb-6 shadow-soft
          overflow-hidden`}>
          <img src={image} alt={name} className={`size-full object-cover scale-110 object-top`} />
        </div>

        <h3 className={`mb-3`}>{name}</h3>
        <p className={`font-semibold mb-3`}>{role}</p>
        <p className={`leading-relaxed`}>{experience}</p>
      </CardContent>
    </Card>
  );
}
