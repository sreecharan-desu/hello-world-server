FROM node:slim

WORKDIR /

COPY . .

RUN npm i -g ts-node typescript
RUN npm install

EXPOSE 3000


CMD [ "ts-node","index.ts" ]