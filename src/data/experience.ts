export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "QAMetrik",
    role: "Desenvolvedor Fullstack Senior",
    period: "ago 2025 — presente",
    description: [
      "Desenvolvimento do ecossistema QAMetrik/QaCodAI com .NET 9, .NET Core 3.1 (ABP) e Angular 16",
      "Integração de IA com Groq, Azure AI Foundry e Ollama; APIs Python (FastAPI) em Azure Container Apps",
      "Criação de agentes e automações com Claude e Codex para análise técnica, geração de código e documentação",
      "Pipeline de transcrição de áudio com Azure Speech Services e refinamento via LLM",
    ],
  },
  {
    company: "Supero Tecnologia",
    role: "Analista Desenvolvedor",
    period: "2024 — 2025",
    description: [
      "Desenvolvimento de plataforma omnichannel de marketing digital e AVA",
    ],
  },
  {
    company: "Sigma Dataserv Informatica",
    role: "Analista Desenvolvedor",
    period: "2023 — 2024",
    description: [
      "Cliente Selbetti: arquitetura em camadas para sommelier digital de vinhos, TDD e automação",
      "Cliente Imetame: plataforma de gestão portuária com .NET Core 9, Angular 19, SignalR, RabbitMQ e Keycloak",
    ],
  },
  {
    company: "EOS Systems",
    role: "Agilista / Gestor de Projetos",
    period: "2022 — 2023",
    description: [
      "Implementação de metodologias ágeis em TI, RH e Financeiro com Spotify Model, OKRs e Lean",
      "Cliente Tribunal de Contas do Paraná: modernização de sistemas legados e migração para Azure e .NET Core",
    ],
  },
  {
    company: "Compay Z",
    role: "Gerente de Projetos",
    period: "2022",
    description: [
      "Cliente Azul Linhas Aéreas: serviços de mensageria e seguros com Azure, Dapper e Docker",
    ],
  },
  {
    company: "Bigfield Desenvolvimento",
    role: "Analista Desenvolvedor",
    period: "2018 — 2020",
    description: [
      "Projetos de segurança pública (SIGO, BO, CADG) com .NET, AngularJS e Oracle",
    ],
  },
];
