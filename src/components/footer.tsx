import { ContactInfoItem } from './footer/contact-info-item';

const css = {
  footer: `w-full  text-background`,
  container: `max-w-max mx-auto px-2 py-4 pt-3.5 flex justify-start min-[540px]:justify-center 
  min-[540px]:text-center flex-wrap lg:gap-4 sm:text-left`,
  icon: `size-5 shrink-0 mb-1`,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${css.footer} bg-linear-to-br from-[#007858] to-[hsl(165,100%,10%)]`}>
      <div className={css.container}>
        <ContactInfoItem icon="home_pin" title="Endereço">
          <>
            Rua Itapecerica, 123 – Centro <br className="lg:hidden" />
            Itapecerica
          </>
        </ContactInfoItem>

        <ContactInfoItem icon="call" iconSize="21px" title="Contato">
          (34) 98412-5832
        </ContactInfoItem>

        <ContactInfoItem icon="schedule" iconSize="20px" title="Horário de atendimento">
          Seg a Sex: 9h às 18h • Sábados: 8h às 14h
        </ContactInfoItem>
      </div>

      <div
        className={`w-full px-8 py-8 flex flex-col items-center border-t border-primary-50/16
          text-primary-50/96 rounded-none small-text [&>p]:text-center 
          [&>p]:font-light`}>
        <p>© {currentYear} O Melhor Pet Shop. Todos os direitos reservados.</p>
        <p className={`mt-2`}>CNPJ: 45.987.654/0001-22</p>
      </div>
    </footer>
  );
};

export default Footer;
