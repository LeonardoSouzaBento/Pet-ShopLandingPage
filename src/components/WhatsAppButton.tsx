import { Button } from "@/components/ui/button";

const css = {
  button: `size-13 p-0 fixed bottom-4 right-4 z-12 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-hover-lg transition-all hover:scale-110`,
  img: `size-7 pl-px pb-px`,
};

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = "553484125832";
    const message =
      "Olá! Gostaria de saber mais sobre os serviços do Pet Shop.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className={css.button}
      aria-label="Contato via WhatsApp"
    >
      <img
        src="/white-whatsapp.png"
        alt="imagem da logo do whatsapp"
        className={css.img}
      />
    </Button>
  );
};

export default WhatsAppButton;
