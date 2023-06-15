const express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();
const porta = 5000;

// ----------------------------------------

const indexRota = "A";
const alunoRota = require("./src/routes/aluno")

// ----------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Aqui configura o diretório para "pegar" as páginas html
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Rotas-----------------------------------
// app.use("/", indexRota);
app.use("/aluno", alunoRota);



app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`)
});