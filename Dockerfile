# ---------- Build ----------
FROM node:20-bookworm-slim AS build
WORKDIR /app

# Для нативных зависимостей (sqlite3)
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
COPY local_modules ./local_modules
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# ---------- Runtime ----------
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
