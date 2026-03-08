import {
  FloatingElements,
  HeroBackground,
  HeroButton,
  HeroTitle,
} from "./hero/index";

export const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-110
        flex items-center justify-center overflow-hidden `}
    >
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div
          className={`max-w-4xl mx-auto slide-up px-3 pt-9 pb-16 xl:pt-13.5`}
        >
          <HeroTitle />
          <div className="flex justify-center">
            <HeroButton className="w-full max-w-sm mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
