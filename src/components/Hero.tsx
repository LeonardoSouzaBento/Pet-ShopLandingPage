import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pets.jpg";
import { Heart } from "lucide-react";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  const handleContact = () => {
    const phone = "5500000000000"; // Substituir pelo número real
    window.open(`https://wa.me/${phone}?text=Olá! Gostaria de saber mais sobre os serviços.`, "_blank");
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className={`absolute inset-0 z-0`}>
        <div className={`absolute inset-0 bg-gradient-hero z-10`} />
        <img
          src={heroImage}
          alt="Cachorro e gato felizes"
          className={`w-full h-full object-cover bg-muted`}
          loading="eager"
        />
      </div>
      
      {/* Elementos flutuantes */}
      <FloatingElements />

      {/* Content */}
      <div className={`relative z-20 section-container text-center text-white`}>
        <div className={`max-w-4xl mx-auto space-y-6 slide-up`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4`}>
            <Heart className={`w-5 h-5 text-secondary`} fill="currentColor" />
            <span className={`font-medium`}>Cuidado com amor e profissionalismo</span>
          </div>
          
          <h1 className={`font-display font-extrabold leading-tight`}>
            Cuidamos do seu pet com carinho e alegria
          </h1>
          
          <p className={`text-white/95 max-w-2xl mx-auto leading-relaxed`}>
            Banho, tosa, cuidados veterinários, estética. Bem-estar e muito amor para seu pet.
          </p>
          
          <div className={`pt-4`}>
            <Button
              size="lg"
              onClick={handleContact}
              className={`bg-gradient-to-r from-orange-500 to-orange-400 text-secondary-foreground px-8 py-6 rounded-full shadow-secondary hover:shadow-hover-secondary transition-all hover:scale-105`}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className={`absolute bottom-0 left-0 right-0 z-10`}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full`}>
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
