const mysql = require('mysql12');

// Sua conexão com o banco de dados
const conexao = mysql.createConnection({
    host: "localhost",
    database: "bdAtendimento",
    user: "root",
    password: "passmysql" 
});

// Criando modulo para ser exportado lá para o index.js (o que está FORA da pasta de rotas) :)
module.exports = conexao;