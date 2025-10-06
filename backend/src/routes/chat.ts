import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { request } from "undici";

const Body = z.object({
  userId: z.string().min(1),
  message: z.string().min(1),
  metadata: z.record(z.any()).optional(),
});

export default async function chatRoutes(app: FastifyInstance) {
  app.post("/", async (req, reply) => {
    const parsed = Body.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ ok: false, error: "invalid_body", details: parsed.error.issues });
    }

    const { userId, message, metadata } = parsed.data;

    const url = process.env.N8N_WEBHOOK_URL;
    if (!url) {
      return reply.status(500).send({ ok: false, error: "missing_n8n_url" });
    }

    const secret = process.env.N8N_WEBHOOK_SECRET || "";
    const timeout = Number(process.env.REQUEST_TIMEOUT_MS || 15000);

    try {
      const res = await request(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(secret ? { "x-mentoark-secret": secret } : {}),
        },
        body: JSON.stringify({ userId, message, metadata }),
        bodyTimeout: timeout,
        headersTimeout: timeout,
      });

      const { statusCode } = res;

      // tenta json, se falhar tenta texto (pra logar)
      let payload: any = null;
      let rawText = "";
      try {
        payload = await res.body.json();
      } catch {
        rawText = await res.body.text();
        app.log.warn({ rawText }, "n8n returned non-JSON body");
      }

      if (statusCode >= 200 && statusCode < 300) {
        const replyText =
          (payload && (payload.reply ?? payload.message)) ||
          (rawText ? String(rawText) : "Ok");
        return reply.send({ ok: true, reply: String(replyText) });
      }

      app.log.error({ statusCode, payload, rawText }, "n8n returned error");
      return reply.status(502).send({ ok: false, error: "bad_gateway", detail: payload ?? rawText ?? null });

    } catch (err: any) {
      app.log.error({ err }, "n8n request failed");
      return reply.status(504).send({ ok: false, error: "timeout_or_network" });
    }
  });
}
