# Exercícios

## Instruções Exercício 1: Nível Básico

1. Crie um contêiner Docker a partir da imagem oficial do Ubuntu.
2. Dentro do contêiner, instale o aplicativo "curl" usando o gerenciador de pacotes
"apt".
3. Verifique se o "curl" está instalado corretamente dentro do contêiner e imprima a
versão do "curl" na saída padrão.

### Resposta

Execute a seguinte sequência de comandos no terminal:

`docker run -it ubuntu`

`apt update`

` apt install curl`

`curl -V `

---

## Instruções Exercício 2: Nível Intermediário

1. Crie um contêiner Docker a partir da imagem oficial do Node.js.
2. Copie um aplicativo Node.js de sua escolha para o contêiner.
3. Exponha uma porta no contêiner para acessar o aplicativo.
4. Crie uma imagem personalizada com o aplicativo Node.js e a configuração da
porta.
5. Inicie um contêiner a partir da imagem personalizada e verifique se o aplicativo está
acessível no navegador.


### Resposta

1. Criar e configurar o arquivo Dockerfile.

2. Executar os comandos abaixo

`docker build .`

`docker container run -d -p 8080:3000 (ID_Da_Imagem)`

Confira a execução do container:

`docker ps`