import { Heart, MapPin, Phone, Clock } from 'lucide-react';
import { ContactInfoItem } from './home-footer/contact-info-item';

const css = {
  footer: `w-full  text-background`,
  container: `max-w-max mx-auto p-5 pb-3 flex justify-start min-[540px]:justify-center 
  min-[540px]:text-center flex-wrap lg:gap-5 sm:text-left`,
  icon: `size-5 shrink-0 mb-1`,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${css.footer} bg-linear-to-br from-[#007858] to-[hsl(165,100%,10%)]`}>
      <div className={css.container}>
        <ContactInfoItem icon="home_pin" title="Endereço">
          <>
            Rua Itapecerica, 123 – Centro <br />
            Itapecerica
          </>
        </ContactInfoItem>

        <ContactInfoItem icon="call" iconSize="21px" title="Contato">
          (34) 98412-5832
        </ContactInfoItem>

        <ContactInfoItem
          wrapperStyle="min-[494px]:pt-1 min-[805px]:pt-5"
          icon="schedule"
          iconSize="20px"
          title="Horário de atendimento">
          Seg a Sex: 9h às 18h • Sábados: 8h às 14h
        </ContactInfoItem>
      </div>

      <div
        className={`px-8 py-7.5 border-t border-background/24 text-center 
          text-background/75 rounded-none text-[0.92485em]`}>
        <p className={`font-extralight text-amber-50/80`}>
          © {currentYear} O Melhor Pet Shop. Todos os direitos reservados.
        </p>
        <p className={`mt-2 font-extralight text-amber-50/80`}>CNPJ: 45.987.654/0001-22</p>
      </div>
    </footer>
  );
};

export default Footer;
