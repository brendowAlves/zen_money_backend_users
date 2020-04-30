FROM node:12.16.2

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm" , "start"]
