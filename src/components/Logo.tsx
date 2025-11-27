const wrapperCSS = `w-full h-24 flex items-center justify-center rounded-none z-8`;

export default function Logo() {
  return (
    <>
    <div
        className={` ${wrapperCSS} absolute top-0 left-0 
            bg-linear-to-b from-[#1E7265] to-[#136c6059]
          `}
      >
        <div className={`flex flex-col items-center gap-1 h-full w-auto`}>
          <img
            src="/shop-logo.png"
            alt="imagem da logo da loja"
            className={`size-full object-contain`}
          />
        </div>
      </div>
    </>
  )
}
