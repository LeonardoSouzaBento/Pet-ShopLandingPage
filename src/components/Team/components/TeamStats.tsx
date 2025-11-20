const css = {
  wrapper: `flex-1 justify-start min-w-max text-left sm:text-center px-4`,
  h3: `text-primary mb-2`,
  strong: `font-semibold text-[1.20em]`,
};

export function TeamStats() {
  return (
    <div className={`flex flex-wrap justify-center max-w-124 mx-auto`}>
      <div className={css.wrapper}>
        <h3 className={css.h3}>
          <strong className={css.strong}>1000 +</strong>
          <br /> Pets atendidos
        </h3>
      </div>

      <div className={css.wrapper}>
        <h3 className={css.h3}>
          <strong className={css.strong}>5 +</strong> <br />
          Anos de experiência
        </h3>
      </div>
    </div>
  );
}
