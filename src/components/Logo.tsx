import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div
      className={`w-full h-24 z-8 relative flex items-center 
        justify-center rounded-none bg-[#0f6d60f1] 
        bg-linear-to-b from-[#0e675d] to-[hsl(172,74%,26%)]`}
    >
      <div className={`flex flex-col items-center gap-1`}>
        <Store className={`w-8 h-8 text-white`} strokeWidth={1.5} />
        <span
          className={`font-display font-semibold text-white text-sm tracking-wide`}
        >
          O Melhor Pet Shop
        </span>
      </div>
    </div>
  );
}
