import type { FastifyInstance } from "fastify";
import { z } from "zod";

const Req = z.object({
  userId: z.string().min(1),
  message: z.string().min(1),
  metadata: z.record(z.any()).optional(),
});

export async function chatRoutes(app: FastifyInstance) {
  app.post("/", async (req, reply) => {
    // NADA de "await req.body" no Fastify v4
    const p = Req.safeParse(req.body);
    if (!p.success) {
      app.log.warn({ err: p.error.format() }, "invalid /chat payload");
      return reply.status(400).send({ ok: false, error: p.error });
    }

    const { userId, message } = p.data;
    app.log.info({ userId, message }, "chat received");

    // por enquanto: eco
    return reply.send({ ok: true, reply: `Recebi: ${message}`, traceId: req.id });
  });
}
