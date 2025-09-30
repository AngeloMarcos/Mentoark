// frontend/components/Header.tsx
const Header: React.FC = () => {
  return (
    <header
      className="container"
      style={{
        padding: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <a href="/" aria-label="MentoArk">
        <img src="/logo-mentoark.svg" alt="MentoArk" style={{ height: 32 }} />
      </a>

      <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        <a href="#solucao">Solução</a>
        <a href="#como-funciona">Como Funciona</a>
        <a href="#integracoes">Integrações</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="https://wa.me/5511980925504" className="btn-secondary">
          Fale no WhatsApp
        </a>
      </nav>
    </header>
  );
};

export default Header;
