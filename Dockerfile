FROM node:12.16.2

WORKDIR /app

COPY . .

RUM npm install

CMD ["npm" , "start"]
