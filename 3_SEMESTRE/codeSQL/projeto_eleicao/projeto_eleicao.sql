CREATE TABLE Eleitor (
    id_eleitor SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    titulo_eleitor VARCHAR(20) UNIQUE NOT NULL,
    rg CHAR(11) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL
);

CREATE TABLE Partido (
    id_partido SERIAL PRIMARY KEY,
    nome VARCHAR(55) UNIQUE NOT NULL,
    sigla VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE Candidato_Prefeito (
    id_candidato_prefeito SERIAL PRIMARY KEY,
    id_partido INTEGER NOT NULL,
    nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_partido) REFERENCES Partido(id_partido)
);

CREATE TABLE Candidato_Vereador (
    id_candidato_vereador SERIAL PRIMARY KEY,
    id_partido INTEGER NOT NULL,
    nome VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_partido) REFERENCES Partido(id_partido)
);

CREATE TABLE Voto_Prefeito (
    id_voto_prefeito SERIAL PRIMARY KEY,
    id_candidato_prefeito INTEGER NOT NULL,
    FOREIGN KEY (id_candidato_prefeito) REFERENCES Candidato_Prefeito(id_candidato_prefeito)
);

CREATE TABLE Voto_Vereador (
    id_voto_vereador SERIAL PRIMARY KEY,
    id_candidato_vereador INTEGER NOT NULL,
    FOREIGN KEY (id_candidato_vereador) REFERENCES Candidato_Vereador(id_candidato_vereador)
);

CREATE TABLE Eleitor_Votante (
    id_eleitor_votante SERIAL PRIMARY KEY,
    id_eleitor INTEGER NOT NULL,
    FOREIGN KEY (id_eleitor) REFERENCES Eleitor(id_eleitor)
);
