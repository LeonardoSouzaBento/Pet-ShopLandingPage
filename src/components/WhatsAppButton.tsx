import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = "5500000000000"; // Substituir pelo número real com código do país
    const message = "Olá! Gostaria de saber mais sobre os serviços do Pet Shop.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-hover-lg transition-all hover:scale-110`}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className={`w-8 h-8`} fill="currentColor" />
    </Button>
  );
};

export default WhatsAppButton;
