// app/(site)/page.tsx
import HeroSimulacao from "./HeroSimulacao";
import CardsInterativos from "./CardsInterativos";
import DiagramaFluxo from "./DiagramaFluxo";

export default function Page() {
  return (
    <>
      <HeroSimulacao />
      <CardsInterativos />
      <DiagramaFluxo />
    </>
  );
}
