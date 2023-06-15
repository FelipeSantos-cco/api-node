const alunoModel = require('../models/alunoModel');

// Funções Locais
function info(msg) {
    console.log(`[Aluno -> Controller] Executando: ${msg}`);
}

// Funções para exportar
function listarAlunos(req, res) {
    info("Listar Alunos");

    alunoModel.listarAlunos().then( function (result) {

            if (result.length > 0) {
                res.status(200).json(result);
            }
            else {
                res.status(204).send("Nada foi encontrado!!!")
            }

        }).catch((erro) => {

            console.log("\t>>>>>>> Erro <<<<<<<\n", erro.sqlMessage);
            
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarAlunoNome(req, res) {
    var nome = req.body.nome_html;

    if (nome == undefined){
        res.status(400).send("A variavel nome está undefined!!!");
    }
    else{
        alunoModel.buscarAlunoNome(nome).then( (result)=>{
            if(result.length > 0){
                res.json(result);
            }
            else{
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }).catch((erro)=>{
            console.log("\n>>>>>>>>>Erro<<<<<<<\n", erro.sqlMessage);

            res.status(500).json(erro.sqlMessage);
        });
    }
}


module.exports ={
    listarAlunos,
    buscarAlunoNome
}

