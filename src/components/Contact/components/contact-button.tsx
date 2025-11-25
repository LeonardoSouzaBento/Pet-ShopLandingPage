import { Button } from "@/components/ui/button";

const ContactButton = () => {
  const handleWhatsApp = () => {
    const phone = "5534982125832";
    window.open(
      `https://wa.me/${phone}?text=Olá! Gostaria de agendar um horário.`,
      "_blank"
    );
  };

  return (
    <Button
      size="lg"
      onClick={handleWhatsApp}
      className={`h-12 w-full px-6 box-border bg-primary text-primary-foreground rounded-full 
        shadow-lg hover:shadow-md transition-all text-[1.15607em] leading-none
        tracking-normal `}
    >
      Chamar no WhatsApp
    </Button>
  );
};

export default ContactButton;
