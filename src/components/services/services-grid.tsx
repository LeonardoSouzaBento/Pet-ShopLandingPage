import type { Service } from '@/types';
import { CardContent } from '@/ui/index';

const css = {
  wrapper: `transition-all duration-200 slide-up relative rounded-2xl
      text-card-foreground shadow-sm hover: bg-white`,
  wrapperIcon: `w-16 h-16 -mt-12 mb-5.5 rounded-2xl flex items-center justify-center 
  bounce-icon shadow-primary-soft mx-auto`,
  title: `text-foreground mb-2 tracking-normal`,
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div>
      <div
        className={`grid min-[520px]:grid-cols-2 lg:grid-cols-4 gap-6
      relative z-10 `}>
        {services.map((service, index) => (
          <div className={`${css.wrapper}`} style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className={`p-8 text-center bg-transparent`}>
              <div className={`${css.wrapperIcon} ${service.bgColor}`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>

              <h6 className={css.title}>{service.title}</h6>
              <p>{service.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
}
