"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils"; // se não tiver, troque por className join simples

type AnimatedCardProps = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedCard({
  title,
  desc,
  icon,
  className,
  delay = 0,
}: AnimatedCardProps) {
  const reduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16, scale: 0.98 },
    show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay } },
  };
  
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-5",
        "shadow-[0_0_0_0_rgba(0,0,0,0.0)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)]",
        "backdrop-blur-md transition-all duration-300",
        className
      )}
    >
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      {/* Gradient light on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
           style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(120,119,198,.25), transparent 40%)"}} />
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </motion.article>
  );
}
