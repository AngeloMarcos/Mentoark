"use client";

import Container from "./Container";
import FlowStep from "./FlowStep";

type FlowDemoProps = {
  /** id do passo ativo (pode ser "entrada" | "processamento" | "conhecimento" | "saida" | null) */
  activeId: string | null;
  /** callback para alterar o passo ativo */
  onStepChange: (id: string | null) => void;
  /** classe extra opcional para o <section> */
  className?: string;
};

export default function FlowDemo({
  // usamos underscore para evitar aviso de variável não utilizada no build/lint
  activeId: _activeId,
  onStepChange: _onStepChange,
  className = "",
}: FlowDemoProps) {
  return (
    <section
      id="fluxo"
      className={["section", className].filter(Boolean).join(" ")}
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,.02), transparent)" }}
      aria-label="Fluxo do Agente"
    >
      <Container>
        <div className="mx-auto max-w-[960px] text-center">
          <h2 className="h2">Fluxo do Agente</h2>
          <p className="p mt-2">
            Uma visão clara das etapas: <strong>Entrada</strong> → <strong>Processamento</strong> → <strong>Conhecimento</strong> → <strong>Saída + Memória</strong>.
          </p>

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-4">
            <FlowStep
              title="Entrada"
              icon="/flow/step-entrada.svg"
              desc="Recebemos a mensagem por WhatsApp, site ou e-mail — em texto, áudio ou imagem. Tudo chega organizado para o agente."
            />
            <FlowStep
              title="Processamento"
              icon="/flow/step-processamento.svg"
              desc="A IA entende o assunto e decide o que fazer: responder, consultar uma base, abrir um chamado ou acionar um especialista."
            />
            <FlowStep
              title="Conhecimento"
              icon="/flow/step-conhecimento.svg"
              desc="O agente busca a resposta nas suas fontes oficiais (documentos, banco de dados e APIs) para garantir precisão e atualidade."
            />
            <FlowStep
              title="Saída + Memória"
              icon="/flow/step-saida.svg"
              desc="A resposta é enviada e o histórico fica salvo. Assim, nas próximas conversas o contexto já vem junto e tudo flui mais rápido."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
