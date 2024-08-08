#!/bin/bash
docker kill webserver
docker rm webserver
docker rmi lennard/webserver02
docker build -t lennard/webserver02 .
docker run --name webserver --network testnetwork -p 80:8080 -d lennard/webserver02