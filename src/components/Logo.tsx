import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div className="w-full h-[72px] flex items-center justify-center bg-background border-b border-border">
      <div className="flex flex-col items-center gap-1">
        <Store className="w-8 h-8 text-primary" strokeWidth={1.5} />
        <span className="font-display font-semibold text-primary text-sm tracking-wide">
          O Melhor Pet Shop
        </span>
      </div>
    </div>
  );
}
