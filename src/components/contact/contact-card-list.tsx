import { Button } from '@/ui';
import { openWhatsApp } from '@/utils/whatsappUtils';
import ContactCard from './contact-card';

const ContactCardList = () => {
  return (
    <div className={`space-y-6 -order-1 lg:order-2`}>
      <div className={`space-y-4 slide-up`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4`}>
          <ContactCard icon="home_pin" iconStyles="text-[25px]!" title="Endereço">
            Rua Itapecerica, 123 – Centro
            <br />
            Itapecerica
          </ContactCard>

          <ContactCard icon="call" iconStyles="text-[22.5px]!" title="Telefone / WhatsApp">
            (34) 98412-5832
          </ContactCard>
        </div>

        <ContactCard icon="schedule" iconStyles="text-[22px]!" title="Horário de atendimento">
          Segunda a Sexta – 9h às 18h • Sábados – 8h às 14h
        </ContactCard>
      </div>

      <Button
        size="lg"
        onClick={() => openWhatsApp('Olá! Gostaria de agendar um horário.')}
        className={`h-12 w-full px-6 box-border bg-primary text-primary-foreground rounded-full 
        shadow-lg hover:shadow-md transition-all
        tracking-normal `}>
        Chamar no WhatsApp
      </Button>
    </div>
  );
};

export default ContactCardList;
