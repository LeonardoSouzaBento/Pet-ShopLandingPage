import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div className="w-full h-[72px] flex items-center justify-center" style={{ backgroundColor: 'oklch(40% 0.12 185)' }}>
      <div className="flex flex-col items-center gap-1">
        <Store className="w-8 h-8 text-white" strokeWidth={1.5} />
        <span className="font-display font-semibold text-white text-sm tracking-wide">
          O Melhor Pet Shop
        </span>
      </div>
    </div>
  );
}
