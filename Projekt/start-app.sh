#!/bin/bash

read -p "Enter mygit Username: " username
read -s -p "Enter mygit Password: " password

docker login -p $password -u $username registry.mygit.th-deg.de

##docker network ls | grep thd-net >> /dev/null 2>&1

docker stack deploy --with-registry-auth -c docker-compose-swarm.yml myapp

