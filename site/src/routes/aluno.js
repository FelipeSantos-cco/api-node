const express = require("express");
const rota  = express.Router();
const alunoController = require("../controllers/alunoController");

// Funções Locais
function info(msg){
    console.log(`\n[Aluno -> Rota] Executando: ${msg}`)
}

// Get ------
rota.get("/", (req, res) => {
    info("Listar Alunos");
    alunoController.listarAlunos(req, res)
});

// Post ---------
rota.post("/buscarNome", (req, res) =>{
    info("Buscar por nome de aluno");
    alunoController.buscarAlunoNome(req, res);
});

rota.post("/buscarRA", (req, res) => {
    info("Buscar por RA");
    alunoController.
})

// Export.....
module.exports = rota;