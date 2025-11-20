interface DifferentialItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  yellowStyle?: boolean;
}

export function DifferentialItem({
  icon: Icon,
  title,
  delay,
  yellowStyle = true,
}: DifferentialItemProps) {
  
  return (
    <div
      className={`pr-5 pl-2 px-2 flex max-[375px]:gap-0 gap-2.5 lg:items-center lg:h-20 xl:flex-row xl:py-0 
        xl:rounded-full hover:shadow-lg border rounded-full transition-all duration-200`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`shrink-0 size-16 relative`}>
        <div
          className={`size-full rounded-full flex items-center justify-center 
            absolute -top-4 -left-4 ${!yellowStyle ? "bg-secondary/10" : "bg-primary/10"}`}
        >
          <Icon
            strokeWidth={2.4}
            className={`w-6 h-6 ${
              yellowStyle ? "text-primary" : "text-secondary"
            }`}
          />
        </div>
      </div>

      <div className={`flex items-center`}>
        <h3 className={`text-card-foreground pb-px font-medium leading-tight`}>
          {title}
        </h3>
      </div>
    </div>
  );
}
