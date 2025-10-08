"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type ChatPanelProps = {
  initialMessage?: string;
  onExit?: () => void;
};

type Bubble = { role: "user" | "bot"; text: string };

export default function ChatPanel({ initialMessage, onExit }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<Bubble[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  const whatsappLink = "https://wa.me/message/SFKOCU2RI45ZN1";

  // Mensagem inicial automática (opcional)
  useEffect(() => {
    if (initialMessage) {
      setItems([{ role: "user", text: initialMessage }]);
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          { role: "bot", text: `📲 Fale com nossa IA no WhatsApp: ${whatsappLink}` },
        ]);
      }, 600);
    }
  }, [initialMessage]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const msg = input.trim();
    setItems((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        { role: "bot", text: `📲 Fale com nossa IA no WhatsApp: ${whatsappLink}` },
      ]);
    }, 500);
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

      {/* Área de mensagens */}
      <div className="mt-3 h-[460px] overflow-y-auto rounded-3xl border border-white/10 bg-white/90 text-slate-900 p-3 md:p-4 shadow-inner">
        {items.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.18 }}
            className={[
              "mb-2 max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow",
              b.role === "user"
                ? "ml-auto bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white"
                : "bg-white border border-slate-200 text-slate-900",
            ].join(" ")}
            style={{
              borderTopLeftRadius: b.role === "user" ? "1rem" : "0.5rem",
              borderTopRightRadius: b.role === "user" ? "0.5rem" : "1rem",
            }}
          >
            {/* Transforma o link em clicável */}
            {b.text.includes("https://") ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-700 font-medium hover:underline"
              >
                📲 Fale com nossa IA no WhatsApp
              </a>
            ) : (
              b.text
            )}
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Campo de entrada */}
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 shadow focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          placeholder="Digite sua mensagem…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="rounded-2xl px-4 py-2 font-medium bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white shadow-lg hover:brightness-[1.05] active:scale-[0.98] transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
