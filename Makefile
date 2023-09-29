all: run

install:
	cd backend && pnpm install
	cd frontend && pnpm install

run:
	docker-compose up --build

clean:
	sh destroy.sh

.PHONY: all

.SILENT: