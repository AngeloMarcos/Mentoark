# ===== base =====
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# ===== deps =====
FROM base AS deps
# Se usar pnpm/yarn, ajuste aqui; vou com npm puro
COPY package*.json ./
RUN npm ci

# ===== build =====
FROM deps AS build
COPY . .
# Garanta que exista "build": "next build" no package.json
# Ex.:  "scripts": { "build": "next build", "start": "next start -p 3000" }
RUN npm run build
{
  "scripts": {
    "build": "next build",
    "start": "next start -p 3000"
  }
}

# ===== runner =====
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000

# Copia apenas o necessário para rodar
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./

EXPOSE 3000
CMD ["npm", "run", "start"]
