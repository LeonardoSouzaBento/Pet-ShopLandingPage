interface DifferentialItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  yellowStyle?: boolean;
  description?: string;
}

const css = {
  wrapper: `pr-5 pl-2 py-2 px-2 md:py-3 flex lg:items-center gap-4
  lg:h-22 xl:flex-row xl:py-0 hover:shadow-sm border 
  transition-all duration-200 rounded-xl`,
  wrapperIcon: `shrink-0 size-12 relative rounded-full flex items-center justify-center`,
  containerText: `h-full flex flex-col gap-1 items-start justify-center`,
  title: `text-card-foreground`,
  description: `text-card-foreground/75 leading-tight pb-1`,
};

export default function DifferentialItem({
  icon: Icon,
  title,
  delay,
  yellowStyle = true,
  description,
}: DifferentialItemProps) {
  return (
    <div
      className={`${css.wrapper} ${yellowStyle ? 'border-primary/25' : 'border-secondary/25'}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className={`${css.wrapperIcon} ${!yellowStyle ? 'bg-secondary/10' : 'bg-primary/10'}`}>
        <Icon
          strokeWidth={2.4}
          className={`size-5.5 ${yellowStyle ? 'text-primary' : 'text-secondary'}`}
        />
      </div>

      <div className={css.containerText}>
        <h6 className={css.title}>{title}</h6>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}
