import bathingImage from "@/assets/bathing-service.jpg";
import DifferentialItem from "./differential-item";
import type { Differential } from "@/types";
import { HeroButton } from "@/components/hero";

export default function DifferentialsList({
  differentials,
}: {
  differentials: Differential[];
}) {
  return (
    <div
      className={`p-8 grid
          lg:grid-cols-[auto_402px] lg:gap-6 xl:grid-cols-[auto_420px]
          transition-all duration-200`}
    >
      <div className="flex flex-col gap-6 mb-6 lg:mb-0 order-2 sm:order-0 lg:order-2">
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1
           rounded-2xl xl:grid-cols-1`}
        >
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
        <div className="w-full flex justify-center">
          <HeroButton className="w-full max-w-xl mx-auto" />
        </div>
      </div>

      <div
        className={`rounded-xl overflow-hidden mx-auto fade-in mb-6 sm:mb-0`}
      >
        <img
          src={bathingImage}
          alt="Pet relaxado durante o banho"
          className={`size-full object-cover bg-muted`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
