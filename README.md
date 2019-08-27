# Bootcamp-Desafio-01-NodeJS
Desafio do primeiro módulo do Bootcamp GoStack: NodeJS

## Preparando o ambiente

Primeira comando na pasta

    yarn init -y

Criara um arquivo package.json com as informacoes da aplicacao. Funcao: ficara as referencias para dependencias do projeto via yarn ou npm.

    yarn add express

instalara no diretorio o express: no arquivo package sera adiciona a dependencia do express contendo a informacao de versao do express.

## Iniciando a aplicacao com Express

Primeiramente é preciso importar o express por isso vou chama-lo dentro de uma variavel com o seu nome. Feito isso vou criar o servidor/aplicação chamando o express, assim ficará mais facil de manipular o server... o mesmo estará na porta 3000 

## Instalando nodemon

Antes de iniciar a desenvolver as rotas da aplicacao vou instalar o nodemon, que economizará o tempo de salvar → fechar server → inicia-lo novamente. 

    yarn add nodemon -D

Esse -D é para especificar que esta dependência apenas funcionará no ambiente de desenvolvimento da aplicação.

Para faze-lo rodar é preciso entrar na pasta **package.json** e adicionar a dependencia: 

    "scripts": {
        "dev": "nodemon index.js"
      }

Então rodar no terminal: 

    yarn dev

## Rotas

### Entendo o que são rotas

- Funcao **get()**: Aceita dois parametros primeiro a url e o segundo é a **callback** que será executada após, pelo metodo **req, res**
    - get /projects -  retornará todos projetos de nossa aplicação.
    - get/projects/:id - retornará projetos a partir de seu index
- Funcao post(): Adiciona um novo projeto
- Funcao put(): Atualiza informacoes do projeto
- Funcao del(): Delete projeto a partir do id
