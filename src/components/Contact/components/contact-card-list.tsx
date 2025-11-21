import { MapPin, Phone, Clock } from "lucide-react";
import ContactCard from "./ContactCard";
import ContactButton from "./contact-button";

const ContactCardsList = () => {
  return (
    <div className={`space-y-8 -order-1 lg:order-2`}>
      <div className={`space-y-5 slide-up`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5`}>
          <ContactCard
            icon={<MapPin className={`w-6 h-6 text-primary`} />}
            title="Endereço"
          >
            Rua Exemplo, 123 – Centro<br />
            Sua Cidade
          </ContactCard>

          <ContactCard
            icon={<Phone className={`w-6 h-6 text-primary`} />}
            title="Telefone / WhatsApp"
          >
            (XX) XXXXX-XXXX
          </ContactCard>
        </div>

        <ContactCard
          icon={<Clock className={`w-6 h-6 text-primary`} />}
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
