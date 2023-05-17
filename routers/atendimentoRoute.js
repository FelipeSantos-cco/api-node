/* 
Essas duas linhas a baixo fazem a mesma coisa tá?
Lembra do index.js, então:
*/
//const Router = require('express').Router; 
const { Router } = require("express");

const router = Router();

//Metodos
// GET, POST, PUT, DELETE

// GET
// essa rota seria assim e no navegador: localhost:3000/atendimentos
// req = Requisição e res = Resposta
router.get("/atendimentos", (req, res) => {
    res.send(`Fazendo`);
});


// POST
// Esse metodo não dá para ser acessaddo pelo navegador
router.post("/atendimentos", (req, res) => {
    res.send(`Criando`);
});

// PUT
// Também é um metodo que não pode ser chamado pelo navegador
// Enviando o id como paremtro
router.put("/atendimentos/:id", (req, res) => {
    const { id } = req.params; //Extraindo o id da requisição
    res.send(`Atualizando ${id}`);
});

// DELETE
// Não dá pra chamar esse metodo pelo navegador
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Deletando ${id}`);
});

// Estamos exportando esses dados para o index.js que está aqui dentro do mesmo repositório
module.exports = router;