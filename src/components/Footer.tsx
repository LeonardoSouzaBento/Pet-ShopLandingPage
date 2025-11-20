import { Heart, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-linear-to-br from-footer-bg to-footer-bg-end text-background`}>
      <div className={`section-container py-16`}>
        <div className={`grid sm:grid-cols-2 gap-8 mb-12 sm:text-center`}>
          {/* Contact Info */}
          <div>
            <h3 className={`font-bold mb-4`}>Contato</h3>
            <ul className={`space-y-3 text-background/80 font-light`}>
              <li className={`flex items-start gap-2 sm:justify-center`}>
                <Phone className={`w-5 h-5 shrink-0 mt-0.5`} />
                <span>(XX) XXXXX-XXXX</span>
              </li>
              <li className={`flex items-start gap-2 sm:justify-center`}>
                <MapPin className={`w-5 h-5 shrink-0 mt-0.5`} />
                <span>
                  Rua Exemplo, 123 – Centro
                  <br />
                  Sua Cidade
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className={`font-bold mb-4`}>Horário</h3>
            <ul className={`space-y-2 text-background/80 font-light`}>
              <li className={`flex items-start gap-2 sm:justify-center`}>
                <Clock className={`w-5 h-5 shrink-0 mt-0.5`} />
                <div>
                  <p>Seg a Sex: 9h às 18h</p>
                  <p>Sábados: 8h às 14h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t border-background/20 text-center 
          text-background/60 font-light rounded-none`}
        >
          <p>© {currentYear} Pet Shop. Todos os direitos reservados.</p>
          <p className={`mt-2`}>CNPJ: XX.XXX.XXX/XXXX-XX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
