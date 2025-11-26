import {
  HeroBackground,
  HeroTitle,
  FloatingElements,
  HeroButton,
} from "./components/index";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-[90vh] max-h-[920px] flex items-center justify-center -mt-5 
      max-[374px]:-mt-5 min-[375px]:-mt-20 min-[1200px]:-mt-8 xl:max-h-[540px]
      overflow-hidden `}
    >
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 slide-up px-2.5">
          <HeroTitle />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
