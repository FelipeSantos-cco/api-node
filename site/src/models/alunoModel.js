const database = require("../database/config");

// Funções locais
function info(msg){
    console.log(`[Aluno -> Model] Executando no BD: ${msg}`);
}

// Funções para exportar
function listarAlunos(){
    var query = 'SELECT * FROM tbAluno;'
    info(query);

    return database.queryBD(query);
}

function buscarAlunoNome(nome){
    var query = `SELECT * FROM tbAluno WHERE nomeAluno LIKE '%${nome}%';`
    info(query);

    return database.queryBD(query);
}

function buscarAlunoRa(RA){
    var query = `SELECT * FROM tbAluno WHERE ra LIKE '%${RA}%';`
    info(query);

    return database.queryBD(query);
}

function buscaEmpresasAluno(RA){
    var query = `
        SELECT * FROM tbAluno AS a 
            INNER JOIN tbAlunoEmpresa AS ae ON ae.ra = a.ra
                WHERE ra = ${RA};`
    info(query);

    return database.queryBD(query);
}

module.exports = {
    listarAlunos,
    buscarAlunoNome,
    buscarAlunoRa,
    buscaEmpresasAluno
}