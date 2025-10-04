// app/(site)/page.tsx
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const HeroSimulacao     = dynamic(() => import("./HeroSimulacao"),    { ssr: true });
const CardsInterativos  = dynamic(() => import("./CardsInterativos"), { ssr: true });
const DiagramaFluxo     = dynamic(() => import("./DiagramaFluxo"),    { ssr: true });
const CTASection        = dynamic(() => import("./CTASection"),        { ssr: true });
const AtribuicaoFreepik = dynamic(() => import("./AtribuicaoFreepik"), { ssr: true });

export default function Page() {
  // id do superpoder atualmente selecionado (para sincronizar com o diagrama)
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main>
      <section id="hero">
        <HeroSimulacao />
      </section>
      <section id="superpoderes">
        <CardsInterativos onSelect={setActiveId} />
      </section>
      <section id="fluxo">
        <DiagramaFluxo activeId={activeId} />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      {/* rodapé de atribuição do Freepik */}
      <footer className="mt-8">
        <AtribuicaoFreepik />
      </footer>
    </main>
  );
}
