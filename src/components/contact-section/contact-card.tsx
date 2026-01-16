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
      className={`flex gap-4.5 p-6 bg-card rounded-2xl shadow-md hover:shadow-hover-md 
    transition-all duration-200`}
    >
      <div className={`shrink-0 flex items-center`}>
        <div
          className={`w-11 h-11 rounded-full bg-section-medium flex items-center justify-center`}
        >
          <span
            className={`material-symbols-rounded text-primary ${iconStyles}`}
          >
            {icon}
          </span>
        </div>
      </div>

      <div>
        <h3 className={`text-card-foreground mb-2`}>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ContactCard;
