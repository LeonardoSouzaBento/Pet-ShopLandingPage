import { Icon } from '@/ui/index';
import type { LucideIcon } from 'lucide-react';

interface DifferentialItemProps {
  icon: LucideIcon;
  title: string;
  delay: number;
  yellowStyle?: boolean;
  description?: string;
}

const css = {
  wrapper: `p-4 flex gap-3 hover:shadow-sm border 
  transition-all duration-200 rounded-xl`,
  header: `flex items-center gap-3 mb-2`,
  iconWrapper: `shrink-0 size-12 relative rounded-lg flex items-center justify-center`,
  title: `text-card-foreground mb-1`,
  description: `text-card-foreground/75 leading-tight`,
};

export default function DifferentialItem({
  icon: IconComponent,
  title,
  delay,
  yellowStyle = true,
  description,
}: DifferentialItemProps) {
  const iconColor = yellowStyle ? 'text-primary-600 bg-primary-50/75' : 'text-secondary-500 bg-secondary-50/75';
  return (
    <div
      className={`${css.wrapper} ${yellowStyle ? 'border-primary/25' : 'border-secondary/25'}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="h-full">
        <div className={`${css.iconWrapper} ${iconColor}`}>
          <Icon Icon={IconComponent} size="xl" strokeWidth="thin" />
        </div>
      </div>
      <div className="-mt-1">
        <h6 className={css.title}>{title}</h6>
        <p className={css.description}>{description}.</p>
      </div>
    </div>
  );
}
