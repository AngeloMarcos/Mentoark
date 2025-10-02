// app/data/AutomacaoData.ts
export type Poder = {
  slug: string;
  titulo: string;
  desc: string;
  iconKey: "voice" | "chat" | "vision" | "memory" | "split" | "db" | "doc";
  detalheTecnico?: string;
};

export const automacaoData: Poder[] = [
  {
    slug: "entendimento",
    titulo: "Entendimento 360º",
    desc: "Texto, voz e visão — o agente enxerga e entende como um humano.",
    iconKey: "vision",
  },
  {
    slug: "memoria",
    titulo: "Memória Inesquecível",
    desc: "Contexto persistente e seguro — lembretes, preferências e histórico.",
    iconKey: "memory",
  },
  {
    slug: "agentes",
    titulo: "Agentes Especializados",
    desc: "Roteamento para especialistas (Amanda, Gabriela, etc.) conforme a tarefa.",
    iconKey: "split",
  },
  {
    slug: "rag",
    titulo: "Conhecimento Ilimitado (RAG)",
    desc: "Busca e leitura de documentos, bases e APIs para respostas atualizadas.",
    iconKey: "db",
  },
];
