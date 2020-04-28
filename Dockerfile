FROM node:12.16.2

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","start"]
