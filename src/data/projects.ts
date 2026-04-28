export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    name: "dotnet-rag-documents",
    description:
      "Pipeline RAG completo em .NET 9 — ingere documentos, armazena vetores no PostgreSQL com pgvector e responde perguntas com fontes citadas. Suporta Azure OpenAI e Ollama via configuração.",
    tags: ["C#", ".NET 9", "RAG", "pgvector", "Azure OpenAI", "Ollama", "Clean Architecture", "CQRS"],
    url: "https://github.com/alexandrecampos-dev/dotnet-rag-documents",
    highlight: true,
  },
  {
    name: "dotnet-mcp-library",
    description:
      "Servidor MCP em .NET 9 que expõe um domínio de biblioteca como ferramentas tipadas para o Claude. Referência de integração .NET com Model Context Protocol sem Python ou Node.js.",
    tags: ["C#", ".NET 9", "MCP", "Model Context Protocol", "Clean Architecture", "CQRS", "MediatR"],
    url: "https://github.com/alexandrecampos-dev/dotnet-mcp-library",
    highlight: true,
  },
  {
    name: "QaCodAI",
    description:
      "Plataforma enterprise de IA para SAP/ABAP — geração de código, revisão técnica e documentação com motor multi-provedor (Groq, Azure AI, Ollama). 13 configurações de prompt para S/4HANA e ECC.",
    tags: ["C#", ".NET 9", "Angular 18", "Python", "FastAPI", "PostgreSQL", "Azure", "SAP/ABAP"],
    url: "https://github.com/alexandrecampos-dev",
    highlight: false,
  },
];
