# ── Development stage ──────────────────────────────────────────────────────────
FROM oven/bun:1 AS dev

WORKDIR /app

# Install dependencies first (layer cache)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--host", "0.0.0.0"]


# ── Build stage ─────────────────────────────────────────────────────────────────
FROM dev AS build

RUN bun run build


# ── Production stage (static files handed off to NGINX) ────────────────────────
FROM nginx:alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
