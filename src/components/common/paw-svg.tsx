import { cn } from "@/lib/utils";
import { PawPrint } from "lucide-react";

interface PawIconProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const PawIcon = ({
  position = "top-left",
  color = "primary",
  size = "md",
  className,
}: PawIconProps) => {
  const positions = {
    "top-left": "-top-8 -left-8",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-0 left-1.5",
    "bottom-right": "bottom-0 right-0",
  };

  const organicRotations = {
    "top-left": "-rotate-60",
    "top-right": "-rotate-90",
    "bottom-left": "rotate-10",
    "bottom-right": "rotate-45",
  };

  const sizes = {
    sm: "size-40",
    md: "size-48",
    lg: "size-56",
  };

  const colors = {
    primary: "var(--color-primary-100)",
    secondary: "var(--color-secondary-100)",
  };

  return (
    <PawPrint
      className={cn(
        `absolute z-0 ${positions[position]} ${sizes[size]} ${organicRotations[position]} opacity-16 pointer-events-none`,
        className,
      )}
      color={colors[color]}
      fill={colors[color]}
      strokeWidth={1.75}
    />
  );
};
