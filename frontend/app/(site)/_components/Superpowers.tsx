import Image from "next/image";

const items = [
  {
    icon: "/superpowers/entendimento360.png",
    title: "Entendimento 360º",
    desc:
      "Não perca mais o contexto. Nosso agente usa IA para processar áudios e analisar legendas em imagens, convertendo tudo em informação acionável. Garantia de triagem correta em qualquer formato de input.",
  },
  {
    icon: "/superpowers/memoria.png",
    title: "Memória Inesquecível",
    desc:
      "O agente se lembra de todas as interações passadas, graças ao armazenamento em Postgres. Além disso, a lógica de Anti-Duplicidade (Redis) evita que a IA “atropelle” o cliente que envia várias mensagens seguidas.",
  },
  {
    icon: "/superpowers/agentes.png",
    title: "Agentes Especializados",
    desc:
      "Diga adeus ao “Fale com o setor X”. O Gerente Setor classifica a intenção real da mensagem e aciona o agente certo (Vendas, Suporte, FAQ), garantindo que a conversa tenha o foco e o tom de voz corretos.",
  },
  {
    icon: "/superpowers/rag.png",
    title: "Conhecimento Ilimitado (RAG)",
    desc:
      "Nosso diferencial: O agente consulta sua Base de Conhecimento em tempo real. Não inventamos respostas. Obtenha precisão cirúrgica sobre seus produtos, preços e políticas. Fácil de treinar, basta anexar um documento.",
  },
];

export default function Superpowers() {
  return (
    <section id="superpoderes" className="section">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="h2 mb-8">Quatro superpoderes</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((it) => {
            const isSvg = it.icon.toLowerCase().endsWith(".svg");
            return (
              <div
                key={it.title}
                className="card-accent-orange rounded-2xl p-8 text-center flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <span className="absolute inset-0 -z-10 mx-auto size-16 rounded-full bg-orange-500/10 blur-md" />
                  {isSvg ? (
                    <img src={it.icon} alt={it.title} width={112} height={112} className="drop-shadow-[0_6px_18px_rgba(0,0,0,.35)] mx-auto" />
                  ) : (
                    <div className="relative h-28 w-28 mx-auto">
                      <Image src={it.icon} alt={it.title} fill sizes="112px" className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-white/90 leading-relaxed max-w-[36ch] mx-auto">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
