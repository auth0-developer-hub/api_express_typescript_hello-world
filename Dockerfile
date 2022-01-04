FROM node:14.17.5

WORKDIR /home/app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .
EXPOSE 6060

USER node

CMD [ "npm", "start" ]
