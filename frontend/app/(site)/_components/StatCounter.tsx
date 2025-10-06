"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  from?: number;
  to: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function StatCounter({ from = 0, to, duration = 1400, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const delta = to - from;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(from + delta * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    const r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [isInView, from, to, duration]);

  return <span ref={ref} className={className}>{prefix}{val.toLocaleString()}{suffix}</span>;
}
