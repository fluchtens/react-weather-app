all: run

NAME = react-weather-app

build:
	docker build -t ${NAME} .

run:
	docker run -d -p 80:80 --name ${NAME} ${NAME}

clean:
	docker stop ${NAME} && docker rm ${NAME} && docker rmi ${NAME}

