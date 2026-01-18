const css = {
  container: `w-full box-border p-6 mx-auto flex items-center
  lg:-order-1 lg:px-8 rounded-xl bg-section-medium/25 border`,
};

export default function TeamStats() {
  return (
    <div className={css.container}>
      <p
        className={`font-medium max-h-max text-accent-foreground`}
      >
        Nossa equipe tem conhecimento técnico e sensibilidade no atendimento.
        Somos confiáveis e amamos o que fazemos. Oferecemos um serviço
        humanizado e com atenção aos detalhes. Seu pet estará bem conosco.
      </p>
    </div>
  );
}
