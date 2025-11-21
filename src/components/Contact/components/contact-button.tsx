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
      className={`w-full py-6 bg-primary text-primary-foreground rounded-full 
        shadow-lg hover:shadow-md transition-all`}
    >
      Chamar no WhatsApp
    </Button>
  );
};

export default ContactButton;
