import { Heart, Shield, Sparkles, Calendar, Home } from "lucide-react";
import bathingImage from "@/assets/bathing-service.jpg";
import { SectionHeader } from "@/components/ui/section-header";

const differentials = [
  {
    icon: Heart,
    title: "Equipe apaixonada por animais",
    description: "Profissionais dedicados que tratam cada pet com carinho genuíno",
  },
  {
    icon: Shield,
    title: "Espaço seguro e higienizado",
    description: "Ambiente limpo e protegido para total tranquilidade",
  },
  {
    icon: Sparkles,
    title: "Produtos de alta qualidade",
    description: "Utilizamos apenas as melhores marcas para cuidar do seu pet",
  },
  {
    icon: Calendar,
    title: "Agendamentos flexíveis",
    description: "Horários adaptados à sua rotina com atendimento rápido",
  },
  {
    icon: Home,
    title: "Ambiente acolhedor",
    description: "Seu pet se sente em casa conosco",
  },
];

const Differentials = () => {
  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-light`}>
      <SectionHeader title="Porque deixar seu pet conosco?" />

      <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
        {/* Image */}
        <div className={`order-2 lg:order-1 fade-in`}>
          <div className={`rounded-xl overflow-hidden shadow-2xl`}>
            <img
              src={bathingImage}
              alt="Pet relaxado durante o banho"
              className={`w-full h-full object-cover bg-muted`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Differentials List */}
        <div className={`order-1 lg:order-2 space-y-6`}>
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 p-6 bg-card shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`shrink-0`}>
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-primary`} />
                </div>
              </div>
              <div>
                <h3 className={`font-semibold text-card-foreground`}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
