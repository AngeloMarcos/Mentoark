"use client";
import Image from "next/image";

const logos = [
  { src: "/logos/n8n.svg", alt: "n8n" },
  { src: "/logos/supabase.svg", alt: "Supabase" },
  { src: "/logos/openai.svg", alt: "OpenAI" },
  { src: "/logos/redis.svg", alt: "Redis" },
  { src: "/logos/postgres.svg", alt: "Postgres" },
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      <ul className="flex animate-marquee items-center gap-10 pr-10">
        {[...logos, ...logos].map((l, i) => (
          <li key={i} className="shrink-0 opacity-80 hover:opacity-100 transition">
            <Image src={l.src} alt={l.alt} width={110} height={40} />
          </li>
        ))}
      </ul>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </div>
  );
}
