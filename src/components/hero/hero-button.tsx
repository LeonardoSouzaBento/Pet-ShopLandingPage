import { Button } from '@/ui/button';
import { openWhatsApp } from '@/utils/whatsappUtils';

const HeroButton = () => {
  return (
    <Button
      size="lg"
      onClick={() => openWhatsApp('Olá! Gostaria de agendar um horário.')}
      className="min-w-56 bg-linear-to-r from-orange-500 to-orange-400 
          text-secondary-foreground rounded-full 
          shadow-secondary transition-all hover:scale-105">
      Fale Conosco
    </Button>
  );
};

export default HeroButton;
