FROM node:18-bullseye-slim AS builder
WORKDIR /app

# Install dependencies (use npm ci for reproducible installs)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build -- --configuration production

FROM nginx:alpine AS runner
# Copy built app from builder stage (Angular 18 outputs to dist/loot-gen/browser)
COPY --from=builder /app/dist/loot-gen/browser /usr/share/nginx/html

EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]
