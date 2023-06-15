-- https://github.com/FelipeSantos-cco/api-node
CREATE DATABASE IF NOT EXISTS bdAPI_Node;
USE bdAPI_Node;

CREATE TABLE IF NOT EXISTS tbAluno (
    ra INT PRIMARY KEY AUTO_INCREMENT
    , nomeAluno VARCHAR(120) COMMENT 'Nome do Aluno'
    , idadeAluno INT COMMENT 'Idade do Aluno'
    , curso CHAR(3) CHECK(curso IN ('CCO', 'ADS', 'SIS')) COMMENT 'Curso que o aluno faz'
)COMMENT "Tabela Responsável por armazenar os dados dos Alunos";

CREATE TABLE IF NOT EXISTS tbEmpresa(
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT
    , nomeEmpresa VARCHAR(120) COMMENT "Nome da Empresa"
    , representante VARCHAR(120) COMMENT "Representante da Empresa"
)COMMENT "Tabela Responsável por armazenar os dados das Empresas";

CREATE TABLE IF NOT EXISTS tbAlunoEmpresa(
    ra INT
    , idEmpresa INT
    , FOREIGN KEY (ra) REFERENCES tbAluno(ra)
    , FOREIGN KEY (idEmpresa) REFERENCES tbEmpresa(idEmpresa)
    , PRIMARY KEY(ra, idEmpresa)
)COMMENT "Tabela Responsável por armazenar as Empresas favoritas de cada Aluno";

-- INSERTS
INSERT INTO tbAluno (nomeAluno, idadeAluno, curso)
VALUES ('Felipe Santos', 19, 'CCO')
    , ('Leando Coelho', 19, 'ADS')
    , ('Bruna Santana', 18, 'CCO');

SELECT * FROM tbAluno;