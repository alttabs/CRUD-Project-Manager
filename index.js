const express = require("express");

const server = express();

server.use(express.json());
let numberOfRequests = 0;

// Middleware: recebe id e verifica que existe
function checkProjectID(req, res, next) {
  const { index } = req.params;
  const project = projects.find(p => p.index == index);

  if (!project) {
    return res.status(400).json({ error: "Project does not exist" });
  }

  return next();
}
// Middleware global: log requisicoes
function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Requisicoes: ${numberOfRequests}. Requisicao: ${req.url}`);

  return next();
}
server.use(logRequests);

const projects = [
  {
    index: "1",
    title: "Bootcamp",
    tasks: ["Desafio Modulo 1", "Iniciar Modulo 2"]
  },
  {
    index: "0",
    title: "Faculdade",
    tasks: ["Estudar Formais"]
  }
];

// retorna projeto do server a partir de index
server.get("/projects/:index", checkProjectID, (req, res) => {
  const { index } = req.params;

  return res.json(projects[index]);
});

//retorna todos projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// cria usuario BODY da requisicao
server.post("/projects", (req, res) => {
  //o que sera requisitado no body
  const { id, title } = req.body;

  // infos dentro de project
  const project = {
    id,
    title,
    tasks: []
  };

  // envia nosso projeto com todas as infos dentro dele
  projects.push(project);
  return res.json(project);
});

server.put("/projects/:index", checkProjectID, (req, res) => {
  // envia index pela url
  const { index } = req.params;
  // recebe novo title pelo json
  const { title } = req.body;

  //procura o msm index
  const project = projects.find(p => p.index == index);

  //seta o novo index
  project.title = title;

  return res.json(project);
});

server.delete("/projects/:index", checkProjectID, (req, res) => {
  //recebe na url o index
  const { index } = req.params;
  //procura project
  const projectIndex = projects.findIndex(p => p.index == index);

  projects.splice(projectIndex, 1);

  return res.send();
});

//porta do server
server.listen(3000);
