import Image from "next/image";
import Container from "./Container";

type Item = { icon: string; title: string; desc: string };

const items: Item[] = [
  { icon: "/superpowers/entendimento360.png", title: "Entendimento 360°",  desc: "Texto, voz e visão — o agente entende como um humano." },
  { icon: "/superpowers/memoria.png",         title: "Memória Inesquecível", desc: "Contexto persistente e seguro: lembretes, preferências e histórico." },
  { icon: "/superpowers/agentes.png",         title: "Agentes Especializados", desc: "Roteamento para especialistas (Amanda, Gabriela, etc.)." },
  { icon: "/superpowers/rag.png",             title: "Conhecimento Ilimitado (RAG)", desc: "Busca em documentos, bases e APIs para respostas atualizadas." },
];

export default function Superpowers() {
  return (
    <section id="superpoderes" className="section">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 mb-10">Quatro superpoderes</h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((it) => {
              const isSvg = it.icon.toLowerCase().endsWith(".svg");
              return (
                <div
                  key={it.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center flex flex-col items-center transition-shadow hover:shadow-[0_0_0_1px_rgba(255,255,255,.08)]"
                >
                  {/* Ícone grandão e centralizado */}
                  {isSvg ? (
                    <img
                      src={it.icon}
                      alt={it.title}
                      width={96}  // ↑ aumente para 112/128 se quiser
                      height={96}
                      className="mb-4 drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
                    />
                  ) : (
                    <div className="relative mb-4 h-24 w-24 md:h-28 md:w-28">
                      <Image
                        src={it.icon}
                        alt={it.title}
                        fill
                        sizes="112px"
                        className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
                      />
                    </div>
                  )}

                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-[36ch] mx-auto">
                    {it.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
