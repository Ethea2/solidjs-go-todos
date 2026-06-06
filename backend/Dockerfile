# ── Development stage (with Air hot-reload) ────────────────────────────────────
FROM golang:1.26-alpine AS dev

WORKDIR /app

# Install Air for hot-reload
RUN go install github.com/air-verse/air@latest

# Install dependencies first (layer cache)
COPY go.mod go.sum ./
RUN go mod download

COPY . .

EXPOSE 8080

CMD ["air", "-c", ".air.toml"]


# ── Build stage ─────────────────────────────────────────────────────────────────
FROM golang:1.26-alpine AS build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o server ./cmd/server


# ── Production stage ────────────────────────────────────────────────────────────
FROM alpine:3.20 AS prod

RUN apk add --no-cache ca-certificates tzdata

WORKDIR /app

COPY --from=build /app/server .

EXPOSE 8080

CMD ["./server"]
