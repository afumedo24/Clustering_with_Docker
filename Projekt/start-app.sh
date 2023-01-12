#!/bin/bash

read -p "Enter mygit Username: " username
read -s -p "Enter mygit Password: " password

#mkdir home/node-app/mongo-data

docker login -p $password -u $username registry.mygit.th-deg.de

docker stack deploy --with-registry-auth -c docker-compose-swarm.yml myapp

