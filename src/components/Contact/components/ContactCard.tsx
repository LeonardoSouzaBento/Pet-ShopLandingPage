import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactCard = ({ icon, title, children }: ContactCardProps) => {
  return (
    <div className={`flex gap-4 p-6 bg-card rounded-2xl shadow-md hover:shadow-hover-md transition-all duration-300`}>
      <div className={`shrink-0 flex items-center`}>
        <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
          {icon}
        </div>
      </div>

      <div>
        <h3 className={`font-bold text-card-foreground mb-2`}>{title}</h3>
        <p className={`text-muted-foreground`}>{children}</p>
      </div>
    </div>
  );
};

export default ContactCard;
