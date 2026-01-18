import { FloatingElements, HeroBackground, HeroButton, HeroTitle } from './hero/index';

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-[75dvh] max-h-max
        flex items-center justify-center overflow-hidden `}>
      <FloatingElements />
      <HeroBackground />

      <div className="relative z-6 section-container p-0 text-center text-white">
        <div className={`max-w-4xl mx-auto slide-up px-3 py-10`}>
          <HeroTitle />
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
