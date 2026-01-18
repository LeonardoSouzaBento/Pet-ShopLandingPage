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
  wrapperIcon: `w-16 h-16 -mt-12 mb-5.5 rounded-2xl flex items-center justify-center 
  bounce-icon shadow-primary-soft mx-auto`,
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
      <CardContent className={`p-8 text-center bg-transparent`}>
        <div className={`${css.wrapperIcon} ${bgColor}`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>

        <h5 className={css.title}>{title}</h5>
        <p>{description}</p>
      </CardContent>
    </div>
  );
}
