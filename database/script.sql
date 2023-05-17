CREATE DATABASE bdAtendimento;
USE bdAtendimento;

CREATE TABLE tbAtendimentos(
    idAtendimento INT PRIMARY KEY AUTO_INCREMENT
    , dataAtendimento DATE
    , tipoServico VARCHAR(120)
    , nomeCliente VARCHAR(120)
    , statusAtendimento ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
);

INSERT INTO tbAtendimentos (dataAtendimento, tipoServico, nomeCliente)
VALUES ('2023-05-17', 'Varrendo a casa', 'Felipe Santos');

SELECT * FROM tbatendimentos;

