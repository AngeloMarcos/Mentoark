// app/(site)/DiagramaFluxo.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Entrada", icon: "/freepik/icons/chat.png" },
  { label: "Processamento", icon: "/freepik/icons/split.png" },
  { label: "Conhecimento", icon: "/freepik/icons/db.png" },
  { label: "Saída + Memória", icon: "/freepik/icons/memory.png" },
];

export default function DiagramaFluxo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="fluxo" className="section">
      <h2 className="h2">Fluxo do agente</h2>
      <p className="lead mt-2">
        Versão simplificada, iluminando as etapas ao rolar.
      </p>

      <div ref={ref} className="mt-8 grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            style={{ boxShadow: glow.get() ? "0 0 0 0 rgba(0,0,0,0)" : undefined }}
            className="card p-5 text-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ delay: i * 0.05 }}
          >
            <Image src={s.icon} alt="" width={40} height={40} className="mx-auto" />
            <div className="mt-2 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
