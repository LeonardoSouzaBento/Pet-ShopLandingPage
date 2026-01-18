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
      <h3 className={`text-brown px-3.5`}>{title}</h3>

      {subtitle && (
        <h5
          className={`text-muted-foreground max-w-2xl mx-auto pt-0.5 px-6 ${subtitleStyles}`}
        >
          {subtitle}
        </h5>
      )}

      <div
        className={`w-24 h-1 bg-primary-300 mx-auto rounded-full mt-6`}
      />
    </div>
  );
};
