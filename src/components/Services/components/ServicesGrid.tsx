import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ services }) {
  return (
    <div>
      <SectionHeader title="Nossos serviços" />
      <div
        className={`mb-6 grid min-[520px]:grid-cols-2 lg:grid-cols-4 gap-6
      relative z-10 `}
      >
        {services.map((service, index: number) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
            bgColor={service.bgColor}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
