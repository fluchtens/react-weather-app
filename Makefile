all: build

build: clean
	docker-compose up -d --build

up: down
	docker-compose up -d

down:
	docker-compose down

clean:
	docker-compose down --rmi all --volumes

.PHONY: all build up down clean
