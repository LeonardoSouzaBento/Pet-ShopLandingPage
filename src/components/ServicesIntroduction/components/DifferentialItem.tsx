interface DifferentialItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  yellowStyle?: boolean;
  description?: string;
}

const css = {
  wrapper: `pr-5 pl-2 py-2 px-2 md:py-3 flex max-[375px]:gap-0 gap-2 lg:items-center 
  lg:h-22 xl:flex-row xl:py-0 xl:rounded-full hover:shadow-md border 
  rounded-full transition-all duration-200`,
  containerIcon: `shrink-0 size-16 relative`,
  /* Icone */
  wrapperIcon: `size-full rounded-full flex items-center justify-center 
  absolute -top-4 -left-4`,
  containerText: `h-full flex flex-col items-start justify-center`,
  /* Titulo */
  h3: `text-card-foreground pb-px font-medium leading-tight mb-1`,
  /* Texto */
  p: `leading-tight text-card-foreground/75 
  text-[0.92485em] font-normal mb-0.5`,
  button: ``,
};

export function DifferentialItem({
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
        <h3 className={css.h3}>{title}</h3>
        <p className={css.p}>{description}</p>
      </div>
    </div>
  );
}
