import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  children: ReactNode;
  iconSize?: string;
}

const css = {
  wrapper: `h-max mb-2 flex items-center j-start gap-2 min-[540px]:justify-center
  min-[540px]:pr-8 min-[820px]:justify-start`,
  description: `max-w-max min-[540px]:mx-auto min-[540px]:text-center min-[820px]:m-0 
  min-[820px]:text-left text-primary-50/98`,
  icon: `shrink-0 mt-0.5 text-primary-50/98`,
};

export const ContactInfoItem = ({
  icon,
  title,
  children,
  iconSize = "23px"
}: ContactInfoItemProps) => {
  return (
    <div className={`p-6`}>
      <div className={css.wrapper}>
        <span
          className={`material-symbols-rounded ${css.icon}`}
          style={{ fontSize: iconSize }}
        >
          {icon}
        </span>
        <h6 className={`text-primary-50/98`}>{title}</h6>
      </div>

      <p className={`${css.description}`}>{children}</p>
    </div>
  );
};
