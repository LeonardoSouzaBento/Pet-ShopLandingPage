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
      <h3 className={`text-secondary-900 px-3.5`}>{title}</h3>

      {subtitle && (
        <h5 className={cn(`text-secondary-1000/50 mx-auto pt-2 px-6`, cssSubtitle)}>
          {subtitle}
        </h5>
      )}

      <div className={`w-1/8 h-0.75 bg-secondary-950/18 mx-auto rounded-full mt-4`} />
    </div>
  );
};
