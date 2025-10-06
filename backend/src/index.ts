import Fastify from "fastify";
import cors from "@fastify/cors";
import { healthRoutes } from "./routes/health.js";
import { chatRoutes } from "./routes/chat.js";

async function main() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });
  app.register(healthRoutes, { prefix: "/health" });
  app.register(chatRoutes, { prefix: "/chat" });

  const port = Number(process.env.PORT ?? 4000);
  try {
    await app.listen({ port, host: "0.0.0.0" });
    app.log.info(`API up on :${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
main();
