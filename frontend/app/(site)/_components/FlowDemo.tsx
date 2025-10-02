import Container from "./Container";

export default function FlowDemo() {
  return (
    <section id="fluxo" className="section" style={{background:"linear-gradient(180deg, rgba(255,255,255,.02), transparent)"}}>
      <Container>
        <h2 className="h2">Fluxo do agente</h2>
        <p className="p" style={{marginTop:"var(--space-2)"}}>
          Uma visão clara das etapas: Entrada → Gerente Setorial → RAG/Ferramentas → Resposta + Memória.
        </p>
        <div className="card" style={{marginTop:"var(--space-8)"}}>
          {/* Placeholder — depois trocamos por gráfico/ilustração animada */}
          <div style={{height:280, display:"grid", placeItems:"center", opacity:.8}}>
            [sua simulação aqui]
          </div>
        </div>
      </Container>
    </section>
  );
}
