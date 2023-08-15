export const handleCallWhatsapp = () => {
  const phoneNumber = "6282384317274";
  const message = encodeURIComponent("Hi Kingexpert!");
  const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  window.open(whatsappApiUrl, "_blank");
};
