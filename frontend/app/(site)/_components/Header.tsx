import Container from "./Container";

export default function Header() {
  return (
    <header style={{ backdropFilter:"saturate(140%) blur(8px)", borderBottom:"1px solid rgba(255,255,255,.06)" }}>
      <Container className="header">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", height:"64px"}}>
          <a href="/" style={{fontWeight:800, letterSpacing:.3}}>Mentoark.ai</a>
          <nav style={{display:"flex", gap:"1rem"}}>
            <a href="#superpoderes" className="p">Superpoderes</a>
            <a href="#fluxo" className="p">Fluxo</a>
            <a href="#demo" className="btn btn--primary">Ver demonstração</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
