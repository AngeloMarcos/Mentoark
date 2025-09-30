import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="section alternate" style={{ padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <small>© {new Date().getFullYear()} MentoArk — Automação de WhatsApp com n8n</small>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="mailto:contato@mentoark.com.br">contato@mentoark.com.br</a>
          <a href="https://wa.me/5511980925504">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};
