// Cada arquivo de rota que vc criar entra aqui
const routerAtendimento = require("./atendimentoRoute");
module.exports = (app) => {
    app.use(routerAtendimento);
    // e depois entra aqui
    /*
    criei o arquivo clienteRoute.js
    então vc faz todas as rotas dele dentro dele e depois vem aqui
    na primeira linha vc criaria:
    const routerCliente = require("./clienteRoute");
    e depois aqui dentro criaria o 
    app.use(routerCliente);

    */
};