import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div
      className={`w-full h-24 z-8 relative flex items-center 
        justify-center rounded-none bg-[#0f6d60f1] 
        bg-linear-to-b from-[hsl(173,70%,20%)] to-[hsl(172,70%,26%)]
        shadow-sm`}
    >
      <div className={`flex flex-col items-center gap-1 h-full w-auto`}>
        <img
          src="/shop-logo.png"
          alt="imagem da logo da loja"
          className={`size-full object-contain`}
        />
      </div>
    </div>
  );
}
