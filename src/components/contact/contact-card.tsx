import type { ReactNode } from "react";

interface ContactCardProps {
  icon: string;
  iconStyles?: string;
  title: string;
  children: ReactNode;
}

const ContactCard = ({
  icon,
  iconStyles,
  title,
  children,
}: ContactCardProps) => {
  return (
    <div
      className={`flex gap-[1cap] p-6 bg-card rounded-2xl shadow-md hover: 
    transition-all duration-200`}
    >
      <div className={`shrink-0 flex items-start`}>
        <div
          className={`w-11 h-11 rounded-full bg-primary-50/75
            flex items-center justify-center mt-ex-offset`}
        >
          <span
            className={`material-symbols-rounded text-primary ${iconStyles}`}
          >
            {icon}
          </span>
        </div>
      </div>

      <div>
        <h6 className={`text-muted-foreground mb-1 text-sm font-medium uppercase`}>{title}</h6>
        <p className="text-lg font-bold leading-tight text-primary-900">{children}</p>
      </div>
    </div>
  );
};

export default ContactCard;
