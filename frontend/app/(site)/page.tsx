"use client";

import { useState } from "react";
import MotionSection from "./_components/MotionSection";
import StatCounter from "./_components/StatCounter"; // ⬅️ novo

// ajuste os caminhos conforme sua estrutura real:
import HeroSimulacao from "./HeroSimulacao";
import CardsInterativos from "./CardsInterativos";
import FluxoDemo from "./_components/FlowDemo";
import Superpoderes from "./_components/Superpowers";

export default function Page() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section id="hero" className="mb-12">
        <HeroSimulacao />
      </section>

      {/* Métricas (StatCounter) */}
      <MotionSection className="mb-16">
        <section id="metrics" aria-label="Métricas">
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div>
              <StatCounter to={120} suffix="+" className="text-3xl font-extrabold" />
              <p className="text-white/70 mt-1">Integrações</p>
            </div>
            <div>
              <StatCounter to={99} suffix=".9%" className="text-3xl font-extrabold" />
              <p className="text-white/70 mt-1">Uptime</p>
            </div>
            <div>
              <StatCounter to={24} suffix="/7" className="text-3xl font-extrabold" />
              <p className="text-white/70 mt-1">Atendimento</p>
            </div>
          </div>
        </section>
      </MotionSection>

      {/* Fluxo */}
      <section id="fluxo" className="mb-16">
        <FluxoDemo activeId={activeId} onStepChange={setActiveId} />
      </section>

      {/* Superpoderes */}
      <MotionSection className="mb-16">
        <Superpoderes />
      </MotionSection>

      {/* Demos */}
      <section id="demos" className="mb-24">
        <CardsInterativos />
      </section>
    </main>
  );
}
