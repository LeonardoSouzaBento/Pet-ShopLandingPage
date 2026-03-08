import { HeroButton } from "@/components/hero/index";

const css = {
  container: `w-full box-border p-6 mx-auto flex flex-col justify-center items-start gap-4
  lg:-order-1 lg:px-8 rounded-xl bg-section-medium/50`,
};

export default function TeamStats() {
  return (
    <div className={css.container}>
      <h5 className="text-primary-900">Uma equipe dedicada</h5>
      <p
        className={`font-medium max-h-max text-accent-foreground`}
      >
        Nossa equipe tem conhecimento técnico e sensibilidade no atendimento.
        Somos confiáveis e amamos o que fazemos. Oferecemos um serviço
        humanizado e com atenção aos detalhes. Seu pet estará bem conosco.
      </p>
      <HeroButton className="w-full" />
    </div>
  );
}
