const iconSizes = {
  xs: '0.889em',
  sm: '0.943em',
  base: '1em',
  md: '1.061em',
  lg: '1.125em',
  xl: '1.266em',
  '2xl': '1.424em',
  '3xl': '1.602em',
  h6: '1.125em',
  h5: '1.266em',
  h4: '1.424em',
  h3: '1.602em',
};

interface IconProps {
  icon: string;
  size?: string;
  fill?: number;
  weight?: number;
  margin?: string;
  className?: string;
}

export const MuiIcon = ({
  icon,
  size,
  fill = 0,
  weight = 600,
  margin = '0',
  className,
}: IconProps) => {
  return (
    <div className="h-3 inline-flex justify-center items-center overflow-visible">
      <span
        className={`material-symbols-rounded ${className}`}
        style={{
          fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}`,
          fontSize: iconSizes[size as keyof typeof iconSizes] || size || '1em',
        }}>
        {icon}
      </span>
    </div>
  );
};
