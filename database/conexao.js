const mysql = require('mysql2');

// Sua conexão com o banco de dados
const conexao = mysql.createConnection({
    host: "localhost",
    database: "bdAtendimento",
    user: "aluno",
    password: "sptech" 
});

// Criando modulo para ser exportado lá para o index.js (o que está FORA da pasta de rotas) :)
module.exports = conexao;