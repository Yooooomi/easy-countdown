FROM node:13.12.0-alpine

WORKDIR /app

ARG ENVIRONMENT
ENV ENVIRONMENT ${ENVIRONMENT:-PRODUCTION}

RUN apk add bash
RUN npm install serve -g

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . ./

RUN ./scripts/build.sh

# start app
CMD ./variables.sh build && serve -s -l tcp://0.0.0.0:3000 build/
