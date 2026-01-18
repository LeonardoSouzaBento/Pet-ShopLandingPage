const wrapperCSS = `w-full h-24 flex items-center justify-center rounded-none z-8`;

export default function LogoHeader() {
  return (
    <>
      <div
        className={` ${wrapperCSS} bg-linear-to-br from-hero-from to-hero-to`}>
        <div className={`flex flex-col items-center gap-1 h-full w-auto overflow-hidden`}>
          <img
            src="/shop-logo.png"
            alt="imagem da logo da loja"
            className={`size-full object-contain mr-px mt-1.5`}
          />
        </div>
      </div>
    </>
  );
}
