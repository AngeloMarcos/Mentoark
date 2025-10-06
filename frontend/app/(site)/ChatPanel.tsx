"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendMessage } from "@/app/api/sendMessage";

type ChatPanelProps = {
  initialMessage?: string;
  onExit?: () => void;
};

type Bubble = { role: "user" | "bot" | "system"; text: string };

export default function ChatPanel({ initialMessage, onExit }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<Bubble[]>([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      setItems([{ role: "user", text: initialMessage }]);
      void send(initialMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMessage]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items, loading]);

  async function send(msg: string) {
    if (!msg.trim()) return;
    setLoading(true);
    try {
      const res = await sendMessage("u1", msg);
      if (res?.ok && res.reply) {
        setItems((prev) => [...prev, { role: "bot", text: res.reply }]);
      } else {
        setItems((prev) => [
          ...prev,
          { role: "system", text: "⚠️ Não foi possível obter uma resposta agora." },
        ]);
      }
    } catch {
      setItems((prev) => [
        ...prev,
        { role: "system", text: "❌ Erro de conexão com o servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const msg = input;
    setItems((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    await send(msg);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-2 md:p-3 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 border border-white/10 backdrop-blur">
        <div className="font-semibold">Chat • Assistente</div>
        <button
          onClick={onExit}
          className="rounded-xl border border-white/10 px-3 py-1 text-sm hover:bg-white/10 transition"
          aria-label="Fechar chat"
        >
          Fechar
        </button>
      </div>

      {/* Área de mensagens (fundo claro) */}
      <div
        className="
          mt-3 h-[460px] overflow-y-auto rounded-3xl
          border border-white/10
          bg-white/90 text-slate-900
          p-3 md:p-4
          shadow-inner
        "
      >
        {items.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.18 }}
            className={[
              "mb-2 max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow",
              b.role === "user"
                ? // usuário: balão brand com texto branco
                  "ml-auto bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-fuchsia-600/30"
                : b.role === "bot"
                ? // bot: branco com leve borda
                  "bg-white border border-slate-200 text-slate-900"
                : // system: amarelo suave
                  "bg-amber-50 border border-amber-200 text-amber-900"
            ].join(" ")}
            style={{
              borderTopLeftRadius: b.role === "user" ? "1rem" : "0.5rem",
              borderTopRightRadius: b.role === "user" ? "0.5rem" : "1rem",
            }}
          >
            {b.text}
          </motion.div>
        ))}

        {/* Loading typing */}
        {loading && (
          <div className="max-w-[65%] rounded-2xl bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:120ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:240ms]" />
            </span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="mt-3 flex gap-2">
        <input
          className="
            flex-1 rounded-2xl border border-slate-200 bg-white
            px-4 py-2 text-slate-900 placeholder:text-slate-400
            shadow
            focus:outline-none focus:ring-2 focus:ring-fuchsia-400
          "
          placeholder="Digite sua mensagem…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="
            rounded-2xl px-4 py-2 font-medium
            bg-gradient-to-br from-fuchsia-600 to-violet-600
            text-white shadow-lg shadow-fuchsia-600/30
            hover:brightness-[1.05] active:scale-[0.98] transition
          "
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
