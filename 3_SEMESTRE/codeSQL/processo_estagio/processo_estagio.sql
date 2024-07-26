-- Database: processo_estagio

-- DROP DATABASE IF EXISTS processo_estagio;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabelas sem chaves estrangeiras
CREATE TABLE Telefone_Estudante (
    id_telefone_estudante UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_estudante UUID NOT NULL,
    numero VARCHAR(20) NOT NULL
);

CREATE TABLE Telefone_Empresa (
    id_telefone_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_empresa UUID NOT NULL,
    numero VARCHAR(20) NOT NULL
);

CREATE TABLE Telefone_Supervisor_Empresa (
    id_telefone_supervisor_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_supervisor_empresa UUID NOT NULL,
    numero VARCHAR(20) NOT NULL
);

CREATE TABLE Convenio (
    id_convenio UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    numero VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Convenio_Empresa (
    id_convenio_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_empresa UUID NOT NULL,
    id_convenio UUID NOT NULL
);

CREATE TABLE Estudante (
    id_estudante UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_endereco UUID NOT NULL,
    nome VARCHAR(50) NOT NULL,
    matricula VARCHAR(50) UNIQUE NOT NULL,
    rg VARCHAR(10) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Area (
    id_area UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Periodo (
    id_periodo UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    inicio DATE NOT NULL,
    fim DATE NOT NULL
);

CREATE TABLE Processo_Estagio (
    id_processo_estagio UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_aluno UUID NOT NULL,
    id_professor_orientador UUID NOT NULL,
    id_area UUID NOT NULL,
    id_cidade UUID NOT NULL,
    id_empresa UUID NOT NULL,
    id_periodo UUID NOT NULL,
    id_supervisor_empresa UUID NOT NULL,
    carga_horaria INT NOT NULL,
    tipo_processo VARCHAR(20) DEFAULT 'fisico' CHECK (tipo_processo IN ('fisico', 'digital'))
);

CREATE TABLE Representante_Aluno (
    id_representante_aluno UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    rg CHAR(10) UNIQUE NOT NULL,
    funcao VARCHAR(50)
);

CREATE TABLE Representante_Empresa (
    id_representante_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    rg CHAR(10) UNIQUE NOT NULL,
    funcao VARCHAR(50) NOT NULL
);

CREATE TABLE Supervisor_Empresa (
    id_supervisor_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Empresa (
    id_empresa UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_representante_empresa UUID NOT NULL,
    id_endereco UUID NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cnpj CHAR(15) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Cidade (
    id_cidade UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Estado (
    id_estado UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    uf CHAR(2) UNIQUE NOT NULL
);

CREATE TABLE Endereco (
    id_endereco UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_cidade UUID NOT NULL,
    id_estado UUID NOT NULL,
    logradouro VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(50) NOT NULL,
    cep VARCHAR(8) NOT NULL
);

CREATE TABLE Professor_Orientador (
    id_professor_orientador UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE  NOT NULL
);

CREATE TABLE Professor_Coorientador (
    id_professor_coorientador UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Encaminhamento_Tipo (
    id_encaminhamento_tipo UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Encaminhamento_Processo_Estagio (
    id_encaminhamento_processo_estagio UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_processo_estagio UUID NOT NULL,
    id_encaminhamento_tipo UUID NOT NULL,
    data_encaminhamento DATE DEFAULT CURRENT_DATE
);

-- Adicionando chaves estrangeiras usando ALTER TABLE
ALTER TABLE Telefone_Estudante ADD CONSTRAINT fk_telefone_estudante_estudante FOREIGN KEY (id_estudante) REFERENCES Estudante(id_estudante);
ALTER TABLE Telefone_Empresa ADD CONSTRAINT fk_telefone_empresa_empresa FOREIGN KEY (id_empresa) REFERENCES Empresa(id_empresa);
ALTER TABLE Telefone_Supervisor_Empresa ADD CONSTRAINT fk_telefone_supervisor_empresa_supervisor FOREIGN KEY (id_supervisor_empresa) REFERENCES Supervisor_Empresa(id_supervisor_empresa);
ALTER TABLE Convenio_Empresa ADD CONSTRAINT fk_convenio_empresa_empresa FOREIGN KEY (id_empresa) REFERENCES Empresa(id_empresa);
ALTER TABLE Convenio_Empresa ADD CONSTRAINT fk_convenio_empresa_convenio FOREIGN KEY (id_convenio) REFERENCES Convenio(id_convenio);
ALTER TABLE Estudante ADD CONSTRAINT fk_estudante_endereco FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_aluno FOREIGN KEY (id_aluno) REFERENCES Estudante(id_estudante);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_professor_orientador FOREIGN KEY (id_professor_orientador) REFERENCES Professor_Orientador(id_professor_orientador);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_area FOREIGN KEY (id_area) REFERENCES Area(id_area);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_cidade FOREIGN KEY (id_cidade) REFERENCES Cidade(id_cidade);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_empresa FOREIGN KEY (id_empresa) REFERENCES Empresa(id_empresa);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_periodo FOREIGN KEY (id_periodo) REFERENCES Periodo(id_periodo);
ALTER TABLE Processo_Estagio ADD CONSTRAINT fk_processo_estagio_supervisor_empresa FOREIGN KEY (id_supervisor_empresa) REFERENCES Supervisor_Empresa(id_supervisor_empresa);
ALTER TABLE Empresa ADD CONSTRAINT fk_empresa_representante_empresa FOREIGN KEY (id_representante_empresa) REFERENCES Representante_Empresa(id_representante_empresa);
ALTER TABLE Empresa ADD CONSTRAINT fk_empresa_endereco FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco);
ALTER TABLE Endereco ADD CONSTRAINT fk_endereco_cidade FOREIGN KEY (id_cidade) REFERENCES Cidade(id_cidade);
ALTER TABLE Endereco ADD CONSTRAINT fk_endereco_estado FOREIGN KEY (id_estado) REFERENCES Estado(id_estado);
ALTER TABLE Encaminhamento_Processo_Estagio ADD CONSTRAINT fk_encaminhamento_processo_estagio_processo FOREIGN KEY (id_processo_estagio) REFERENCES Processo_Estagio(id_processo_estagio);
ALTER TABLE Encaminhamento_Processo_Estagio ADD CONSTRAINT fk_encaminhamento_processo_estagio_tipo FOREIGN KEY (id_encaminhamento_tipo) REFERENCES Encaminhamento_Tipo(id_encaminhamento_tipo);