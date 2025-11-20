import { Droplet, Scissors, Stethoscope, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import DecorativeBlob from "./DecorativeBlob";

const services = [
  {
    icon: Droplet,
    title: "Banho completo",
    description: "Higiene com produtos especiais para pele e pelos",
    color: "text-primary",
    bgColor: "bg-primary/10",
    badge: "Popular",
    rotation: "rotate-1",
  },
  {
    icon: Scissors,
    title: "Tosa e estética",
    description: "Tesoura, máquina, laços, hidratação e finalização",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    badge: "Mais pedido",
    rotation: "-rotate-1",
  },
  {
    icon: Stethoscope,
    title: "Cuidados veterinários",
    description: "Consultas de rotina, check-ups preventivos, vacinas e orientações médicas",
    color: "text-primary",
    bgColor: "bg-primary/10",
    badge: "Essencial",
    rotation: "rotate-2",
  },
  {
    icon: Truck,
    title: "Transporte pet",
    description: "Vamos até você buscar e levar seu pet com segurança",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    badge: "Novo",
    rotation: "-rotate-1",
  },
];

const Services = () => {
  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-light relative overflow-hidden`}>
      <DecorativeBlob position="top-right" color="primary" size="lg" />
      <DecorativeBlob position="bottom-left" color="secondary" size="md" />
      
      <SectionHeader 
        title="O que nós oferecemos"
        subtitle="Tudo o que seu amigo precisa para ficar bonito, saudável e feliz."
        wrapperStyles="relative z-10"
      />

      <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10`}>
        {services.map((service, index) => (
          <Card
            key={index}
            className={`border-none shadow-soft hover:shadow-hover transition-all slide-up relative`}
            style={{ 
              animationDelay: `${index * 0.1}s`
            }}
          >
            <CardContent className={`p-8 text-center`}>
              {/* Ícone "vazando" do card */}
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center -mt-12 mb-6 bounce-icon shadow-soft mx-auto`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className={`font-bold text-card-foreground mb-3`}>
                {service.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed`}>
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
