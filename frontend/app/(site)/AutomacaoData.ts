export type AutoItem = {
  slug: string;
  title: string;
  descricao: string;
  icon: string; // caminho no /public
};

// app/(site)/data/AutomacaoData.ts
export const FLOW_STEPS = [
  {
    title: "Entrada",
    icon: "/flow/step-entrada.svg",
    desc:
      "Captação Multimídia: O n8n atua como o roteador central que recebe a mensagem do cliente (áudio, texto, legenda de imagem) e a processa para a IA. Isso garante que nenhum dado se perca na comunicação inicial.",
  },
  {
    title: "Processamento",
    icon: "/flow/step-processamento.svg",
    desc:
      "Lógica Inteligente: O agente principal (Gerente) classifica a demanda e usa a lógica do n8n (Switch Nodes) para decidir: 1) Precisa de uma ferramenta? 2) Qual agente especialista deve responder?",
  },
  {
    title: "Conhecimento",
    icon: "/flow/step-conhecimento.svg",
    desc:
      "Acesso em Tempo Real: Aqui a IA consulta o Supabase Vector Store (RAG), o Redis (Anti-Duplicidade) ou outras APIs do seu negócio. É a fonte da resposta precisa e atualizada.",
  },
  {
    title: "Saída + Memória",
    icon: "/flow/step-saida.svg",
    desc:
      "Entrega e Aprendizado: O n8n envia a resposta final, formatada para o WhatsApp (Divisão de Mensagens), e simultaneamente armazena o histórico no Postgres (Memória de Longo Prazo) para contextualizar futuras conversas.",
  },
];

export const FLOW_TITLE = "Fluxo do Agente";
export const FLOW_SUB =
  "Uma visão clara das etapas: Entrada → Processamento → Conhecimento → Saída + Memória.";

