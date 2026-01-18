import { FloatingElements, HeroBackground, HeroButton, HeroTitle } from './hero/index';

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-110
        flex items-center justify-center overflow-hidden `}>
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div className={`max-w-4xl max-h-max mx-auto slide-up px-3 pt-6 pb-20 xl:pt-7`}>
          <HeroTitle />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
