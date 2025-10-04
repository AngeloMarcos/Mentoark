// app/(site)/CTASection.tsx
"use client";

export default function CTASection() {
  return (
    <section className="section text-center">
      <h2 className="h2">Assuma o Controle e Escalone com Inteligência</h2>
      <p className="lead mt-2 max-w-3xl mx-auto">
        Nossa automação é aberta e visível (n8n), garantindo que você tenha o controle total e escalabilidade na sua VPS, sem depender de caixas‑pretas.
      </p>
      <a href="#contato" className="btn btn--primary mt-6 inline-flex justify-center">
        Agende a Demonstração do Agente 24/7
      </a>
    </section>
  );
}
