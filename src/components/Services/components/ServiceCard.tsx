import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  delay: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  delay,
}: ServiceCardProps) {
  return (
    <div
      className={`transition-all slide-up relative rounded-2xl
      border text-card-foreground shadow-sm`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className={`p-8 text-center bg-transparent`}>
        <div
          className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center -mt-12 mb-6 bounce-icon shadow-soft mx-auto`}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </div>

        <h3 className={`font-bold text-card-foreground mb-3`}>{title}</h3>
        <p className={`text-muted-foreground leading-relaxed`}>{description}</p>
      </CardContent>
    </div>
  );
}
