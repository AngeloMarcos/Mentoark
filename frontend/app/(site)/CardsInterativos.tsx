// app/(site)/CardsInterativos.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { automacaoData } from "./data/AutomacaoData";
import { useState } from "react";

const iconPath: Record<string, string> = {
  voice: "/freepik/icons/voice.png",
  chat: "/freepik/icons/chat.png",
  vision: "/freepik/icons/vision.png",
  memory: "/freepik/icons/memory.png",
  split: "/freepik/icons/split.png",
  db: "/freepik/icons/db.png",
  doc: "/freepik/icons/doc.png",
};

export default function CardsInterativos() {
  const [open, setOpen] = useState<string | null>(automacaoData[0]?.slug ?? null);

  return (
    <section id="superpoderes" className="section">
      <h2 className="h2">Quatro superpoderes</h2>
      <p className="lead mt-2">
        Clique para ver um resumo técnico — tudo usando ícones do Freepik.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {automacaoData.map((poder, i) => {
          const expanded = open === poder.slug;
          return (
            <motion.article
              key={poder.slug}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`card p-4 cursor-pointer ${expanded ? "ring-2 ring-teal-400/60" : ""}`}
              onClick={() => setOpen(expanded ? null : poder.slug)}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={iconPath[poder.iconKey]}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-md"
                />
                <div className="font-semibold">{poder.titulo}</div>
              </div>
              <motion.p
                layout
                animate={{ height: "auto", opacity: expanded ? 1 : 0.75 }}
                className="mt-3 text-sm text-slate-300/90 leading-relaxed"
              >
                {poder.desc}
              </motion.p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
