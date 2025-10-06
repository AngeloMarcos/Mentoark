"use client";

import Image from "next/image";

const items = [
  {
    icon: "/superpowers/entendimento360.png",
    title: "Entendimento 360º",
    desc:
      "Texto, áudio ou imagem: o agente entende tudo. Ele transforma o que chega em informação clara para seguir o melhor caminho.",
  },
  {
    icon: "/superpowers/memoria.png",
    title: "Memória Inesquecível",
    desc:
      "As conversas ficam salvas com segurança. Se o cliente envia várias mensagens, o sistema evita duplicidades e mantém o fio da conversa.",
  },
  {
    icon: "/superpowers/agentes.png",
    title: "Agentes Especializados",
    desc:
      "Cada assunto vai para quem entende: Vendas, Suporte, FAQ… O gerente identifica a intenção e direciona automaticamente.",
  },
  {
    icon: "/superpowers/rag.png",
    title: "Conhecimento Ilimitado (RAG)",
    desc:
      "O agente consulta direto as suas fontes (documentos, APIs e banco de dados). Nada de chute: respostas confiáveis e atualizadas.",
  },
];

export default function Superpowers() {
  return (
    <section id="superpoderes" className="section" aria-labelledby="superpowers-title">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 id="superpowers-title" className="h2 mb-8">Quatro superpoderes</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((it) => {
            const isSvg = it.icon.toLowerCase().endsWith(".svg");
            return (
              <div
                key={it.title}
                className="card-accent-orange flex flex-col items-center rounded-2xl p-8 text-center"
              >
                <div className="relative mb-4">
                  <span className="absolute inset-0 -z-10 mx-auto size-16 rounded-full bg-orange-500/10 blur-md" />
                  {isSvg ? (
                    <img
                      src={it.icon}
                      alt={it.title}
                      width={112}
                      height={112}
                      className="mx-auto drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
                    />
                  ) : (
                    <div className="relative mx-auto h-28 w-28">
                      <Image
                        src={it.icon}
                        alt={it.title}
                        fill
                        sizes="112px"
                        className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mx-auto mt-2 max-w-[36ch] leading-relaxed text-white/90">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
