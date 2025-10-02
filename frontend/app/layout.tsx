// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Mentoark",
  description: "Automação inteligente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
