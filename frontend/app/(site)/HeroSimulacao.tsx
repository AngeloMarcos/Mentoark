"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ChatPanel from "./ChatPanel";                // ⬅️ novo
import { sendMessage } from "@/app/api/sendMessage";

type Mode = "intro" | "chat";

export default function HeroSimulacao() {
  const [mode, setMode] = useState<Mode>("intro");
  const [input, setInput] = useState("");
  const [seedMessage, setSeedMessage] = useState<string | null>(null); // primeira msg levada ao chat
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<string[]>([]); // usado no painel intro

  const handleFirstSimulate = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setMessages([input]);

    // tenta pegar a primeira resposta real, mas mesmo se der erro, abre o chat
    try {
      const res = await sendMessage("u1", input);
      setSeedMessage(input);          // joga a primeira mensagem pro chat
      setMode("chat");                // transição para o chat
    } catch {
      setSeedMessage(input);
      setMode("chat");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section hero grid items-center gap-14 md:grid-cols-2">
      {/* Lado esquerdo: texto permanece igual */}
      <div>
        <span className="badge">Demonstração</span>
        <h1 className="h1 mt-4 text-gradient-primary">
          Automação inteligente, visual e explicável
        </h1>
        <p className="lead mt-6 max-w-[60ch]">
          Nosso agente responde em tempo real — interpretando texto, áudio e imagem — com base
          em IA conectada ao seu negócio.
        </p>

        {/* Campo e botão permanecem — no modo chat, esse input vira só “atalho” (continua abrindo o chat) */}
        <div className="mt-6 flex max-w-md gap-3">
          <input
            type="text"
            placeholder="Digite sua pergunta..."
            className="flex-1 rounded-xl border border-white/10 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleFirstSimulate()}
            disabled={loading}
          />
          <button
            onClick={handleFirstSimulate}
            className="btn btn--primary"
            disabled={loading}
          >
            {loading ? "Enviando..." : mode === "intro" ? "Simular" : "Abrir chat"}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
          <div className="card-accent-orange p-3">
            <div className="font-semibold">Entrada</div>
            <div>Texto / Áudio / Imagem</div>
          </div>
          <div className="card-accent-orange p-3">
            <div className="font-semibold">Saída</div>
            <div>Resposta + Memória</div>
          </div>
        </div>
      </div>

      {/* Lado direito: transição mockup ⇄ chat */}
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          {mode === "intro" ? (
            <motion.div
              key="intro-panel"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative mx-auto hero-mockup"
            >
              <Image
                src="/hero/hero-mockup.png"
                alt="Mockup do fluxo conversacional"
                width={1020}
                height={2100}
                className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
                priority
              />
              {/* Balões simples no modo intro (opcional) */}
              {messages.length > 0 && (
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end space-y-2 p-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={`${msg}-${i}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="self-end max-w-[75%] rounded-lg bg-brand-2 px-3 py-2 text-sm text-white shadow"
                    >
                      {msg}
                    </motion.div>
                  ))}
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="self-end max-w-[60%] rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80 backdrop-blur"
                    >
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:120ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:240ms]" />
                      </span>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="chat-panel"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <ChatPanel
                initialMessage={seedMessage ?? undefined}
                onExit={() => {
                  setMode("intro");
                  setSeedMessage(null);
                  setMessages([]);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
