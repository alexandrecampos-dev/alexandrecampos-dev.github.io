export const EMAIL = "alexandrerocampos@gmail.com";
export const PHONE_DISPLAY = "(67) 98144-1716";

const WHATSAPP_NUMBER = "5567981441716";

export function whatsappUrl(message = "Olá, Alexandre! Vi seu site e quero conversar sobre um projeto.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
