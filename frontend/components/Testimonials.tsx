import React from 'react';

const depo = [
  {
    quote: 'Reduzimos 40% das faltas com lembretes automáticos e confirmação pelo WhatsApp.',
    author: 'Dra. Ana Martins',
    role: 'Clínica de Estética'
  },
  {
    quote: 'O bot qualifica e agenda; minha equipe foca nos casos importantes.',
    author: 'Carlos Souza',
    role: 'Consultório de Psicologia'
  },
  {
    quote: 'A integração com Calendar e Sheets organizou tudo – relatório sai “pronto”.',
    author: 'Beatriz Lima',
    role: 'Clínica Odontológica'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="section">
      <div className="container">
        <h2 className="sectionTitle">Resultados que falam por si</h2>
        <div className="grid-3">
          {depo.map(d => (
            <figure key={d.author} className="card">
              <blockquote style={{ fontStyle: 'italic' }}>
                “{d.quote}”
              </blockquote>
              <figcaption style={{ marginTop: 12, opacity: .9 }}>
                <strong>{d.author}</strong> — {d.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
