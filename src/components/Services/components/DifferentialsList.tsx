import bathingImage from "@/assets/bathing-service.jpg";
import { DifferentialItem } from "./DifferentialItem";

export function DifferentialsList({ differentials }) {
  return (
    <div
      className={`mb-10 p-8 bg-white shadow-xl grid lg:grid-cols-[auto_380px] lg:gap-8
     xl:grid-cols-[auto_420px] `}
    >
      <div
        className={`mb-6 lg:mb-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1
       rounded-2xl xl:grid-cols-1 order-2 sm:order-0 lg:order-2`}
      >
        {differentials.map((item, index) => (
          <DifferentialItem
            key={index}
            icon={item.icon}
            title={item.title}
            delay={index * 0.1}
            yellowStyle={(index === 0 || index === 2) ? false : true}
          />
        ))}
      </div>

      <div className={`fade-in mb-6 sm:mb-0`}>
        <div className={`rounded-xl overflow-hidden mx-auto`}>
          <img
            src={bathingImage}
            alt="Pet relaxado durante o banho"
            className={`w-full h-full object-cover bg-muted`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
