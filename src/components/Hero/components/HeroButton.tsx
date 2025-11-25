import { Button } from "@/components/ui/button";

const HeroButton = ({ handleContact }: { handleContact: () => void }) => {
  return (
    <div className="pt-4">
      <Button
        size="lg"
        onClick={handleContact}
        className="bg-linear-to-r from-orange-500 to-orange-400 
          text-secondary-foreground px-8 py-6 rounded-full 
          shadow-secondary hover:shadow-hover-secondary 
          transition-all hover:scale-105"
      >
        Fale Conosco
      </Button>
    </div>
  );
};

export default HeroButton;
