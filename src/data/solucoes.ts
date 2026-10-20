/** As três portas de entrada do site. Alimentam o menu, a seção da home e os links cruzados das landings. */
export interface Solucao {
  href: string;
  /** Rótulo curto, para o menu. */
  label: string;
  /** Título do cartão na home. */
  titulo: string;
  desc: string;
  para: string;
  icon: string;
}

export const solucoes: Solucao[] = [
  {
    href: "/ia-para-empresas/",
    label: "IA para empresas",
    titulo: "IA para a sua empresa",
    desc: "Assistente no WhatsApp e no Telegram, IA sobre os seus documentos e automação de processos, com escopo e preço fechados.",
    para: "Donos e gestores de pequenas e médias empresas",
    icon: "fa-solid fa-building",
  },
  {
    href: "/clinicas/",
    label: "Clínicas",
    titulo: "Assistente para clínicas",
    desc: "Responde pacientes 24h, agenda, confirma consultas e reduz faltas, sem sobrecarregar a recepção.",
    para: "Clínicas e consultórios",
    icon: "fa-solid fa-stethoscope",
  },
  {
    href: "/engenharia-de-ia/",
    label: "Engenharia de IA",
    titulo: "Engenharia de IA para o seu produto",
    desc: "RAG, agentes, servidores MCP e guardrails em .NET, entregues com testes e avaliação, prontos para produção.",
    para: "Software houses, SaaS e times de TI",
    icon: "fa-solid fa-code",
  },
];
