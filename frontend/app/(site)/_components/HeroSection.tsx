"use client";
import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section style={{
      position:"relative",
      padding:"var(--space-24) 0 var(--space-16)",
      background: "var(--hero-gradient)"
    }}>
      <Container>
        <div style={{display:"grid", gap:"2rem", gridTemplateColumns:"1.2fr .8fr", alignItems:"center"}}>
          <div>
            <h1 className="h1">Automação inteligente, visual e explicável</h1>
            <p className="p" style={{marginTop:"1rem"}}>
              Agentes com IA que entendem texto, voz e imagens — com memória, RAG e simulações claras do fluxo.
            </p>
            <div style={{display:"flex", gap:".75rem", marginTop:"1.5rem"}}>
              <a className="btn btn--primary" href="#demo">Simular fluxo</a>
              <a className="btn btn--ghost" href="#superpoderes">Ver superpoderes</a>
            </div>
          </div>

          {/* Troque por /freepik/hero/robot.png quando exportar */}
          <div style={{display:"flex", justifyContent:"center"}}>
            <Image src="/freepik/hero/robot.png" alt="" width={560} height={560} priority
              style={{maxWidth:"100%", height:"auto", filter:"drop-shadow(0 20px 60px rgba(0,0,0,.35))"}} />
          </div>
        </div>
      </Container>
    </section>
  );
}
