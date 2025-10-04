// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Mentoark",
  description: "Automação inteligente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
     <body className="text-slate-100 antialiased">
  {children}
</body>
      </html>
  );
}
