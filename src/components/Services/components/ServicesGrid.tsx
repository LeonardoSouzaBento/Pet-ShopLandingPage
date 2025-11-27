import type { Service } from "../ServicesSection";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div>
      <div
        className={`grid min-[520px]:grid-cols-2 lg:grid-cols-4 gap-6
      relative z-10 `}
      >
        {services.map((service, index) => (
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
