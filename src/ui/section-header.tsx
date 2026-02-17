import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  cssWrapper?: string;
  cssSubtitle?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  cssWrapper = '',
  cssSubtitle = '',
}: SectionHeaderProps) => {
  return (
    <div className={cn(`text-center mb-8 fade-in`, cssWrapper)}>
      <h3 className={`text-card-foreground px-3.5`}>{title}</h3>

      {subtitle && (
        <h5 className={cn(`text-muted-foreground max-w-2xl mx-auto pt-2 px-6`, cssSubtitle)}>
          {subtitle}
        </h5>
      )}

      <div className={`w-32 h-0.75 bg-primary-300 mx-auto rounded-full mt-4`} />
    </div>
  );
};
