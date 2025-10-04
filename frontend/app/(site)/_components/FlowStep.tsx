import Image from "next/image";
import { ReactNode } from "react";

type Props = { title: string; desc: string; icon?: string; fallback?: ReactNode };

export default function FlowStep({ title, desc, icon, fallback }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 h-14 w-14 md:h-16 md:w-16">
        {icon ? (
          <div className="relative h-full w-full">
            <Image src={icon} alt={title} fill className="object-contain" sizes="64px" />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/80">
            {fallback}
          </div>
        )}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}
