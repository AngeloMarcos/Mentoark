import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ paddingTop: '5rem' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1rem' }}>
            Automação de WhatsApp<br/>com IA + n8n
          </h1>
          <p style={{ opacity: .9, marginBottom: '1.5rem' }}>
            Tenha um **atendimento inteligente 24/7** no WhatsApp:
            agendamentos automáticos, lembretes, qualificação de leads e integração total
            com Google Calendar, Planilhas/CRMs e dashboards.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a className="btn-primary" href="https://wa.me/5511980925504">
              Solicitar Demonstração
            </a>
            <a className="btn-outline" href="#como-funciona">
              Ver como funciona
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img src="/hero-bot.png" alt="Agente de IA da MentoArk" className="icon" />
        </div>
      </div>
    </section>
  );
};
