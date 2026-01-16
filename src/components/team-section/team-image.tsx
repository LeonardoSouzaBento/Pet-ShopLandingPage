import vetImage from "@/assets/woman-with-pet.png";
// import teamImage from "@/assets/team.png"

export function TeamImage() {
  return (
    <div className={`fade-in`}>
      <div className={`rounded-xl overflow-hidden max-w-3xl mx-auto xl:order-5`}>
        <img
          src={vetImage}
          alt="Veterinária segurando um pet"
          className={`w-full h-[400px] max-h-[500px] md:h-full object-cover bg-muted`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
