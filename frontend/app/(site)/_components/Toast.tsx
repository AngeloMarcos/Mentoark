"use client";
import { useEffect, useState } from "react";

/**
 * Hook simples de toast:
 *  const { setToast, Toast } = useToast();
 *  setToast("Mensagem...");
 *  <Toast />
 */
export function useToast() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2200);
    return () => clearTimeout(t);
  }, [msg]);

  function Toast() {
    if (!msg) return null;
    return (
      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
        {msg}
      </div>
    );
  }

  return { setToast: setMsg, Toast };
}
