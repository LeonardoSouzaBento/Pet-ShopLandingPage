import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "medium" | "none";
}

export function Section({ children, className, variant = "light" }: SectionProps) {
  const bgClass = {
    light: "bg-section-light",
    medium: "bg-section-medium",
    none: "",
  }[variant];

  return (
    <section className={cn("py-10 px-3 sm:px-6 md:px-8 lg:px-12", bgClass, className)}>
      {children}
    </section>
  );
}
