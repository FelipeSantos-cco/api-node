const mysql = require('mysql');

// Sua conexão com o banco de dados
const conexao = mysql.createConnection({
    host:'localhost', // O seu host 
    port: 3306, // A porta que o MySQL está usando. A 3306 é a padrão do mysql
    user: 'root', // Seu usuário
    password: 'passmysql', // Sua senha para este usuário
    database: 'bdAtendimento' // Nome do banco e dados que deseja usar
});

// Criando modulo para ser exportado lá para o index.js (o que está FORA da pasta de rotas) :)
module.exports = conexao;