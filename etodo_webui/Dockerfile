FROM node:18-bullseye-slim

LABEL maintainer="Jai Jain <jainarayanjain2604@gmail.com>"

WORKDIR /etodo

COPY ./package*.json /etodo/

RUN npm ci --location=project
