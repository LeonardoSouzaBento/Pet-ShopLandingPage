export default function LogoHeader() {
  return (
    <>
      <div
        className={`w-full h-24 flex items-center justify-center rounded-none z-8 
        bg-linear-to-br from-primary-600 to-primary-700 shadow-sm`}
      >
        <div className={`flex items-center gap-2.5`}>
          <div
            className={`size-14 p-0.5 shrink-0 bg-primary-900/25 rounded-xl`}
          >
            <img
              src="/logo.png"
              alt="imagem da logo da loja"
              className={`size-full object-contain brightness-110`}
            />
          </div>
          <p
            className={`font-bold font-title text-white/86 leading-[1.06] text-h5 tracking-wide`}
          >
            Leo <br /> Pet Shop
          </p>
        </div>
      </div>
    </>
  );
}
