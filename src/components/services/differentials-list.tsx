import bathingImage from '@/assets/bathing-service.jpg';
import { DifferentialItem } from './differential-item';
import type { Differential } from '@/types';

export function DifferentialsList({ differentials }: { differentials: Differential[] }) {
  return (
    <div
      className={`mb-10 p-8 bg-white shadow-md hover:shadow-lg grid 
        lg:grid-cols-[auto_402px] lg:gap-8 xl:grid-cols-[auto_420px] 
        transition-all duration-200`}>
      <div
        className={`sm:mb-6 lg:mb-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1
       rounded-2xl xl:grid-cols-1 order-2 sm:order-0 lg:order-2`}>
        {differentials.map((item, index) => (
          <DifferentialItem
            key={index}
            icon={item.icon}
            title={item.title}
            delay={index * 0.1}
            description={item.description}
            yellowStyle={index === 0 || index === 2 ? false : true}
          />
        ))}
      </div>

      <div className={`fade-in mb-6 sm:mb-0`}>
        <div className={`rounded-xl overflow-hidden mx-auto`}>
          <img
            src={bathingImage}
            alt="Pet relaxado durante o banho"
            className={`w-full h-[106vw] max-[375px]:h-[108vw] max-h-[430px] sm:h-[80vw] sm:max-h-[470px] 
              md:h-[62vw] lg:h-[40vw] xl:h-[31vw] 
              object-cover bg-muted`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
