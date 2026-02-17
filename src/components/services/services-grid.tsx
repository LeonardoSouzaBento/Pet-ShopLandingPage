import type { Service } from '@/types';
import { CardContent } from '@/ui/index';

const css = {
  cardWrapper: `transition-all duration-200 slide-up relative rounded-2xl
      text-card-foreground bg-white/70 shadow-sm hover:shadow-md border border-border/25`,
  card: `p-7 pt-6 text-left bg-transparent`,
  header: `flex items-center gap-3 mb-3 border-b border-border/75 pb-3 rounded-none`,
  iconWrapper: `size-14 rounded-xl flex items-center justify-center 
  bounce-icon shadow-primary-soft shrink-0`,
  title: `text-foreground tracking-normal`,
  description: `text-muted-foreground`,
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div>
      <div
        className={`grid min-[520px]:grid-cols-2 lg:grid-cols-4 gap-4
      relative z-10 `}>
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`${css.cardWrapper}`}
            style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className={css.card}>
              <div className={css.header}>
                <div className={`${css.iconWrapper} ${service.bgColor}`}>
                  <service.icon className={`size-7 ${service.color}`} />
                </div>
                <h6 className={css.title}>{service.title}</h6>
              </div>
              <p className={css.description}>{service.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
}
