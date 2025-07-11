FROM node:20.10.0-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]

