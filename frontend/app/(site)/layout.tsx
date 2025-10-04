// app/(site)/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "Mentoark — Automação inteligente",
  description:
    "Demonstração visual dos superpoderes do agente com assets Freepik.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55">

          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="text-lg font-semibold tracking-tight">
              Mentoark<span className="text-teal-400">.ai</span>
            </div>
            <nav className="text-sm text-slate-300">
              <a className="hover:text-white" href="#superpoderes">Superpoderes</a>
              <span className="mx-3 opacity-30">•</span>
              <a className="hover:text-white" href="#fluxo">Fluxo</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

            <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/60">
        <span>MentoArk © {new Date().getFullYear()}</span>
      </div>
    </footer>

      </body>
    </html>
  );
}
