import { CardContent } from '@/ui/card';

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
      text-card-foreground shadow-sm hover:shadow-hover-sm bg-white`,
  wrapperIcon: `w-16 h-16 -mt-12 mb-5.5 rounded-2xl flex items-center justify-center 
  bounce-icon shadow-primary-soft mx-auto`,
  h3: `text-foreground mb-3 text-[1.1845em] tracking-normal`,
  p: `leading-relaxed`,
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

        <h3 className={css.h3}>{title}</h3>
        <p className={css.p}>{description}</p>
      </CardContent>
    </div>
  );
}
