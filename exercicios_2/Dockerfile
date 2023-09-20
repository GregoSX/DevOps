# A ideia é criar um backend local com nodejs de todolist e rodar no docker o banco de dados postgres
# Para isso, vamos criar um arquivo Dockerfile com o seguinte conteúdo:
FROM node:12.18.3-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
