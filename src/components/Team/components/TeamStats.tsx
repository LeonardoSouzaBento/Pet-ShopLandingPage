const css = {
  container: `w-full box-border p-6 mx-auto flex flex-col gap-3 min-[580px]:flex-row flex-wrap 
  sm:justify-center min-[580px]:gap-5 sm:gap-12 border-2 lg:flex-col 
  lg:-order-1 lg:p-0 lg:gap-20 lg:px-8 rounded-xl`,
  wrapper: `flex justify-start items-center text-left 
  sm:text-center lg:min-w-20 lg:h-max lg:justify-center lg:w-[120px]`,
  h3: `text-primary mb-2 lg:mb-0 text-left text-[1.38728em] font-medium`,
  strong: `font-semibold`,
};

export function TeamStats() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.h3}>
          <strong className={`${css.strong} tracking-wider`}>+ 1000</strong>
          <br /> <span className="text-secondary">Pets atendidos</span>
        </h3>
      </div>

      <div className={css.wrapper}>
        <h3 className={css.h3}>
          <strong className={css.strong}>+ 5</strong> <br />
          <span className="text-secondary">Anos de experiência</span>
        </h3>
      </div>
    </div>
  );
}
