import storeImage from '@/assets/store-front.jpg';
import { SectionHeader } from '@/ui/section-header';
import SectionWrapper from '../ui/SectionWrapper';
import { Section } from '@/ui/Section';

const History = () => {
  return (
    <Section variant="medium">
      <SectionHeader title="Nossa história" />
      <SectionWrapper styles="grid xl:grid-cols-2 gap-12 lg:max-w-3xl! xl:max-w-6xl! items-center">
        {/* Image */}
        <div className={`order-2 lg:order-2 fade-in`}>
          <div className={`rounded-xl overflow-hidden shadow-xl`}>
            <img
              src={storeImage}
              alt="Fachada da nossa loja"
              className={`w-full h-full max-h-[480px] object-cover bg-muted`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`space-y-6 fade-in`}>
          <div
            className={`px-5 space-y-4 text-muted-foreground 
            leading-relaxed text-center`}>
            <p>
              Fundado em 2012, o O Melhor Pet Shop começou com uma equipe pequena e estrutura
              básica, atendendo principalmente banho e tosa.
            </p>

            <p>
              Com o aumento da demanda, investimos em equipamentos e treinamento da equipe.
              Especializamos nossos serviços para animais idosos e animais ansiosos.
            </p>

            <p>
              Hoje, atendemos mais de 2.000 tutores na região. Mantemo-nos atualizados revisando
              produtos, técnicas e procedimentos para garantir sempre bons serviços.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
};

export default History;
