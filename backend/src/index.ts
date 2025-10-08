import fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import chatRoutes from "./routes/chat.js";
import "dotenv/config";

const app = fastify({ logger: true });



await app.register(cors, {
  origin: [
    "http://localhost:3000",
    /\.githubpreview\.dev$/,   // libera o preview público do Codespaces
  ],
});

await app.register(rateLimit, { max: 60, timeWindow: "1 minute" });

app.get("/health", async () => ({ ok: true }));

// monta em /api/chat
await app.register(async (r) => {
  await r.register(chatRoutes, { prefix: "/chat" });
}, { prefix: "/api" });

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

app.listen({ port, host }).then(() => {
  console.log(`[api] up on :${port}`);
});
