export const openWhatsApp = (
  message: string,
  phone: string = "553484125832"
) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
};
