// frontend/app/(site)/_components/FlowDemo.tsx
import Container from "./Container";
import FlowStep from "./FlowStep";

export default function FlowDemo() {
  return (
    <section
      id="fluxo"
      className="section"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,.02), transparent)",
      }}
    >
      <Container>
        {/* define um wrapper centralizado com largura máxima */}
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="h2">Fluxo do agente</h2>
          <p className="p" style={{ marginTop: "var(--space-2)" }}>
            Uma visão clara das etapas: Entrada → Processamento → Conhecimento → Saída + Memória.
          </p>

          {/* Grid responsivo de etapas */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "var(--space-8)",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
           <FlowStep title="Entrada"         desc="Texto / Áudio / Imagem"             icon="/flow/step-entrada.svg" />
            <FlowStep title="Processamento"   desc="Gerente setorial + RAG/Ferramentas" icon="/flow/step-processamento.svg" />
            <FlowStep title="Conhecimento"    desc="Bases, documentos e APIs"           icon="/flow/step-conhecimento.svg" />
            <FlowStep title="Saída + Memória" desc="Resposta e histórico"               icon="/flow/step-saida.svg" />

          </div>
        </div>
      </Container>
    </section>
  );
}
