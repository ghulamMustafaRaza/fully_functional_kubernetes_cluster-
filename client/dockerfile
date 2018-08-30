FROM node:8-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . .
CMD npm start