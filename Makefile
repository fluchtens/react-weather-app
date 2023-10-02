all: run

build:
	docker build -t react-weather-app .

run: build
	docker run -p 80:80 react-weather-app

