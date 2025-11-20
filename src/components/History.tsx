import storeImage from "@/assets/store-front.jpg";
import { SectionHeader } from "@/components/ui/section-header";

const History = () => {
  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-medium`}>
      <SectionHeader title="Nossa história" />
      
      <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
        {/* Image */}
        <div className={`order-2 lg:order-1 fade-in`}>
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
        <div className={`order-1 lg:order-2 space-y-6 fade-in`}>
          <div className={`space-y-4 text-muted-foreground leading-relaxed`}>
            <p>
              Tudo começou com a paixão por animais e a vontade de oferecer um espaço diferente — 
              onde o cuidado vai além do banho e tosa, e o pet realmente se sente em casa.
            </p>
            
            <p>
              Com o tempo, crescemos, investimos em treinamento, estrutura e produtos de qualidade, 
              sem nunca perder o carinho no atendimento.
            </p>

            <p>
              Hoje, somos referência na região, mas continuamos com o mesmo propósito: 
              cuidar de cada pet como se fosse nosso, com dedicação, respeito e muito amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
