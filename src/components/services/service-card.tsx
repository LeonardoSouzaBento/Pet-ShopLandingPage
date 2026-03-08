import { CardContent } from '@/ui/index';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'text-primary' | 'text-secondary';
  bgColor: string;
  delay: number;
}

const css = {
  wrapper: `transition-all duration-200 slide-up relative rounded-2xl
      text-card-foreground shadow-sm hover: bg-white`,
  iconWrapper: `size-16 -mt-12 mb-5.5 rounded-lg border flex items-center justify-center 
  bounce-icon shadow-primary-soft mx-auto shrink-0`,
  title: `text-foreground mb-3 tracking-normal`,
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  delay,
}: ServiceCardProps) {
  return (
    <div className={`${css.wrapper}`} style={{ animationDelay: `${delay}s` }}>
      <CardContent className={`p-8 bg-transparent gap-3!`}>
        <div className={`${css.iconWrapper} ${bgColor}`}>
          <Icon className={`size-8 shrink-0 ${color}`} />
        </div>

        <h5 className={css.title}>{title}</h5>
        <p className="text-left border bg-red-500">{description}</p>
      </CardContent>
    </div>
  );
}
