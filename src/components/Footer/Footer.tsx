import { Heart, MapPin, Phone, Clock } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";

const css = {
  footer: `w-full bg-linear-to-tl from-footer-bg to-footer-bg-end text-background`,
  container: `max-w-max mx-auto p-6 pb-3 flex justify-start min-[540px]:justify-center 
  min-[540px]:text-center flex-wrap lg:gap-5 sm:text-left`,
  icon: `size-5 shrink-0 mb-1`,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ContactInfoItem
          icon={<MapPin className={css.icon} strokeWidth={1.7} />}
          title="Endereço"
        >
          <>
            Rua Exemplo, 123 – Centro <br />
            Sua Cidade
          </>
        </ContactInfoItem>

        <ContactInfoItem
          icon={<Phone strokeWidth={1.7} className={css.icon} />}
          title="Contato"
        >
          (XX) XXXXX-XXXX
        </ContactInfoItem>

        <ContactInfoItem
          wrapperStyle="min-[494px]:pt-1 min-[805px]:pt-5"
          icon={<Clock className={css.icon} strokeWidth={1.7} />}
          title="Horário de atendimento"
        >
          <>
            Seg a Sex: 9h às 18h <br />
            Sábados: 8h às 14h
          </>
        </ContactInfoItem>
      </div>

      <div
        className={`px-8 py-7.5 border-t border-background/24 text-center 
          text-background/75 rounded-none text-[0.92485em]`}
      >
        <p className={`font-extralight`}>
          © {currentYear} O Melhor Pet Shop. Todos os direitos reservados.
        </p>
        <p className={`mt-2 font-extralight`}>CNPJ: XX.XXX.XXX/XXXX-XX</p>
      </div>
    </footer>
  );
};

export default Footer;
