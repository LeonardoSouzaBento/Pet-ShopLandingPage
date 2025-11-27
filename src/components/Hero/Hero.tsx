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
        flex items-end justify-center min-[470px]:items-center
        overflow-hidden `}
    >
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div className={`max-w-4xl mx-auto space-y-6 slide-up px-2.5 mb-12 
          min-[380px]:mb-18 min-[470px]:mb-0 min-[470px]:mt-14`}>
          <HeroTitle />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
