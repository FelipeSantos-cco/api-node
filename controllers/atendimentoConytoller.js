class atendimentoController{
    buscar(){
        return `Buscando atendimentos`;
    }
    
    criar() {
        return `Criado atendimento`;
    }

    atualizar(id) {
        return `Alterando o atendimento N°${id}`;
    }

    deletar(id) {
        return `Deletando o atendimento N°${id}`;
    }
}

module.exports = new AtendimentoController();