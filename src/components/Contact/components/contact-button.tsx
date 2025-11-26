import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/utils/whatsappUtils";

const ContactButton = () => {
  return (
    <Button
      size="lg"
      onClick={() =>
        openWhatsApp(
          "Olá! Gostaria de agendar um horário."
        )
      }
      className={`h-12 w-full px-6 box-border bg-primary text-primary-foreground rounded-full 
        shadow-lg hover:shadow-md transition-all text-[1.15607em] leading-none
        tracking-normal `}
    >
      Chamar no WhatsApp
    </Button>
  );
};

export default ContactButton;
