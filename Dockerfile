FROM node:lts-alpine

RUN apk update && apk add nginx && npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

RUN pnpm run build

COPY nginx.conf /etc/nginx/http.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
