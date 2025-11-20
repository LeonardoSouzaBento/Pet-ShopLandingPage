interface DifferentialItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

export function DifferentialItem({
  icon: Icon,
  title,
  description,
  delay,
}: DifferentialItemProps) {
  return (
    <div
      className={`flex gap-4 hover:shadow-lg border transition-all duration-200`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`shrink-0`}>
        <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-primary`} />
        </div>
      </div>

      <div className="flex items-center">
        <h3 className={`text-card-foreground pb-px font-medium leading-tight`}>{title}</h3>
      </div>
    </div>
  );
}
