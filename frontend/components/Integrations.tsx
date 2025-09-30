import React from 'react';

const logos = [
  { name: 'n8n',       src: '/logos/n8n.svg' },
  { name: 'Calendar',  src: '/logos/google-calendar.svg' },
  { name: 'Sheets',    src: '/logos/google-sheets.svg' },
  { name: 'CRM',       src: '/logos/hubspot.svg' },
  { name: 'Power BI',  src: '/logos/powerbi.svg' },
];

export const Integrations: React.FC = () => {
  return (
    <section id="integracoes" className="section">
      <div className="container">
        <h2 className="sectionTitle">Integrações nativas</h2>
        <p className="sectionSubtitle">Conectamos o que você usa hoje e o que vai precisar amanhã</p>
        <div className="grid-5" style={{ gap: '2.5rem', placeItems: 'center' }}>
          {logos.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} style={{ height: 36, opacity: .9 }} />
          ))}
        </div>
      </div>
    </section>
  );
};
