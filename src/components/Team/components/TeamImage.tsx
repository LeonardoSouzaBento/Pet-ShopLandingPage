import vetImage from "@/assets/vet-with-pet.jpg";

export function TeamImage() {
  return (
    <div className={`fade-in`}>
      <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-hover-lg 
        transition-all max-w-3xl mx-auto xl:order-5`}>
        <img
          src={vetImage}
          alt="Veterinária segurando um pet"
          className={`w-full h-full object-cover bg-muted`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
