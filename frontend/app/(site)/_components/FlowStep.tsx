import Image from "next/image";

type Props = { title: string; desc: string; icon: string };

export default function FlowStep({ title, desc, icon }: Props) {
  const isSvg = icon.toLowerCase().endsWith(".svg");

  return (
    <div className="card-accent-orange rounded-2xl p-6 text-center flex flex-col items-center">
      <div className="relative mb-3">
        <span className="absolute inset-0 -z-10 mx-auto size-16 rounded-full bg-orange-500/10 blur-md" />
        {isSvg ? (
          <img src={icon} alt={title} width={96} height={96} className="drop-shadow-[0_6px_18px_rgba(0,0,0,.35)] mx-auto" />
        ) : (
          <div className="relative h-24 w-24 mx-auto">
            <Image src={icon} alt={title} fill sizes="96px" className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]" />
          </div>
        )}
      </div>

      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/90 leading-relaxed max-w-[32ch] mx-auto">{desc}</p>
    </div>
  );
}
