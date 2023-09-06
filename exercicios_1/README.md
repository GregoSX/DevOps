# Exercícios

## Instruções Exercício 1: Nível Básico

#### Objetivo: Este exercício destina-se a verificar a compreensão básica do Docker.

1. Crie um contêiner Docker a partir da imagem oficial do Ubuntu.
2. Dentro do contêiner, instale o aplicativo "curl" usando o gerenciador de pacotes
"apt".
3. Verifique se o "curl" está instalado corretamente dentro do contêiner e imprima a
versão do "curl" na saída padrão.

### Resposta

Execute a seguinte sequência de comandos no terminal:

1. `docker run -it ubuntu`

2. `apt update`

3. `apt install curl`

4. `curl -V `

---

## Instruções Exercício 2: Nível Intermediário

#### Objetivo: Este exercício testa a capacidade de criar e modificar contêineres Docker.

1. Crie um contêiner Docker a partir da imagem oficial do Node.js.
2. Copie um aplicativo Node.js de sua escolha para o contêiner.
3. Exponha uma porta no contêiner para acessar o aplicativo.
4. Crie uma imagem personalizada com o aplicativo Node.js e a configuração da
porta.
5. Inicie um contêiner a partir da imagem personalizada e verifique se o aplicativo está
acessível no navegador.


### Resposta

- Criar e configurar o arquivo Dockerfile.

- Executar os comandos abaixo

    1.  `docker build .`

    2.  `docker container run -d -p 8080:3000 (ID_Da_Imagem)`

Confira a execução do container:

- `docker ps`

Verifique a execução do servidor pelo navegador no link abaixo:

- [Link](http://localhost:8080/)

---

## Instruções Exercício 3: Nível Avançado

#### Objetivo: Este exercício requer conhecimento avançado de Docker Compose para gerenciar aplicativos multi-container.

1. Crie um arquivo Docker Compose para orquestrar três contêineres: um para um
banco de dados PostgreSQL, outro para um servidor de aplicativos Node.js e um
terceiro para um servidor web Nginx.
2. Configure as dependências corretamente de forma que o servidor Node.js só inicie
após o banco de dados PostgreSQL estar pronto.
3. Exponha as portas apropriadas para acessar o servidor Node.js e o servidor web
Nginx a partir da máquina host.
4. Crie uma rede Docker personalizada para os contêineres se comunicarem.
5. Inicialize a pilha de contêineres usando o Docker Compose e verifique se todos os
serviços estão funcionando corretamente.

### Resposta 

- Criar e configurar o arquivo docker-compose.yaml

- Executar os comandos abaixo:

