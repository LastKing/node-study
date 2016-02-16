FROM node:4.2.2

MAINTAINER toonew

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/log

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app



EXPOSE 3001

CMD node /usr/src/app/bin/www
