"use client";
import { useRef } from "react";

type Props = { children: React.ReactNode; className?: string; maxTilt?: number };

export default function TiltCard({ children, className = "", maxTilt = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;   // 0..1
    const py = (e.clientY - r.top) / r.height;  // 0..1
    const rx = (py - 0.5) * (maxTilt * 2);
    const ry = (0.5 - px) * (maxTilt * 2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }
  function reset() {
    const el = ref.current!;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      onMouseEnter={reset}
    >
      {children}
    </div>
  );
}
