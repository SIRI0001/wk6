# ---- builder ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Generate Prisma client only if schema exists
RUN [ -f prisma/schema.prisma ] && npx prisma generate || true
RUN npm run build

# ---- runner ----
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# optional prisma bits
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.* ./
EXPOSE 3000
CMD ["npm","start","--","-p","3000"]
