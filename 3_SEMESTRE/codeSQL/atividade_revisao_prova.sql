-- Database: atividade_revisao

-- DROP DATABASE IF EXISTS atividade_revisao;

CREATE DATABASE atividade_revisao
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	

-- atividade de revisão

-- Criar as tabelas Disciplinas (slide 4) e MediasAlunos (slide 5) (Arquivo Slides Funções de Agregações (Atualizado))

CREATE TABLE IF NOT EXISTS Disciplinas (
	Id integer,
	Disciplina varchar(40),
	CONSTRAINT pk_Disciplinas PRIMARY KEY (Id)
);

CREATE TABLE IF NOT EXISTS Turmas (
	Id integer,
	Turma varchar(40),
	Ano char(4),
	CONSTRAINT pk_Turmas PRIMARY KEY (Id)
);

CREATE TABLE IF NOT EXISTS alunos (
	Matricula char(7),
	Nome varchar(50),
	DataNasc date,
	cpf char(14),
	Email varchar(70),
	CONSTRAINT pk_alunos PRIMARY KEY (Matricula)
);

CREATE TABLE IF NOT EXISTS MediasAlunos (
	Matricula char(7),
	IdTurma integer,
	IdDisciplina integer,
	CONSTRAINT pk_MediaAlunos PRIMARY KEY (Matricula, IdTurma, IdDisciplina),
	CONSTRAINT fk_Matricula FOREIGN KEY (Matricula) REFERENCES alunos (Matricula),
	CONSTRAINT fk_IdTurma FOREIGN KEY (IdTurma) REFERENCES Turmas (Id),
	CONSTRAINT fk_IdDisciplina FOREIGN KEY (IdDisciplina) REFERENCES Disciplinas (Id)
);

ALTER TABLE MediasAlunos
ADD COLUMN Nota decimal(10,2);

-- Inserir os respectivos registros conforme as tabelas dos slide 4 e 5

INSERT INTO alunos (Matricula, Nome, DataNasc, cpf, Email) VALUES
('1000001', 'Marcele da Silva', '1908-12-12', '000.000.000-11', 'marcele.silva@bento.ifrs.edu.br'),
('1000002', 'Matirde da Rocha', '2010-09-09', '000.009.239-99', 'martide.rocha@gmail.com'),
('1000003', 'João dos Santos', '2010-01-10', '999.999.000-77', 'joao.santos@gmail.com'),
('1000004', 'Maria Rita', '2001-05-04', '111.222.333-44', 'maria.rita@gmail.com'),
('1000005', 'Zézinho Oliveira', '1998-04-05', '555.666.777-88', 'zezinho.oliveira@gmail.com'),
('1000006', 'Carol da Rosa', '1984-12-12', '999.101.101-11', 'carol.rosa@mail.com'),
('1000007', 'Marina da Rosa', '1980-02-02', '121.121.121-13', 'marina.rosa@gmail.com');


INSERT INTO Disciplinas (Id, Disciplina) VALUES
(1, 'Matemática'),
(2, 'Português'),
(3, 'Banco de dados'),
(4, 'Inglês'),
(5, 'Programação Web'),
(6, 'Redes de Computadores'),
(7, 'Filosofia');


INSERT INTO Turmas (Id, Turma, Ano) VALUES
(1, '1º ano Info', '2018'),
(2, '1º ano Info', '2019'),
(3, '1º ano Info', '2020'),
(4, '2º ano Info', '2019'),
(5, '2º ano Info', '2020'),
(6, '3º ano Info', '2019'),
(7, '3º ano Info', '2020');


INSERT INTO MediasAlunos (Matricula, IdTurma, IdDisciplina, Nota) VALUES
('1000003', 1, 1, 8.5),
('1000003', 1, 2, 8.0),
('1000003', 2, 7, 9.0),
('1000002', 3, 1, 6.5),
('1000002', 3, 2, 7.2),
('1000002', 3, 6, 7.8),
('1000001', 7, 1, 9.5);

-- Criar um comando SQL que mostre a maior nota dos alunos na disciplina de Matemática;

-- com subselect
SELECT MAX(Nota)
FROM MediasAlunos M
WHERE (
	    SELECT Id 
	    FROM Disciplinas D
	    WHERE D.Disciplina = 'Matemática') = 1;


-- com join
SELECT Max(Nota) 
FROM MediasAlunos M
INNER JOIN Disciplinas D
ON M.IdDisciplina = D.Id
WHERE D.Disciplina = 'Matemática'
;


-- Criar um comando SQL que mostre a maior e a menor nota do aluno com matrícula 1000003;

SELECT MAX(Nota) maior_nota, MIN(Nota) menor_nota
FROM MediasAlunos M
INNER JOIN alunos A
ON M.Matricula = A.Matricula
WHERE A.Matricula = '1000003';

-- Criar um comando SQL que mostre a média dos alunos no ano de 2020;

SELECT AVG(COALESCE(Nota, 0)) media_nota
FROM MediasAlunos M
INNER JOIN Turmas T
ON M.IdTurma = T.Id
WHERE T.Ano = '2020' AND M.Nota IS NOT NULL;

-- Ciar um comando SQL que mostre o nome e a média de cada aluno

SELECT A.Matricula, A.Nome, AVG(COALESCE(M.Nota, 0)) media_nota
FROM MediasAlunos M
INNER JOIN alunos A
ON M.Matricula = A.Matricula
GROUP BY A.Nome, A.Matricula
ORDER BY media_nota desc
;

-- Criar um comando que mostre a média dos alunos na disciplina de Português no ano de 2020

WITH turmas_2020 AS 
(
    SELECT T.Id IdTurma, Ano FROM Turmas T
    WHERE T.Ano = '2020'
),
disciplinas_portugues AS
(
	SELECT D.Id IdPortugues FROM Disciplinas D
    WHERE D.Disciplina = 'Português'
)
SELECT AVG(Nota) FROM MediasAlunos M
INNER JOIN disciplinas_portugues D
ON D.IdPortugues = M.IdDisciplina
INNER JOIN turmas_2020 T
ON M.IdTurma = T.IdTurma;
 
-- Criar um comando que mostre a quantidade de alunos por disciplina
-- COUNT(M.Matricula) quantidade_alunos

SELECT M.IdDisciplina, COUNT(M.Matricula) quantidade_alunos 
FROM MediasAlunos M 
GROUP BY M.IdDisciplina
ORDER BY M.IdDisciplina;


SELECT M.IdDisciplina, COUNT(M.Matricula) quantidade_alunos 
FROM MediasAlunos M 
GROUP BY M.IdDisciplina
HAVING M.IdDisciplina > 2
ORDER BY M.IdDisciplina;

