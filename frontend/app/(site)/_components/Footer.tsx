import Container from "./Container";

export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid rgba(255,255,255,.06)", marginTop:"var(--space-24)"}}>
      <Container className="section" >
        <div className="p" style={{opacity:.8}}>
          © {new Date().getFullYear()} Mentoark. Ilustrações de exemplo: Freepik (credite se usar recursos free).
        </div>
      </Container>
    </footer>
  );
}
