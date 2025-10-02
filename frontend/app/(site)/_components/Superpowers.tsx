import Container from "./Container";
import Image from "next/image";

const items = [
  { icon:"/freepik/icons/vision.svg", title:"Entendimento 360°", desc:"Texto, voz e visão — o agente entende como um humano." },
  { icon:"/freepik/icons/memory.svg", title:"Memória Inesquecível", desc:"Contexto persistente e seguro: lembretes, preferências e histórico." },
  { icon:"/freepik/icons/split.svg", title:"Agentes Especializados", desc:"Roteamento para especialistas (Amanda, Gabriela, etc.)." },
  { icon:"/freepik/icons/db.svg", title:"Conhecimento Ilimitado (RAG)", desc:"Busca em documentos, bases e APIs para respostas atualizadas." },
];

export default function Superpowers() {
  return (
    <section id="superpoderes" className="section">
      <Container>
        <h2 className="h2" style={{marginBottom:"var(--space-8)"}}>Quatro superpoderes</h2>
        <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))"}}>
          {items.map((it) => (
            <div key={it.title} className="card">
              <Image src={it.icon} alt="" width={32} height={32} />
              <h3 style={{marginTop:"1rem", fontWeight:700}}>{it.title}</h3>
              <p className="p" style={{marginTop:".5rem"}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
