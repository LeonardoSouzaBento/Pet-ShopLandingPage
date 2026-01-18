interface DifferentialItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  yellowStyle?: boolean;
  description?: string;
}

const css = {
  wrapper: `pr-5 pl-2 py-2 px-2 md:py-3 flex lg:items-center 
  lg:h-22 xl:flex-row xl:py-0 xl:rounded-full hover:shadow-md border 
  rounded-full transition-all duration-200`,
  containerIcon: `shrink-0 size-16 relative`,
  wrapperIcon: `size-full rounded-full flex items-center justify-center 
  absolute -top-4 -left-4`,
  containerText: `h-full flex flex-col items-start justify-center`,
  title: `text-card-foreground pb-px`,
  description: `text-card-foreground/75 mb-0.5 leading-tight`,
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
      className={`${css.wrapper} ${
        yellowStyle ? "border-primary/25" : "border-secondary/25"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={css.containerIcon}>
        <div
          className={`${css.wrapperIcon} ${
            !yellowStyle ? "bg-secondary/10" : "bg-primary/10"
          }`}
        >
          <Icon
            strokeWidth={2.4}
            className={`w-6 h-6 ${
              yellowStyle ? "text-primary" : "text-secondary"
            }`}
          />
        </div>
      </div>

      <div className={css.containerText}>
        <h6 className={css.title}>{title}</h6>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}
