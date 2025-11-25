import storeImage from "@/assets/store-front.jpg";
import { SectionHeader } from "@/components/ui/section-header";
import SectionWrapper from "./ui/SectionWrapper";
import { Section } from "@/components/ui/Section";

const History = () => {
  return (
    <Section variant="medium">
      <SectionHeader title="Nossa história" />
      <SectionWrapper styles="grid xl:grid-cols-2 gap-12 lg:max-w-3xl! xl:max-w-6xl! items-center">
        {/* Image */}
        <div className={`order-2 lg:order-2 fade-in`}>
          <div className={`rounded-xl overflow-hidden shadow-2xl`}>
            <img
              src={storeImage}
              alt="Fachada da nossa loja"
              className={`w-full h-full object-cover bg-muted`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`space-y-6 fade-in`}>
          <div className={`px-5 space-y-4 text-muted-foreground 
            leading-relaxed text-center`}>
            <p>
              Fundado em 2012, o Patas & Cia Pet Shop surgiu com o objetivo de
              oferecer serviços de cuidado pet com qualidade e responsabilidade.
              Começamos com uma equipe pequena e estrutura básica, atendendo
              principalmente banho e tosa.
            </p>

            <p>
              Com o aumento da demanda, investimos em equipamentos modernos,
              treinamento técnico da equipe e a ampliação do espaço físico. A
              partir de 2016, passamos a oferecer também serviços
              especializados, como protocolos de banho para peles sensíveis,
              tosa higiênica para pets idosos e atendimento adaptado para
              animais ansiosos.
            </p>

            <p>
              Hoje, atendemos mais de 2.000 tutores na região, com foco em
              segurança, bem-estar e qualidade no atendimento. Mantemos um
              processo interno de atualização contínua, revisando produtos,
              técnicas e procedimentos para garantir um serviço cada vez mais
              eficiente.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
};

export default History;
