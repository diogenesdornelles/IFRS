CREATE SCHEMA IF NOT EXISTS escoladb;

USE escoladb;

CREATE TABLE IF NOT EXISTS cidades (
    idCidade INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    UF CHAR(2) NOT NULL,
    CONSTRAINT pk_cidades PRIMARY KEY (idCidade)
);



CREATE TABLE IF NOT EXISTS areas (
    idArea INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(250) NOT NULL,
    CONSTRAINT pk_areas PRIMARY KEY (idArea)
);

CREATE TABLE IF NOT EXISTS disciplinas (
    idDisciplina INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(250) NOT NULL,
    CONSTRAINT pk_disciplinas PRIMARY KEY (idDisciplina)
);



CREATE TABLE IF NOT EXISTS turmas (
    idTurma INT NOT NULL AUTO_INCREMENT,
    turma VARCHAR(20) NOT NULL,
    ano CHAR(4) NOT NULL,
    CONSTRAINT pk_turmas PRIMARY KEY (idTurma)
);



CREATE TABLE IF NOT EXISTS disciplinas_turmas (
    idTurma INT NOT NULL,
    idDisciplina INT NOT NULL,
    CONSTRAINT pk_disciplinas_turmas PRIMARY KEY (idTurma , idDisciplina),
    CONSTRAINT fk_turmas FOREIGN KEY (idTurma)
        REFERENCES turmas (idTurma),
    CONSTRAINT fk_disciplinas FOREIGN KEY (idDisciplina)
        REFERENCES disciplinas (idDisciplina)
);

CREATE TABLE IF NOT EXISTS alunos (
    Matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    CPF VARCHAR(15) NOT NULL,
    dataNasc DATE NOT NULL,
    Email VARCHAR(250) NOT NULL,
    Endereco VARCHAR(250) NOT NULL,
    Numero VARCHAR(20) NOT NULL,
    Complemento VARCHAR(50),
    Telefone VARCHAR(20) NOT NULL,
    idCidade INT NOT NULL,
    CONSTRAINT pk_alunos PRIMARY KEY (Matricula),
    CONSTRAINT fk_idCidade FOREIGN KEY (idCidade)
        REFERENCES cidades (idCidade),
    CONSTRAINT aluno_unica UNIQUE (CPF , Email)
);

CREATE TABLE IF NOT EXISTS alunos_turmas (
    idTurma INT NOT NULL,
    Matricula INT NOT NULL,
    CONSTRAINT pk_alunos_turmas PRIMARY KEY (idTurma , Matricula),
    CONSTRAINT fk_alunos_turmas FOREIGN KEY (idTurma)
        REFERENCES turmas (idTurma),
    CONSTRAINT fk_alunos FOREIGN KEY (Matricula)
        REFERENCES alunos (Matricula)
);



CREATE TABLE IF NOT EXISTS professores (
    SIAPE INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    CPF VARCHAR(15) NOT NULL,
    dataNasc DATE NOT NULL,
    Email VARCHAR(250) NOT NULL,
    Endereco VARCHAR(250) NOT NULL,
    Numero VARCHAR(20) NOT NULL,
    Complemento VARCHAR(50),
    Telefone VARCHAR(20) NOT NULL,
    idCidade INT NOT NULL,
    idArea INT NOT NULL,
    CONSTRAINT pk_professores PRIMARY KEY (SIAPE),
    CONSTRAINT fk_professores FOREIGN KEY (idCidade)
        REFERENCES cidades (idCidade),
    FOREIGN KEY (idArea)
        REFERENCES areas (idArea),
    CONSTRAINT professor_unica UNIQUE (CPF , Email)
);