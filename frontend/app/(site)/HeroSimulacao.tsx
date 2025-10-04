// frontend/app/(site)/_components/HeroSimulacao.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSimulacao() {
  const [run, setRun] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!run) return;
    setMessages([input || "Olá!"]);
    const t1 = setTimeout(() => setMessages((p) => [...p, "Analisando contexto…"]), 900);
    const t2 = setTimeout(() => setMessages((p) => [...p, `Resposta para “${input || "sua mensagem"}” gerada!`]), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [run, input]);

  const handleSimular = () => {
    if (!input.trim()) return;
    setRun(false);
    setMessages([]);
    setTimeout(() => setRun(true), 10);
  };

  return (
    <section className="section grid items-center gap-14 md:grid-cols-2">
      {/* Coluna de texto */}
      <div>
        <span className="badge">Demonstração</span>

        {/* H1 com gradiente do botão, tracking e leading melhores */}
        <h1
          className="
            mt-4 font-extrabold tracking-tight leading-[1.05]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#7c3aed] to-[#db2777]
            drop-shadow-[0_2px_12px_rgba(219,39,119,.18)]
          "
        >
          Automação inteligente, visual e explicável
        </h1>

        {/* Parágrafo mais legível */}
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-[60ch]">
          Nosso Agente 24/7 vai além do &apos;Olá, digite 1&apos;. Ele é construído com n8n e IA de
          ponta para entender a intenção real, interagir com sua base de conhecimento e garantir
          que sua equipe foque no que é mais importante. Veja como a complexidade se torna
          simplicidade em um clique.
        </p>

        {/* Campo + botão */}
        <div className="mt-6 flex max-w-md gap-3">
          <label htmlFor="simulacao-input" className="sr-only">Digite sua pergunta</label>
          <input
            id="simulacao-input"
            type="text"
            className="flex-1 rounded-xl border border-white/10 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-500"
            placeholder="Digite sua pergunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSimular()}
            autoComplete="off"
          />
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleSimular}
            aria-label="Executar simulação"
          >
            Simular
          </button>
        </div>

        {/* Etiquetas */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
          <div className="card p-3">
            <div className="font-semibold">Entrada</div>
            <div>Texto / Áudio / Imagem</div>
          </div>
          <div className="card p-3">
            <div className="font-semibold">Saída</div>
            <div>Resposta + Memória</div>
          </div>
        </div>
      </div>

      {/* Coluna do mockup (dobrado) */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            relative mx-auto
            w-[420px] sm:w-[560px] lg:w-[680px]   /* era 280/340 → ~2x */
          "
        >
          <Image
            src="/hero/hero-mockup.png"
            alt="Mockup do fluxo conversacional"
            width={1020}
            height={2100}
            className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
            priority
          />

          {/* Balões */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end space-y-2 p-4">
            {messages.map((msg, i) => (
              <motion.div
                key={`${msg}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.45 }}
                className="self-end max-w-[75%] rounded-lg bg-brand-2 px-3 py-2 text-sm text-white shadow"
              >
                {msg}
              </motion.div>
            ))}

            {run && messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="self-end max-w-[60%] rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80 backdrop-blur"
              >
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/80 [animation-delay:0ms]" />
                  <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/80 [animation-delay:120ms]" />
                  <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/80 [animation-delay:240ms]" />
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
