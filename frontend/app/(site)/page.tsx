'use client';

import { useState } from 'react';

// caminhos certos, de acordo com a estrutura do seu print
import HeroSimulacao from './HeroSimulacao';
import CardsInterativos from './CardsInterativos';
import FluxoDemo from './_components/FlowDemo';
import Superpoderes from './_components/Superpowers';

export default function Page() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section id="hero" className="mb-16">
        <HeroSimulacao />
      </section>

      <section id="fluxo" className="mb-16">
        <FluxoDemo activeId={activeId} onStepChange={setActiveId} />
      </section>

      <section id="superpoderes" className="mb-16">
        <Superpoderes />
      </section>

      <section id="demos" className="mb-24">
        <CardsInterativos />
      </section>
    </main>
  );
}
