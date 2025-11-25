import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div
      className={`w-full h-24 absolute top-0 left-0 z-6 flex items-center 
        justify-center rounded-none bg-linear-to-b from-[#081f1d48] to-transparent`}
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
