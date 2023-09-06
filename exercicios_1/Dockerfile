FROM node:alpine

COPY . /app

WORKDIR /app

RUN ["npm", "install", "-g", "npm@10.0.0"]

RUN ["npm", "i", "express", "--save"]

EXPOSE 3000

CMD ["node", "/app/app.js"]