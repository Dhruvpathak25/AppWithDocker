FROM node:16.13.2

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get -y update
RUN apt-get -y upgrade

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]