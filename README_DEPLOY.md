# SiteTech — Deploy com Docker + Traefik (Next.js SSR)

## Pré-requisitos
- Docker e Docker Compose instalados
- Traefik rodando com entrypoints `web` (80) e `websecure` (443) e um `certresolver` chamado `letsencrypt`
- Rede Docker externa chamada `traefik` (`docker network create traefik` se não existir)
- DNS do domínio apontando para a VPS

## Passos
1. Clone o repositório na VPS:
   ```bash
   mkdir -p /opt/apps && cd /opt/apps
   git clone https://github.com/AngeloMarcos/SiteTech.git
   cd SiteTech
   ```

2. Adicione estes arquivos (se ainda não estiverem no repo) e crie o `.env`:
   ```bash
   cp .env.example .env
   # Edite o .env e ajuste DOMAIN=seu.dominio.tld
   ```

3. Suba o serviço:
   ```bash
   docker compose up -d --build
   docker compose logs -f
   ```

4. Atualizações futuras:
   ```bash
   git pull
   docker compose up -d --build
   ```

## Observações
- O `.env` **não** deve ir para o Git. Use o `.env.example` como referência.
- Se seu projeto usar variáveis sensíveis, injete via `.env` ou secrets do orquestrador/CI.
