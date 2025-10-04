// frontend/app/(site)/_components/HeroSection.tsx
"use client";
import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "var(--space-24) 0 var(--space-16)",
        background: "var(--hero-gradient)",
      }}
      className="section-center"        /* aplica display: flex; column; center */
    >
      <Container>
        <div style={{ maxWidth: "800px", width: "100%" }} className="text-center">
          <h1 className="h1">Automação inteligente, visual e explicável</h1>
          <p className="p" style={{ marginTop: "1rem" }}>
            Agentes com IA que entendem texto, voz e imagens — com memória, RAG e simulações claras do fluxo.
          </p>
          <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem", justifyContent: "center" }}>
            <a className="btn btn--primary" href="#fluxo">Simular fluxo</a>
            <a className="btn btn--ghost" href="#superpoderes">Ver superpoderes</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
