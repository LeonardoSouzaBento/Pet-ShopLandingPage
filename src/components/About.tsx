import vetImage from "@/assets/vet-with-pet.jpg";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const teamMembers = [
  {
    name: "Ana Paula",
    role: "Groomer especializada",
    experience: "4 anos de experiência, ama shih tzus e vira-latas",
  },
  {
    name: "Carlos Henrique",
    role: "Esteticista de cães e gatos",
    experience: "6 anos trabalhando com pets de todas as raças",
  },
  {
    name: "Juliana Alves",
    role: "Atendimento e carinhos ilimitados",
    experience: "Especialista em criar ambiente acolhedor para os pets",
  },
  {
    name: "Dra. Sofia Mendes",
    role: "Veterinária parceira",
    experience: "10 anos de experiência em clínica veterinária",
  },
];

const About = () => {
  return (
    <section className={`py-10 px-6 md:px-8 lg:px-12 bg-section-medium`}>
      <SectionHeader 
        title="Quem somos"
        subtitle="Somos um pet shop que acredita que cada animal merece cuidado, afeto e atenção especial. Aqui, seu pet é tratado como parte da família. Nossa equipe é treinada para oferecer o melhor atendimento, sempre com muito carinho e dedicação."
      />

      <div className={`flex flex-wrap gap-6 mb-12 justify-center`}>
        <div className={`flex-1 min-w-[150px] text-center`}>
          <div className={`font-bold text-primary mb-2`}>5+</div>
          <div className={`text-muted-foreground`}>Anos de experiência</div>
        </div>
        <div className={`flex-1 min-w-[150px] text-center`}>
          <div className={`font-bold text-primary mb-2`}>1000+</div>
          <div className={`text-muted-foreground`}>Pets atendidos</div>
        </div>
      </div>

      <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12`}>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className={`border-none shadow-soft hover:shadow-hover transition-all slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className={`p-6 text-center`}>
              <div className={`w-24 h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center mx-auto -mt-12 mb-6 shadow-soft`}>
                <User className={`w-12 h-12 text-white`} />
              </div>
              <h3 className={`font-bold text-card-foreground mb-2`}>
                {member.name}
              </h3>
              <p className={`text-primary font-semibold mb-3`}>{member.role}</p>
              <p className={`text-muted-foreground leading-relaxed`}>
                {member.experience}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className={`fade-in`}>
        <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-hover-lg transition-all max-w-3xl mx-auto`}>
          <img
            src={vetImage}
            alt="Veterinária segurando um pet"
            className={`w-full h-full object-cover bg-muted`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
