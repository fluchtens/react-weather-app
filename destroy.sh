#!/bin/sh
docker stop weather-frontend
docker stop weather-backend
docker stop weather-postgres

docker rm weather-frontend
docker rm weather-backend
docker rm weather-postgres

docker rmi weather-frontend
docker rmi weather-backend
# docker rmi postgres

docker volume rm $(docker volume ls -q)

docker network rm weather-app

rm -rf backend/prisma/migrations

docker system prune -a 2>/dev/null
