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
      className={`transition-all duration-200 slide-up relative rounded-2xl
      text-card-foreground shadow-md hover:shadow-hover-md bg-white`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className={`p-8 text-center bg-transparent`}>
        <div
          className={`w-16 h-16 -mt-12 mb-6 ${bgColor} rounded-2xl flex items-center justify-center 
           bounce-icon shadow-soft mx-auto`}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </div>

        <h3 className={`text-card-foreground mb-3 text-[1.1845em] tracking-normal`}>{title}</h3>
        <p className={`text-muted-foreground leading-relaxed `}>{description}</p>
      </CardContent>
    </div>
  );
}
