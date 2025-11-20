"use client";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface Props {
  name: string;
  role: string;
  experience: string;
  index: number;
}

export function TeamMemberCard({ name, role, experience, index }: Props) {
  return (
    <Card
      className={`bg-white rounded-2xl border-none shadow-soft hover:shadow-hover 
        transition-all slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className={`p-6 text-center`}>
        <div className={`w-24 h-24 rounded-full bg-linear-to-br from-primary 
          to-secondary flex items-center justify-center mx-auto -mt-12 mb-6 shadow-soft`}>
          <User className={`w-12 h-12 text-white`} />
        </div>

        <h3 className={`text-card-foreground mb-2`}>{name}</h3>
        <p className={`text-primary font-semibold mb-3`}>{role}</p>
        <p className={`text-muted-foreground leading-relaxed`}>{experience}</p>
      </CardContent>
    </Card>
  );
}
