// É chamada a biblioteca Express dentro da constante
const express = require('express');
// app é o nosso servidor, ele recebe todas as dependencias da express
const app = express();
//Porta para o servidor ouvir
const porta = 3000
// Importando a rota criada na parte dois
const router = require("./routers/index")
// Parte 3: Banco de dados
const conexao = require("./database/conexao")

conexao.connect();// Banco de dados

router(app); // criada na parte dois sobre rotas

// A porta que o nosso servidor vai escutar. "Vamos lança-lo no ar!"
// E verificando se teve algum (erro)
app.listen(porta, (error) => { // (escutando a porta 3000, função para verificar se teve algum erro ()=> )

    // Se teve erro:
    if (error) {
        console.log('Deu erro em alguma coisa ai em');
        return;
    }

    console.log('O Servidor está on heheheee :)')
});