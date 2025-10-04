// frontend/app/(site)/_components/CTASection.jsx
export default function CTASection() {
  return (
    <section className="section text-center" style={{ paddingTop: 'var(--space-12)' }}>
      <h2 className="h2 mb-4">Assuma o Controle e Escalone com Inteligência</h2>
      <p className="p mx-auto" style={{ maxWidth: '600px', marginBottom: 'var(--space-6)' }}>
        Nossa automação é aberta e visível (n8n), garantindo que você tenha o controle total
        e escalabilidade na sua VPS, sem depender de caixas‑pretas.
      </p>
      <a
        href="#contato"
        className="btn btn--primary text-lg"
        style={{ padding: '1rem 2rem' }}
      >
        Agende a Demonstração do Agente 24/7
      </a>
    </section>
  );
}
