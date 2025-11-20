import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const Contact = () => {
  const handleWhatsApp = () => {
    const phone = "5500000000000"; // Substituir pelo número real
    window.open(`https://wa.me/${phone}?text=Olá! Gostaria de agendar um horário.`, "_blank");
  };

  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-light`}>
      <SectionHeader 
        title="Venha nos visitar"
        subtitle="Queremos você e seu pet"
      />

      <div className={`grid lg:grid-cols-2 gap-12`}>
        {/* Map */}
        <div className={`rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] fade-in`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975788349586!2d-46.65844708502213!3d-23.561414984686447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Pet Shop"
            className={`bg-muted`}
          />
        </div>

        {/* Contact Info */}
        <div className={`space-y-8 -order-1 lg:order-2`}>
          <div className={`space-y-6 slide-up`}>
            <div className={`flex gap-4 p-6 bg-card rounded-2xl shadow-sm`}>
              <div className={`shrink-0`}>
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <MapPin className={`w-6 h-6 text-primary`} />
                </div>
              </div>
              <div>
                <h3 className={`font-bold text-card-foreground mb-2`}>Endereço</h3>
                <p className={`text-muted-foreground`}>
                  Rua Exemplo, 123 – Centro<br />
                  Sua Cidade
                </p>
              </div>
            </div>

            <div className={`flex gap-4 p-6 bg-card rounded-2xl shadow-sm`}>
              <div className={`shrink-0`}>
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <Phone className={`w-6 h-6 text-primary`} />
                </div>
              </div>
              <div>
                <h3 className={`font-bold text-card-foreground mb-2`}>Telefone / WhatsApp</h3>
                <p className={`text-muted-foreground`}>(XX) XXXXX-XXXX</p>
              </div>
            </div>

            <div className={`flex gap-4 p-6 bg-card rounded-2xl shadow-sm`}>
              <div className={`shrink-0`}>
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <Clock className={`w-6 h-6 text-primary`} />
                </div>
              </div>
              <div>
                <h3 className={`font-bold text-card-foreground mb-2`}>Horário de atendimento</h3>
                <p className={`text-muted-foreground`}>
                  Segunda a Sexta – 9h às 18h<br />
                  Sábados – 8h às 14h
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleWhatsApp}
            className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 shadow-lg hover:shadow-primary/50 transition-all`}
          >
            Agendar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
