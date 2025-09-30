import React from 'react';

const steps = [
  {
    n: '1',
    title: 'Conectamos seu WhatsApp',
    desc: 'Integração oficial via API (provedor) ou bridge apropriada, com políticas anti-bloqueio.'
  },
  {
    n: '2',
    title: 'Desenhamos o fluxo no n8n',
    desc: 'Captura de mensagens, NLP/IA opcional, regras de negócio, agendamentos e integrações.'
  },
  {
    n: '3',
    title: 'Integrações e Data',
    desc: 'Google Calendar, Planilhas/CRMs, gateways de pagamento e relatórios de performance.'
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="section alternate">
      <div className="container">
        <h2 className="sectionTitle">Como funciona na prática</h2>
        <div className="grid-3">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <div style={{
                width: 42, height: 42, borderRadius: 999,
                display: 'grid', placeItems: 'center', marginBottom: 12,
                background: 'rgba(255,255,255,.08)'
              }}>
                <strong>{s.n}</strong>
              </div>
              <h3>{s.title}</h3>
              <p style={{ opacity: .85 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
