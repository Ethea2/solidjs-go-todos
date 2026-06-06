# ✅ solidjs-go-todo

> A todo app. But make it overengineered.

Why use a notes app when you can have a **SolidJS frontend**, a **Go backend**, a **PostgreSQL database**, **PGAdmin**, and **NGINX** all orchestrated by Docker Compose — just to track whether you've bought milk?

---

## 🧱 Stack

| Layer | Tech |
|---|---|
| Frontend | SolidJS + Vite + Bun |
| Backend | Go + Chi |
| Database | PostgreSQL 16 |
| DB Admin | PGAdmin |
| Proxy | NGINX |
| Dev Experience | Air (hot reload) + Vite HMR |
| Orchestration | Docker Compose |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/you/solidjs-go-todo.git
cd solidjs-go-todo
```

### 2. Set up environment variables

```bash
cp .env.example .env
# open .env and change the passwords (or don't, we're not your mom)
```

### 3. Start everything

```bash
docker compose up --build
```

That's it. Docker will pull images, install dependencies, and spin up all 5 services. Go touch grass while it builds the first time.

---

## 🌐 Services

| Service | URL |
|---|---|
| App | http://localhost |
| Backend API (direct) | http://localhost:8080 |
| Frontend (direct) | http://localhost:5173 |
| PGAdmin | http://localhost:5050 |
| PostgreSQL | localhost:5432 |

---

## 🗂 Project Structure

```
solidjs-go-todo/
├── frontend/          # SolidJS + Vite + Bun
├── backend/           # Go + Chi
│   ├── cmd/server/    # Entrypoint
│   ├── internal/
│   │   ├── config/    # Env var loading
│   │   ├── db/        # Postgres connection
│   │   ├── handler/   # HTTP handlers
│   │   ├── middleware/ # Custom middleware
│   │   ├── model/     # Structs
│   │   └── service/   # Business logic
│   └── migrations/    # SQL migrations
├── nginx/             # Reverse proxy config
├── docker-compose.yml
└── .env.example
```

---

## 🔥 Hot Reload

Both the frontend and backend support hot reload in development — no container restarts needed.

- **Frontend:** Vite HMR pushes changes to the browser instantly
- **Backend:** Air watches `.go` files and recompiles on save

Changes flow through NGINX transparently — just edit and save.

---

## 🛠 Useful Commands

```bash
# Start in development mode
docker compose up

# Rebuild after Dockerfile changes
docker compose up --build

# Run in background
docker compose up -d

# View logs for a specific service
docker compose logs -f backend

# Stop everything
docker compose down

# Stop and nuke volumes (fresh DB)
docker compose down -v
```

---

## 🐘 Database

PGAdmin is available at http://localhost:5050. Log in with the credentials from your `.env` file.

To connect to the database from PGAdmin, use these settings:

| Field | Value |
|---|---|
| Host | `postgres` |
| Port | `5432` |
| Username | your `POSTGRES_USER` |
| Password | your `POSTGRES_PASSWORD` |
| Database | your `POSTGRES_DB` |

---

## 📦 Production Build

The Dockerfiles are multi-stage. To build production images, update the `target` in `docker-compose.yml`:

```yaml
frontend:
  build:
    target: prod   # builds static files, served by nginx

backend:
  build:
    target: prod   # compiles a lean static binary
```

---

## 🤷 Why Though

Because a simple `localStorage` todo list didn't feel like enough of a weekend. 

---

## 📄 License

MIT. Do whatever you want with this. Add more todos. Ship it. Blame the Go compiler.
