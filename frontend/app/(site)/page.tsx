// app/(site)/page.tsx

import dynamic from "next/dynamic";

const HeroSimulacao   = dynamic(() => import("./HeroSimulacao"),   { ssr: true });
const CardsInterativos = dynamic(() => import("./CardsInterativos"), { ssr: true });
const DiagramaFluxo   = dynamic(() => import("./DiagramaFluxo"),   { ssr: true });

export default function Page() {
  return (
    <main>
      <section id="hero">
        <HeroSimulacao />
      </section>

      <section id="superpoderes">
        <CardsInterativos />
      </section>

      <section id="fluxo">
        <DiagramaFluxo />
      </section>
    </main>
  );
}
