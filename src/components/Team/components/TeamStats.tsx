const css = {
  container: `w-full box-border p-6 mx-auto flex items-center
  lg:-order-1 lg:px-8 rounded-xl bg-primary/3 `,
};

export function TeamStats() {
  return (
    <div className={css.container}>
      <p className={`font-medium max-h-max leading-relaxed`}>
        Somos um pet shop que acredita que cada animal merece cuidado, afeto e
        atenção especial. Aqui, seu pet é tratado como parte da família. Nossa
        equipe é treinada para oferecer o melhor atendimento, sempre com muito
        carinho e dedicação.
      </p>
    </div>
  );
}
