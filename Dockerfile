FROM node:20-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

FROM base AS production
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATCH "/app/node_modules/sharp"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./ 

EXPOSE 3000
CMD ["node", "server.js"]
