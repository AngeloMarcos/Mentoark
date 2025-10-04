import Image from "next/image";
import Container from "./Container";

const items = [
  { icon: "/superpowers/entendimento360.png", title: "Entendimento 360°",  desc: "Texto, voz e visão — o agente entende como um humano." },
  { icon: "/superpowers/memoria.png",         title: "Memória Inesquecível",desc: "Contexto persistente e seguro: lembretes, preferências e histórico." },
  { icon: "/superpowers/agentes.png",         title: "Agentes Especializados", desc: "Roteamento para especialistas (Amanda, Gabriela, etc.)." },
  { icon: "/superpowers/rag.png",             title: "Conhecimento Ilimitado (RAG)", desc: "Busca em documentos, bases e APIs para respostas atualizadas." },
];

export default function Superpowers() {
  return (
    <section id="superpoderes" className="section">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 mb-8">Quatro superpoderes</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                {/* ícone MAIOR */}
                <div className="relative mb-4 h-12 w-12 md:h-16 md:w-16">
                  <Image src={it.icon} alt={it.title} fill className="object-contain" sizes="64px" />
                </div>

                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
