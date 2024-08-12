#!/bin/bash
docker rm -f nginx
docker rm -f mariadb
docker rm -f client
docker rm -f server
docker compose build
docker compose up -d