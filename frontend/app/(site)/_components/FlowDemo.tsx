// frontend/app/(site)/_components/FlowDemo.tsx
import Container from "./Container";
import FlowStep from "./FlowStep"; // importe o novo componente

export default function FlowDemo() {
  return (
    <section
      id="fluxo"
      className="section"
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,.02), transparent)" }}
    >
      <Container>
        <h2 className="h2">Fluxo do agente</h2>
        <p className="p" style={{ marginTop: "var(--space-2)" }}>
          Uma visão clara das etapas: Entrada → Processamento → Saída + Memória.
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
          <FlowStep title="Entrada" subtitle="Texto / Áudio / Imagem" />
          <FlowStep title="Processamento" subtitle="Gerente Setorial + RAG/Ferramentas" />
          <FlowStep title="Saída + Memória" subtitle="Resposta + Histórico" />
        </div>
      </Container>
    </section>
  );
}