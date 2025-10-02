export type AutoItem = {
  slug: string;
  title: string;
  descricao: string;
  icon: string; // caminho no /public
};

export const automacaoData: AutoItem[] = [
  {
    slug: "entendimento",
    title: "Entendimento 360º",
    descricao: "Texto curto do card…",
    icon: "/freepik/icons/vision.png",
  },
  {
    slug: "memoria",
    title: "Memória Inesquecível",
    descricao: "Texto curto do card…",
    icon: "/freepik/icons/memory.png",
  },
  {
    slug: "agentes",
    title: "Agentes Especializados",
    descricao: "Texto curto do card…",
    icon: "/freepik/icons/split.png",
  },
  {
    slug: "rag",
    title: "Conhecimento Ilimitado (RAG)",
    descricao: "Texto curto do card…",
    icon: "/freepik/icons/db.png",
  },
];
