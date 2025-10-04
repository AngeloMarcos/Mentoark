// app/data/AutomacaoData.ts
// Estrutura de dados utilizada pelos componentes do site para descrever os
// “superpoderes” de automação. Cada item contém campos ricos para serem
// exibidos nos cards interativos e no diagrama de fluxo.

export type Poder = {
  id: string;         // identificador único
  titulo: string;     // título completo (com numeração)
  subtitulo: string;  // subtítulo breve
  descricao: string;  // descrição longa
  detalheTecnico: string; // detalhe técnico
  iconKey: string;    // chave do ícone
};

export const automacaoData: Poder[] = [
  {
    id: "entendimento",
    titulo: "1. Entendimento 360º (Áudio, Texto, Imagem)",
    subtitulo: "A IA que realmente entende o contexto multimídia do cliente.",
    descricao:
      "Nosso agente usa a Visão da IA (OpenAI) para processar e analisar áudios, textos longos e legendas em imagens, garantindo que a informação de triagem e emergência nunca se perca. Não importa o formato, ele entende.",
    detalheTecnico:
      "Estratégia Multimídia: uso do OpenAI para análise de áudio e imagem antes do processamento principal, garantindo que todo o input seja textualizado para o contexto.",
    iconKey: "vision",
  },
  {
    id: "memoria",
    titulo: "2. Memória Inesquecível e Fluxo Contínuo",
    subtitulo: "Sempre no contexto, eliminando respostas robóticas e repetidas.",
    descricao:
      "O agente se lembra de todo o histórico da conversa (dias ou semanas) graças à Memória de Chat baseada em Postgres e Langchain. Além disso, a lógica Anti‑Duplicidade via Redis combina mensagens rápidas enviadas em sequência pelo cliente, evitando que a IA atropelle a conversa.",
    detalheTecnico:
      "Arquitetura de Memória: uso de Redis para temporização de anti‑duplicidade e Postgres para armazenamento de longo prazo (Chat History).",
    iconKey: "memory",
  },
  {
    id: "agentes",
    titulo: "3. Agentes Especializados e Roteamento",
    subtitulo: "Um gerente de setor que garante o especialista certo para cada demanda.",
    descricao:
      "A IA atua como um gerente de setor que lê a intenção do cliente e roteia a conversa para o especialista adequado (Amanda para Vendas, Gabriela para Suporte). Isso garante foco e maior taxa de conversão.",
    detalheTecnico:
      "Lógica de Roteamento: um nó Gerente de Setor usa uma LLM para classificar a intenção e ativa agentes especializados via prompts (camada de especialização).",
    iconKey: "split",
  },
  {
    id: "rag",
    titulo: "4. Conhecimento Ilimitado e Treinável (RAG)",
    subtitulo: "Respostas 100% precisas, treinadas com seus próprios documentos.",
    descricao:
      "O agente usa a arquitetura RAG (Retrieval‑Augmented Generation). Ele consulta sua base de conhecimento (Supabase Vector Store) em tempo real para dar respostas imediatas e corretas sobre FAQs, preços ou horários, sem a IA alucinar. Você pode treinar o agente anexando PDFs ou usando um simples comando de texto.",
    detalheTecnico:
      "Tecnologia RAG: combinação de embeddings (OpenAI) e Supabase Vector Store para armazenamento e busca de documentos, garantindo respostas baseadas em dados.",
    iconKey: "db",
  },
];
