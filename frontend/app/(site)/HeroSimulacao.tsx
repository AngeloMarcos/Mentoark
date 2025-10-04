// app/(site)/HeroSimulacao.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSimulacao() {
  const [run, setRun] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (run) {
      setMessages([input]);
      const t1 = setTimeout(() => {
        setMessages((prev) => [...prev, "Analisando contexto…"]);
      }, 1000);
      const t2 = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          `Resposta para "${input || "sua mensagem"}" gerada!`,
        ]);
      }, 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [run, input]);

  return (
    <section className="section grid gap-10 md:grid-cols-2 items-center">
      <div>
        <span className="badge">Demonstração</span>
        <h1 className="h1 mt-3">Automação inteligente, visual e explicável</h1>
        <p className="lead mt-4">
          Mostre o fluxo com um mockup do Freepik e uma simulação rápida que ilumina as etapas do agente.
        </p>
        <div className="mt-6 flex gap-3 max-w-md">
          <input
            type="text"
            className="flex-1 rounded-xl px-4 py-2 text-slate-900"
            placeholder="Digite sua pergunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn--primary"
            onClick={() => {
              if (input.trim()) {
                setRun(false);
                setTimeout(() => setRun(true), 20);
              }
            }}
          >
            Simular
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300/80">
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
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-[280px] sm:w-[340px]"
        >
          <Image
            src="/freepik/mockups/phone.png"
            alt="Mockup de telefone"
            width={680}
            height={1400}
            className="w-full h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,.45)]"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-2 pointer-events-none">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5 }}
                className="self-end max-w-[70%] rounded-lg px-3 py-2 text-sm bg-brand-2 text-white shadow"
              >
                {msg}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
