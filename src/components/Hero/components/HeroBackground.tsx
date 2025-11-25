import heroImage from "@/assets/hero-pets.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-none bg-black/11">
      <div className="absolute inset-0 gradient-hero z-10 rounded-none" />

      <img
        src={heroImage}
        alt="Cachorro e gato felizes"
        className="w-full h-full object-cover bg-muted rounded-none"
        loading="eager"
      />
    </div>
  );
};

export default HeroBackground;
