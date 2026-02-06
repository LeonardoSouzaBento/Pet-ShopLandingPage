import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';

type StrokeValue = keyof typeof weights;
/* Ajuste depois */
const weights = {
  thin: 2.25,
  light: 2.35,
  normal: 2.6, // valor padrão
  semibold: 2.67,
  bold: 2.8,
  extrabold: 3,
};

type SizeValue = keyof typeof iconSizes;

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

interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
  Icon: LucideIconType;
  size?: SizeValue | string;
  strokeWidth?: StrokeValue | string;
}

export const Icon = ({ Icon, size, className, strokeWidth, fill }: IconProps) => {
  return (
    <div className="h-3 inline-flex justify-center items-center overflow-visible [&_svg]:shrink-0">
      <Icon
        size={iconSizes[size as SizeValue] || size || '1em'}
        strokeWidth={weights[strokeWidth as StrokeValue] || strokeWidth || 2.6}
        className={className}
        fill={fill || 'none'}
      />
    </div>
  );
};
