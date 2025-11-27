import { MapPin, Phone, Clock } from "lucide-react";
import ContactCard from "./ContactCard";
import ContactButton from "./contact-button";

const iconStyles = `size-6 text-primary`;

const ContactCardsList = () => {
  return (
    <div className={`space-y-8 -order-1 lg:order-2`}>
      <div className={`space-y-5 slide-up`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5`}>
          <ContactCard
            icon="home_pin"
            iconStyles="text-[25px]!"
            title="Endereço"
          >
            Rua Itapecerica, 123 – Centro
            <br />
            Itapecerica
          </ContactCard>

          <ContactCard
            icon="call"
            iconStyles="text-[22.5px]!"
            title="Telefone / WhatsApp"
          >
            (34) 98412-5832
          </ContactCard>
        </div>

        <ContactCard
          icon="schedule"
          iconStyles="text-[22px]!"
          title="Horário de atendimento"
        >
          Segunda a Sexta – 9h às 18h • Sábados – 8h às 14h
        </ContactCard>
      </div>

      <ContactButton />
    </div>
  );
};

export default ContactCardsList;
