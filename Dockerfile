FROM node:12.16.2

WORKDIR /app

COPY . .


CMD ["npm" , "start"]
