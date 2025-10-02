// app/layout.tsx
import "./globals.css"; // se tiver tailwind ou estilos globais
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentoark",
  description: "Automação com IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
