import { ContactCard } from "./index";
import { HeroButton } from "../hero";

const contactGridCards = [
  {
    icon: "call",
    iconStyles: "text-[22.5px]!",
    title: "Telefone / WhatsApp",
    content: "(34) 98412-5832",
  },
  {
    icon: "home_pin",
    iconStyles: "text-[25px]!",
    title: "Endereço",
    content: (
      <>
        Rua Itapecerica, 123 – Centro
        <br />
        Itapecerica
      </>
    ),
  },
];

export const ContactCardList = () => {
  return (
    <div className={`space-y-6 -order-1 lg:order-2`}>
      <div className={`space-y-4 slide-up`}>
        <div className={`grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] lg:grid-cols-1 gap-4`}>
          {contactGridCards.map((card, i) => (
            <ContactCard
              key={i}
              icon={card.icon}
              iconStyles={card.iconStyles}
              title={card.title}
            >
              {card.content}
            </ContactCard>
          ))}
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

