// app/(site)/CardsInterativos.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { automacaoData } from "./data/AutomacaoData";
import { useState } from "react";

interface CardsInterativosProps {
  onSelect?: (id: string | null) => void;
}

const iconPath: Record<string, string> = {
  voice: "/freepik/icons/voice.png",
  chat: "/freepik/icons/chat.png",
  vision: "/freepik/icons/vision.png",
  memory: "/freepik/icons/memory.png",
  split: "/freepik/icons/split.png",
  db: "/freepik/icons/db.png",
  doc: "/freepik/icons/doc.png",
  "mic-camera": "/freepik/icons/vision.png",
  "brain-lock": "/freepik/icons/memory.png",
  "switch-avatars": "/freepik/icons/split.png",
  "library-document": "/freepik/icons/db.png",
};

export default function CardsInterativos({ onSelect }: CardsInterativosProps) {
  const [open, setOpen] = useState<string | null>(automacaoData[0]?.id ?? null);

  return (
    <section id="superpoderes" className="section">
      <h2 className="h2 text-center">Quatro superpoderes</h2>
      <p className="lead mt-2 text-center">
        Clique em cada card para visualizar a descrição e um detalhe técnico de como o agente funciona.
      </p>
      <div style={{ marginTop: "var(--space-8)" }} className="grid gap-4 md:grid-cols-2">
        {automacaoData.map((poder, i) => {
          const expanded = open === poder.id;
          return (
            <motion.article
              key={poder.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`card p-6 cursor-pointer ${expanded ? "ring-2 ring-brand-1/60" : ""}`}
              onClick={() => {
                const newOpen = expanded ? null : poder.id;
                setOpen(newOpen);
                if (onSelect) onSelect(newOpen);
              }}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={iconPath[poder.iconKey] ?? "/freepik/icons/vision.png"}
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-base md:text-lg">{poder.titulo}</h3>
                  <p className="p mt-1">
                    {expanded ? poder.descricao : poder.subtitulo}
                  </p>
                  {expanded && (
                    <motion.p
                      layout
                      animate={{ height: "auto", opacity: 1 }}
                      className="text-sm mt-3 text-slate-300/90 leading-relaxed"
                    >
                      <strong>Detalhe técnico: </strong>
                      {poder.detalheTecnico}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
