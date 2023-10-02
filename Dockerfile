FROM node:lts-alpine

RUN apk update && apk add nginx && npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

RUN pnpm run build

COPY nginx.conf /etc/nginx/http.d/default.conf

EXPOSE 80

# Starts application
CMD ["nginx", "-g", "daemon off;"]