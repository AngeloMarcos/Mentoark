import Container from "./Container";
import FlowStep from "./FlowStep";

export default function FlowDemo() {
  return (
    <section
      id="fluxo"
      className="section"
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,.02), transparent)" }}
    >
      <Container>
        <div className="mx-auto max-w-[960px] text-center">
          <h2 className="h2">Fluxo do Agente</h2>
          <p className="p mt-2">
            Uma visão clara das etapas: Entrada → Processamento → Conhecimento → Saída + Memória.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4 items-stretch">
            <FlowStep
              title="Entrada"
              icon="/flow/step-entrada.svg"
              desc="Captação Multimídia: O n8n atua como o roteador central que recebe a mensagem do cliente (áudio, texto, legenda de imagem) e a processa para a IA. Isso garante que nenhum dado se perca na comunicação inicial."
            />
            <FlowStep
              title="Processamento"
              icon="/flow/step-processamento.svg"
              desc="Lógica Inteligente: O agente principal (Gerente) classifica a demanda e usa a lógica do n8n (Switch Nodes) para decidir: 1) Precisa de uma ferramenta? 2) Qual agente especialista deve responder?"
            />
            <FlowStep
              title="Conhecimento"
              icon="/flow/step-conhecimento.svg"
              desc="Acesso em Tempo Real: Aqui a IA consulta o Supabase Vector Store (RAG), o Redis (Anti-Duplicidade) ou outras APIs do seu negócio. É a fonte da resposta precisa e atualizada."
            />
            <FlowStep
              title="Saída + Memória"
              icon="/flow/step-saida.svg"
              desc="Entrega e Aprendizado: O n8n envia a resposta final, formatada para o WhatsApp (Divisão de Mensagens), e simultaneamente armazena o histórico no Postgres (Memória de Longo Prazo) para contextualizar futuras conversas."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
