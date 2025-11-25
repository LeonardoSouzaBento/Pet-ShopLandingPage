import { Heart } from "lucide-react";

const HeroBadge = () => {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
      bg-white/12 backdrop-blur-xs mb-4"
    >
      <span className="tracking-wide text-[1.0286em]">
        Cuidado com amor e profissionalismo
      </span>
      <Heart className="w-5 h-5 text-secondary" fill="currentColor" />
    </div>
  );
};

export default HeroBadge;
