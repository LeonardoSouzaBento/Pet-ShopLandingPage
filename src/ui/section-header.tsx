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
  subtitleStyles = "",
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-10 fade-in ${wrapperStyles}`}>
      <h2 className={`text-brown mb-4 px-3.5`}>{title}</h2>

      {subtitle && (
        <p
          className={`text-xl text-muted-foreground max-w-2xl mx-auto px-3.5 ${subtitleStyles}`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`w-24 h-1 bg-muted-foreground mx-auto rounded-full mt-6`}
      />
    </div>
  );
};
