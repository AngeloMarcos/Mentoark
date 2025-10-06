"use client";

const faqs = [
  {
    q: "Preciso saber programar para usar?",
    a: "Não. A implantação é guiada e nós conectamos seu conteúdo e sistemas. Você usa pela interface e acompanha resultados.",
  },
  {
    q: "Onde o agente busca as respostas?",
    a: "Nos seus documentos, bancos de dados e APIs (ex.: ERP/CRM). Assim, a informação é confiável e sempre atualizada.",
  },
  {
    q: "Funciona com WhatsApp?",
    a: "Sim. Integramos com provedores oficiais e o mesmo agente pode atender no site, WhatsApp e e-mail.",
  },
  {
    q: "Ele aprende com as conversas?",
    a: "Sim. O histórico vira contexto para próximas interações. É um aprendizado controlado, com regras e supervisão.",
  },
  {
    q: "Posso começar pequeno?",
    a: "Claro. Começamos por um caso simples (ex.: dúvidas frequentes) e vamos evoluindo com segurança.",
  },
];

export default function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 id="faq-title" className="h2 text-center mb-6">Perguntas frequentes</h2>
      <ul className="space-y-4">
        {faqs.map((item) => (
          <li key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold">{item.q}</div>
            <p className="mt-1 text-sm text-white/80">{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
