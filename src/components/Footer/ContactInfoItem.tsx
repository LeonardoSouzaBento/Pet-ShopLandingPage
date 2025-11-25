import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  children: ReactNode;
  wrapperStyle?: string;
  iconSize?: string;
}

const css = {
  wrapper: ``,
  wrapperTitle: `h-max mb-4 flex items-center j-start gap-2.5 min-[540px]:justify-center
   min-[540px]:pr-8 min-[820px]:justify-start`,
  p: `font-light max-w-max min-[540px]:mx-auto min-[820px]:m-0 leading-relaxed text-white/92`,
  button: ``,
  icon: `shrink-0 mt-0.5`,
};

export const ContactInfoItem = ({
  icon,
  title,
  children,
  wrapperStyle,
  iconSize = "23px"
}: ContactInfoItemProps) => {
  return (
    <div className={`p-5 ${wrapperStyle}`}>
      <div className={css.wrapperTitle}>
        <span
          className={`material-symbols-rounded ${css.icon}`}
          style={{ fontSize: iconSize }}
        >
          {icon}
        </span>
        <h3 className={`tracking-normal font-medium`}>{title}</h3>
      </div>

      <p className={`${css.p}`}>{children}</p>
    </div>
  );
};
