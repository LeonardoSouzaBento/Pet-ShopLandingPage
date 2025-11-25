type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  wrapperStyles?: string;
  subtitleStyles?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  wrapperStyles = "",
  subtitleStyles = ""
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-10 fade-in ${wrapperStyles}`}>
      <h2 className={`text-foreground mb-4 px-3`}>{title}</h2>

      {subtitle && (
        <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${subtitleStyles}`}>
          {subtitle}
        </p>
      )}

      <div className={`w-24 h-1 bg-primary mx-auto rounded-full mt-6`} />
    </div>
  );
};
