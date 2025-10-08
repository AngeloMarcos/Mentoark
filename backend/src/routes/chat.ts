import type { FastifyInstance } from "fastify";
import { z } from "zod";

// Variáveis de ambiente (com defaults seguros)
const MAINTENANCE = process.env.MAINTENANCE === "true";
const WHATSAPP_URL =
  process.env.WHATSAPP_URL ?? "https://wa.me/message/SFKOCU2RI45ZN1";
const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ?? ""; // pode ficar vazio enquanto estiver em manutenção
const N8N_TIMEOUT_MS = Number(process.env.N8N_TIMEOUT_MS ?? 6000);

// validação do body
const Req = z.object({
  userId: z.string().min(1),
  message: z.string().min(1),
  metadata: z.record(z.any()).optional(),
});

// helper: fetch com timeout
async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  ms: number
): Promise<Response> {
  const ac = new AbortController();
  const to = setTimeout(() => ac.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ac.signal });
  } finally {
    clearTimeout(to);
  }
}

export default async function chatRoutes(app: FastifyInstance) {
  app.post("/chat", async (req, reply) => {
    // valida body
    const p = Req.safeParse(req.body);
    if (!p.success) {
      return reply.status(400).send({ ok: false, error: p.error });
    }

    // 🔧 modo manutenção: SEMPRE responde com o link do WhatsApp
    if (MAINTENANCE || !N8N_WEBHOOK_URL) {
      const numberDisplay = "98092-5504";
      return reply.send({
        ok: true,
        reply:
          `Estamos concluindo os ajustes do chat por aqui.\n` +
          `Fale com nosso assistente agora pelo WhatsApp: ${WHATSAPP_URL}\n` +
          `Número: ${numberDisplay}`,
      });
    }

    // caso manutenção esteja off, tenta n8n
    try {
      const res = await fetchWithTimeout(
        N8N_WEBHOOK_URL,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(p.data),
        },
        N8N_TIMEOUT_MS
      );

      // aceita 2xx/3xx como ok, extrai json
      const json = await res.json().catch(() => ({} as any));

      // normaliza o campo de resposta vindo do n8n
      const replyText: string =
        (json.reply as string) ??
        (json.message as string) ??
        json?.ok === true
          ? "Ok"
          : "Ok";

      return reply.send({ ok: true, reply: replyText });
    } catch (err) {
      req.log.error({ err }, "n8n request failed");
      // fallback silencioso em caso de erro/timeout
      const numberDisplay = "98092-5504";
      return reply.send({
        ok: true,
        reply:
          `Estamos concluindo os ajustes do chat por aqui.\n` +
          `Fale com nosso assistente agora pelo WhatsApp: ${WHATSAPP_URL}\n` +
          `Número: ${numberDisplay}`,
      });
    }
  });
}
