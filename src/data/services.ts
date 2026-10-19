export interface Service {
  icon: string;
  title: string;
  desc: string;
  for: string;
}

export const services: Service[] = [
  {
    icon: "fa-brands fa-whatsapp",
    title: "Assistente de IA no WhatsApp",
    desc: "Atende, agenda, confirma horários e responde dúvidas 24h, e passa para um humano quando precisa.",
    for: "Clínicas, imobiliárias, varejo e serviços",
  },
  {
    icon: "fa-solid fa-file-lines",
    title: "IA sobre os seus documentos",
    desc: "Pergunte em português e receba a resposta com a fonte citada: contratos, normas, laudos e manuais internos.",
    for: "Escritórios jurídicos e contábeis, agro e indústria",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Automação e sistemas sob medida",
    desc: "Integração de IA com o seu ERP, CRM ou planilhas, pós-venda automático e sistemas .NET feitos para o seu processo.",
    for: "Empresas com processos manuais e repetitivos",
  },
  {
    icon: "fa-solid fa-compass",
    title: "Diagnóstico de IA",
    desc: "Em 2 a 4 horas, mapeio onde a IA gera retorno no seu negócio e entrego um plano com prioridades e custos.",
    for: "Quem quer usar IA e não sabe por onde começar",
  },
];
