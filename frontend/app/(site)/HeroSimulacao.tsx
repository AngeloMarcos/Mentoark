"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { linkify } from "@/lib/linkify";

export default function HeroSimulacao() {
  const [run, setRun] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const whatsappLink = "https://wa.me/message/SFKOCU2RI45ZN1";

  useEffect(() => {
    if (!run) return;
    setMessages([input || "Olá!"]);

    // "digitando..."
    const t1 = setTimeout(
      () => setMessages((p) => [...p, "Processando..."]),
      600
    );

    // simulação de resposta do backend
    const t2 = setTimeout(() => {
      setMessages((p) => [
        ...p,
        `📲 Fale com nossa IA no WhatsApp: ${whatsappLink}`,
      ]);
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [run, input]);

  const handleSimular = () => {
    if (!input.trim()) return;
    setRun(false);
    setMessages([]);
    setTimeout(() => setRun(true), 10);
  };

  return (
    <section className="grid items-center gap-14 md:grid-cols-2">
      {/* Texto principal */}
      <div>
        <span className="inline-block text-sm text-white/70">Demonstração</span>

        {/* TÍTULO COM EFEITO NEON */}
        <h1
          className="
            mt-3 text-4xl md:text-6xl font-extrabold leading-tight
            bg-gradient-to-r from-fuchsia-500 via-violet-500 to-fuchsia-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]
            hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]
            transition-all duration-300
          "
        >
          Automação inteligente,<br />
          visual e explicável
        </h1>

        <p className="mt-6 max-w-[60ch] text-white/80">
          Nosso agente responde em tempo real — interpretando texto, áudio e
          imagem — com base em IA conectada ao seu negócio.
        </p>

        <div className="mt-6 flex max-w-md gap-3">
          <input
            type="text"
            className="flex-1 rounded-xl border border-white/10 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-500"
            placeholder="Digite sua pergunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSimular()}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={handleSimular}
            className="
              rounded-xl px-4 py-2 font-medium text-white shadow-lg
              bg-gradient-to-br from-fuchsia-600 to-violet-600
              hover:brightness-[1.1] active:scale-[0.97] transition
              shadow-fuchsia-600/30
            "
          >
            Abrir chat
          </button>
        </div>
      </div>

      {/* Mockup + balões */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto rounded-2xl border border-white/10 shadow-2xl p-4 bg-black/20"
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
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 p-4">
            {messages.map((msg, i) => (
              <motion.div
                key={`${msg}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`pointer-events-auto self-${
                  i % 2 === 0 ? "end" : "start"
                } max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow
                ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                {linkify(msg)}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
