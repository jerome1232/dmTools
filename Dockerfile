FROM node:18-bullseye-slim AS builder
WORKDIR /app

# Install dependencies (use npm ci for reproducible installs)
COPY package.json package-lock.json ./
# Allow legacy peer deps to avoid build failures when lockfile/CI differs
RUN npm ci --legacy-peer-deps --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build -- --configuration production

FROM nginx:alpine AS runner
# Copy built app from builder stage
COPY --from=builder /app/dist/loot-gen /usr/share/nginx/html

EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]
