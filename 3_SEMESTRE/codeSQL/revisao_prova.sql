-- Database: prova_sql

-- DROP DATABASE IF EXISTS prova_sql;

CREATE DATABASE prova_sql
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE IF NOT EXISTS departamento (
	id integer,
	nome varchar(50)
);


CREATE TABLE IF NOT EXISTS funcionario (
	id integer,
	nome varchar(50) not null,
	data_nascimento DATE
);

CREATE TABLE IF NOT EXISTS projeto (
	id integer,
	nome VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS funcionario_projeto (
	funcionario_id integer,
	projeto_id integer
);

-- 1. Adicionar uma Coluna
ALTER TABLE funcionario
ADD cargo varchar(40);

ALTER TABLE funcionario
ADD gluglu varchar(40);

ALTER TABLE funcionario_projeto
ADD COLUMN data_criacao DATE;

-- 2. Excluir uma Coluna
ALTER TABLE funcionario
DROP gluglu;

-- 3. Modificar um tipo de Coluna
ALTER TABLE funcionario
ALTER COLUMN cargo TYPE varchar(50);

ALTER TABLE funcionario
ADD sexo char(1);

-- 4. Alterar nome de coluna
ALTER TABLE funcionario
RENAME COLUMN sexo TO genero;



-- 5. Adicionar uma Restrição

ALTER TABLE funcionario
ADD CONSTRAINT pk_funcionario PRIMARY KEY (id);

ALTER TABLE departamento
ADD CONSTRAINT pk_departamento PRIMARY KEY (id);

ALTER TABLE projeto
ADD CONSTRAINT pk_projeto PRIMARY KEY (id);

ALTER TABLE funcionario_projeto
ADD CONSTRAINT pk_funcionario_id_projeto_id PRIMARY KEY (funcionario_id, projeto_id);

ALTER TABLE funcionario_projeto
ADD CONSTRAINT fk_funcionario_id FOREIGN KEY (funcionario_id) REFERENCES funcionario (id);

ALTER TABLE funcionario_projeto
ADD CONSTRAINT fk_projeto_id FOREIGN KEY (projeto_id) REFERENCES projeto (id);

ALTER TABLE funcionario
ADD departamento integer;

ALTER TABLE funcionario
RENAME COLUMN departamento TO departamento_id;

ALTER TABLE funcionario
ADD CONSTRAINT fk_departamento FOREIGN KEY (departamento_id) REFERENCES departamento (id); 

-- 6. Excluir uma Restrição
ALTER TABLE funcionario
DROP CONSTRAINT fk_deparamento;

-- 7. Renomear uma Tabela (Não altera as referencias)
ALTER TABLE funcionario
RENAME TO empregados;
ALTER TABLE departamento
RENAME TO departamentos;

-- 8. Adicionar uma restrição geral com SET

ALTER TABLE funcionario_projeto
ALTER COLUMN funcionario_id SET NOT NULL;

ALTER TABLE funcionario_projeto
ALTER COLUMN projeto_id SET NOT NULL;

ALTER TABLE funcionario
ALTER COLUMN genero SET DEFAULT 'M';


-- COMANDOS INSERT:
INSERT INTO departamento (id, nome) VALUES (1, 'RH'), (2, 'Financeiro'), (3, 'Compras'), (4, 'Direção');

INSERT INTO projeto (id, nome) VALUES (1, 'metropolis'), (2, 'gotham'), (3, 'Manhatam'), (4, 'Solace'), (5, 'mkultra');

INSERT INTO funcionario (id, nome, data_nascimento, cargo, genero, departamento_id) VALUES
(1, 'Ana', '1988-04-12', 'Analista', 'F', 1),
(2, 'Bruno', '1990-06-23', 'Desenvolvedor', 'M', 2),
(3, 'Carlos', '1985-02-15', 'Gerente', 'M', 3),
(4, 'Daniela', '1992-08-30', 'Designer', 'F', 4),
(5, 'Eduardo', '1987-11-11', 'Tester', 'M', 1),
(6, 'Fernanda', '1995-01-20', 'Suporte', 'F', 2),
(7, 'Gabriel', '1993-03-05', 'DevOps', 'M', 3),
(8, 'Helena', '1989-12-17', 'Analista de Dados', 'F', 4),
(9, 'Igor', '1991-07-14', 'Arquiteto de Software', 'M', 1),
(10, 'Julia', '1986-09-25', 'Gerente de Projeto', 'F', 2),
(11, 'Leonardo', '1990-02-14', 'Analista', 'M', 1),
(12, 'Mariana', '1988-05-16', 'Desenvolvedora', 'F', 2),
(13, 'Pedro', '1992-07-22', 'Gerente', 'M', 3),
(14, 'Carla', '1985-03-11', 'Designer', 'F', 4),
(15, 'Thiago', '1989-11-29', 'Tester', 'M', 1),
(16, 'Patricia', '1994-04-18', 'Suporte', 'F', 2),
(17, 'Rodrigo', '1991-06-25', 'DevOps', 'M', 3),
(18, 'Luciana', '1990-12-10', 'Analista de Dados', 'F', 4),
(19, 'Felipe', '1987-09-04', 'Arquiteto de Software', 'M', 1),
(20, 'Beatriz', '1986-08-21', 'Gerente de Projeto', 'F', 2),
(21, 'Ricardo', '1988-03-30', 'Analista', 'M', 1),
(22, 'Clara', '1990-05-19', 'Desenvolvedora', 'F', 2),
(23, 'Fernando', '1993-07-24', 'Gerente', 'M', 3),
(24, 'Isabela', '1986-02-28', 'Designer', 'F', 4),
(25, 'Rafael', '1991-11-30', 'Tester', 'M', 1),
(26, 'Aline', '1995-01-15', 'Suporte', 'F', 2),
(27, 'Gustavo', '1992-04-20', 'DevOps', 'M', 3),
(28, 'Juliana', '1989-12-05', 'Analista de Dados', 'F', 4),
(29, 'Marcelo', '1988-10-07', 'Arquiteto de Software', 'M', 1),
(30, 'Renata', '1987-07-11', 'Gerente de Projeto', 'F', 2),
(31, 'Vinicius', '1990-02-18', 'Analista', 'M', 1),
(32, 'Tatiana', '1989-06-20', 'Desenvolvedora', 'F', 2),
(33, 'Murilo', '1987-09-12', 'Gerente', 'M', 3),
(34, 'Larissa', '1991-11-14', 'Designer', 'F', 4),
(35, 'Fábio', '1993-10-15', 'Tester', 'M', 1),
(36, 'Simone', '1994-01-21', 'Suporte', 'F', 2),
(37, 'Vitor', '1992-03-25', 'DevOps', 'M', 3),
(38, 'Natália', '1990-12-12', 'Analista de Dados', 'F', 4),
(39, 'Bruna', '1988-04-04', 'Desenvolvedora', 'F', 2),
(40, 'Alexandre', '1985-06-09', 'Gerente de Projeto', 'M', 3);

INSERT INTO funcionario_projeto (funcionario_id, projeto_id, data_criacao) VALUES
(1, 1, '2005-03-15'),
(2, 2, '2006-04-20'),
(3, 3, '2007-05-25'),
(4, 4, '2008-06-30'),
(5, 5, '2009-07-05'),
(6, 1, '2010-08-10'),
(7, 2, '2011-09-15'),
(8, 3, '2012-10-20'),
(9, 4, '2013-11-25'),
(10, 5, '2014-12-30'),
(11, 1, '2015-01-05'),
(12, 2, '2016-02-10'),
(13, 3, '2017-03-15'),
(14, 4, '2018-04-20'),
(15, 5, '2019-05-25'),
(16, 1, '2020-06-30'),
(17, 2, '2021-07-05'),
(18, 3, '2022-08-10'),
(19, 4, '2023-09-15'),
(20, 5, '2005-10-20'),
(21, 1, '2006-11-25'),
(22, 2, '2007-12-30'),
(23, 3, '2008-01-05'),
(24, 4, '2009-02-10'),
(25, 5, '2010-03-15'),
(26, 1, '2011-04-20'),
(27, 2, '2012-05-25'),
(28, 3, '2013-06-30'),
(29, 4, '2014-07-05'),
(30, 5, '2015-08-10'),
(31, 1, '2016-09-15'),
(32, 2, '2017-10-20'),
(33, 3, '2018-11-25'),
(34, 4, '2019-12-30'),
(35, 5, '2020-01-05'),
(36, 1, '2021-02-10'),
(37, 2, '2022-03-15'),
(38, 3, '2023-04-20'),
(39, 4, '2005-05-25'),
(40, 5, '2006-06-30');


UPDATE funcionario F
SET nome = 'Helena da Silva'
WHERE F.id = 8;

UPDATE funcionario F
SET nome = 'Fernanda Moura', cargo='Servente'
WHERE F.id = 6;

DELETE FROM funcionario F WHERE F.id = 10;

ALTER TABLE funcionario
ADD salario DECIMAL(10,2);

UPDATE funcionario F
SET salario = 2500;

UPDATE funcionario
SET salario = CASE
    WHEN id = 1 THEN 2000
    WHEN id = 2 THEN 3500
    WHEN id = 3 THEN 4000
    WHEN id = 4 THEN 4500
    WHEN id = 5 THEN 5000
	WHEN id = 6 THEN 3000
    WHEN id = 7 THEN 3500
    WHEN id = 8 THEN 4000
    WHEN id = 9 THEN 4500
    WHEN id = 10 THEN 5000
	WHEN id = 11 THEN 3000
    WHEN id = 12 THEN 3500
    WHEN id = 13 THEN 4000
    WHEN id = 14 THEN 4500
    WHEN id = 15 THEN 5000
	WHEN id = 16 THEN 3000
    WHEN id = 17 THEN 3500
    WHEN id = 18 THEN 4000
    WHEN id = 19 THEN 4500
    WHEN id = 20 THEN 2000
	WHEN id = 21 THEN 3000
    WHEN id = 22 THEN 3500
    WHEN id = 23 THEN 4000
    WHEN id = 24 THEN 2500
    WHEN id = 25 THEN 5000
	WHEN id = 26 THEN 3000
    WHEN id = 27 THEN 3500
    WHEN id = 28 THEN 4000
    WHEN id = 29 THEN 4500
    WHEN id = 30 THEN 5000
	WHEN id = 31 THEN 3000
    WHEN id = 32 THEN 1500
    WHEN id = 33 THEN 4000
    WHEN id = 34 THEN 4500
    WHEN id = 35 THEN 5000
	WHEN id = 36 THEN 3000
    WHEN id = 37 THEN 7500
    WHEN id = 38 THEN 4000
    WHEN id = 39 THEN 3500
    WHEN id = 40 THEN 5000
    ELSE salario
END;

SELECT * FROM funcionario
ORDER BY id
;
