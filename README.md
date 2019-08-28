Desafio 01. Conceitos do NodeJS
Crie uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

Rotas
POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

Exemplo
Se eu chamar a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, meu array de projetos deve ficar assim:

[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
Middlewares
Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;

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
