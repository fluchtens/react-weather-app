FROM node:lts

RUN apt-get update && \
	npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

EXPOSE 80

CMD ["pnpm", "run", "dev"]
