const mysql = require('mysql2');

var configConexao = {
    host: "localhost",
    database: "bdAPI_Node",
    user: "aluno",
    password: "sptech"
};

function queryBD(consulta) {
    return new Promise((resolve, reject) => {
        var conexao = mysql.createConnection(configConexao);
        conexao.connect();

        conexao.query(consulta, (erro, resultados) => {
            
            conexao.end();
            
            if (erro) {
                reject(erro);
            }

            resolve(resultados);
        });

        conexao.on('error', function (erro) {
            return (">>>>>>> Erro <<<<<<<<\n", erro.sqlMessage);
        });
    });
}

module.exports = {queryBD}