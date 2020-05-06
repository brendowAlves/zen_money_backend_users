FROM node:alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /app

COPY --from=build /app/build /app
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node" , "start"]
