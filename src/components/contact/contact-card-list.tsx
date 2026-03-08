import { HeroButton } from "../hero";
import ContactCard from "./contact-card";

const ContactCardList = () => {
  return (
    <div className={`space-y-6 -order-1 lg:order-2`}>
      <div className={`space-y-4 slide-up`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4`}>
          <ContactCard
            icon="call"
            iconStyles="text-[22.5px]!"
            title="Telefone / WhatsApp"
          >
            (34) 98412-5832
          </ContactCard>

          <ContactCard
            icon="home_pin"
            iconStyles="text-[25px]!"
            title="Endereço"
          >
            Rua Itapecerica, 123 – Centro
            <br />
            Itapecerica
          </ContactCard>
        </div>

        <ContactCard
          icon="schedule"
          iconStyles="text-[22px]!"
          title="Horário de atendimento"
        >
          Segunda a Sexta – 9h às 18h <br /> Sábados – 8h às 14h
        </ContactCard>
      </div>

      <div className="flex justify-center">
        <HeroButton className="w-full max-w-xl mx-auto" />
      </div>
    </div>
  );
};

export default ContactCardList;
