"use client";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import { Bolt, Brain, MessagesSquare, Database } from "lucide-react"; // se já usa lucide

const container = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function FeaturesGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <AnimatedCard
        title="Entrada clara"
        desc="Texto, áudio e imagem tratados sem fricção. Você pergunta do seu jeito."
        icon={<MessagesSquare className="h-5 w-5 text-white/70" />}
      />
      <AnimatedCard
        title="Processamento inteligente"
        desc="Roteamento por intenção e orquestração leve — nada de árvore de menus."
        icon={<Brain className="h-5 w-5 text-white/70" />}
        delay={0.05}
      />
      <AnimatedCard
        title="Conhecimento conectado"
        desc="Busca em bases internas (RAG), APIs e documentos para respostas confiáveis."
        icon={<Database className="h-5 w-5 text-white/70" />}
        delay={0.1}
      />
      <AnimatedCard
        title="Saída + memória"
        desc="Resposta formatada e histórico persistido para conversas realmente contínuas."
        icon={<Bolt className="h-5 w-5 text-white/70" />}
        delay={0.15}
      />
    </motion.div>
  );
}
