// app/(site)/HeroSimulacao.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSimulacao() {
  const [run, setRun] = useState(false);

  return (
    <section className="section grid gap-10 md:grid-cols-2 items-center">
      <div>
        <span className="badge">Demonstração</span>
        <h1 className="h1 mt-3">Automação inteligente, visual e explicável</h1>
        <p className="lead mt-4">
          Mostre o fluxo com um mockup do Freepik e uma simulação rápida que
          “acende” as etapas do agente.
        </p>

        <button className="btn mt-6" onClick={() => setRun(true)}>
          Simular fluxo
        </button>

        {/* mini legenda */}
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

          {/* Luzes do fluxo */}
          {["/freepik/icons/voice.png", "/freepik/icons/chat.png", "/freepik/icons/vision.png"].map(
            (icon, i) => (
              <motion.div
                key={icon}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={run ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.4, duration: 0.4 }}
                className="absolute -left-10 top-8"
                style={{ top: 24 + i * 70 }}
              >
                <Image src={icon} alt="" width={36} height={36} />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
