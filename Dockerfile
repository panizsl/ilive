# syntax=docker/dockerfile:1.7

############################
# Dependencies
############################
FROM node:23-slim AS deps
WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/ && \
    npm ci --legacy-peer-deps && \
    npm cache clean --force

############################
# Builder
############################
FROM node:23-slim AS builder
WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ && \
    rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry and build
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true

RUN npm run build && rm -rf .next/cache

############################
# Runner
############################
FROM node:23-alpine
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Install Nginx and create necessary directories
RUN apk add --no-cache nginx && \
    mkdir -p /run/nginx /var/lib/nginx/logs /var/lib/nginx/tmp/client_body && \
    chown -R nginx:nginx /var/lib/nginx /var/log/nginx /run/nginx

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy Nginx configs
COPY nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY nginx/config/custom.conf /etc/nginx/conf.d/custom.conf

# Copy Next.js build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Install su-exec for proper user switching
RUN apk add --no-cache su-exec

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
    CMD wget -q --spider http://localhost:3000 || exit 1

CMD ["sh", "-c", "nginx && su-exec nextjs node server.js"]
