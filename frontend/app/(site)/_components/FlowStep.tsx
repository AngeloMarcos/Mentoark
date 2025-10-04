import Image from "next/image";

type Props = { title: string; desc: string; icon: string };

export default function FlowStep({ title, desc, icon }: Props) {
  const isSvg = icon.toLowerCase().endsWith(".svg");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center flex flex-col items-center">
      {/* Ícone grande */}
      {isSvg ? (
        <img
          src={icon}
          alt={title}
          width={96}      // ← 96px (aumente se quiser)
          height={96}
          className="mb-4 drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
        />
      ) : (
        <div className="relative mb-4 h-24 w-24">
          <Image
            src={icon}
            alt={title}
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
          />
        </div>
      )}

      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70 max-w-[30ch]">{desc}</p>
    </div>
  );
}
