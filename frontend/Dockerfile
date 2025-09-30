# syntax=docker/dockerfile:1

### 1) Instala deps (aproveita cache)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# se houver package-lock.json -> npm ci; senão -> npm install
RUN if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; else npm install --legacy-peer-deps; fi

### 2) Build do Next (standalone)
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# desativa telemetria (ignora erro se não existir)
RUN npx next telemetry disable || true
# build (se não existir script build, usa npx next build)
RUN if npm run | grep -q " build"; then npm run build; else npx next build; fi

### 3) Runner enxuto
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# copia artefatos do standalone
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
# server.js é gerado pelo build standalone do Next
CMD ["node", "server.js"]
