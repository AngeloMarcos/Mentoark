// app/(site)/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import AtribuicaoFreepik from "./AtribuicaoFreepik";

export const metadata: Metadata = {
  title: "Mentoark — Automação inteligente",
  description:
    "Demonstração visual dos superpoderes do agente com assets Freepik.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur sticky top-0 z-40">
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
          <div className="mx-auto max-w-6xl px-4 py-6">
            <AtribuicaoFreepik />
          </div>
        </footer>
      </body>
    </html>
  );
}
