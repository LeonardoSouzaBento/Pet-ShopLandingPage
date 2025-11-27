import {
  HeroBackground,
  HeroTitle,
  FloatingElements,
  HeroButton,
} from "./components/index";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-[97vh] sm:h-[94vh] max-h-[920px]
        flex items-center justify-center overflow-hidden `}
    >
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div className={`max-w-4xl mx-auto space-y-6 slide-up px-2.5 mt-20`}>
          <HeroTitle />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
