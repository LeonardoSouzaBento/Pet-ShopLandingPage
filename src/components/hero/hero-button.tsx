import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { openWhatsApp } from "@/utils/whatsappUtils";

export const HeroButton = ({ className }: { className?: string }) => {
  return (
    <Button
      size="lg"
      onClick={() => openWhatsApp("Olá! Gostaria de agendar um horário.")}
      className={cn(
        `min-w-56 bg-linear-to-br from-[hsl(25,80%,49%)] via-[hsl(28,80%,49%)] to-[hsl(40,80%,49%)] 
          text-secondary-foreground rounded-full 
          shadow-secondary transition-all hover:scale-105`,
        className
      )}
    >
      Fale Conosco
    </Button>
  );
};
