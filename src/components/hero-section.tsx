import { FloatingElements, HeroBackground, HeroButton } from "./hero/index";

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
          className={`max-w-4xl mx-auto slide-up px-4 pt-9 pb-16 xl:pt-13.5`}
        >
          <h1 className="text-primary-50 px-6 mb-7.5">
            Cuidamos do seu pet com carinho e alegria!
          </h1>

          <p
            className={`text-primary-50/85 max-w-2xl mx-auto 
        text-h5 px-5 mb-8 font-light`}
          >
            Banho, tosa, cuidados veterinários, estética. Bem-estar e muito amor
            para seu pet.
          </p>
          <div className="flex justify-center">
            <HeroButton className="w-full max-w-sm mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
