import {
  HeroBackground,
  HeroTitle,
  HeroBadge,
  FloatingElements,
  HeroButton,
} from "./components/index";

const Hero = () => {
  const handleContact = () => {
    const phone = "5500000000000"; // Substituir pelo número real
    window.open(
      `https://wa.me/${phone}?text=Olá! Gostaria de saber mais sobre os serviços.`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <FloatingElements />

      <div className="relative z-6 section-container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 slide-up">
          <HeroBadge />
          <HeroTitle />
          <HeroButton handleContact={handleContact} />
        </div>
      </div>

      {/* <HeroWave /> */}
    </section>
  );
};

export default Hero;
