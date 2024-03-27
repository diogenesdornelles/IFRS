use escoladb;

INSERT INTO cidades(nome, UF) VALUES('Porto Alegre', 'RS');
INSERT INTO cidades(nome, UF) VALUES('Bento Gonçalves', 'RS');
INSERT INTO cidades(nome, UF) VALUES('Palhoça', 'SC');
INSERT INTO cidades(nome, UF) VALUES('Londrina', 'PR');
INSERT INTO cidades(nome, UF) VALUES('Bauru', 'SP');

INSERT INTO areas(descricao) VALUES('Informática/Programação');
INSERT INTO areas(descricao) VALUES('Matematica');
INSERT INTO areas(descricao) VALUES('Fisica');

INSERT INTO disciplinas(descricao) VALUES('POO II');
INSERT INTO disciplinas(descricao) VALUES('Álgebra linear');
INSERT INTO disciplinas(descricao) VALUES('Hidrodinâmica');

INSERT INTO turmas(turma, ano) 
VALUES 
('1º ano Info', 2018),
('1º ano Info', 2019),
('2º ano Info', 2020),
('2º ano Info', 2019),
('2º ano Info', 2020),
('3º ano Info', 2019),
('3º ano Info', 2020),
('2º ano Info', 2020),
('1º ano Info', 2019),
('2º ano Info', 2020),
('3º ano Info', 2019),
('3º ano Info', 2020);

INSERT INTO disciplinas_turmas(idTurma, idDisciplina) 
VALUES 
(1, 1),
(2, 3);

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) VALUES ('Joao Silva', '234.562.876-67', '2000-01-07', 'joao.silva@gmail.com', 'Rua 20 de Setembro', '203', 'ap. 305', '54987461253', '1');

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) VALUES ('Mario Rodrigues', '679.643.772-21', '2001-07-07', 'mario.rodrigues@gmail.com', 'Rua Borges de medeiros', '345', 'ap. 201', '51976561253', '2');

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) 
VALUES ('Ana Oliveira', '123.456.789-10', '1999-05-15', 'ana.oliveira@gmail.com', 'Av. Brasil', '123', 'ap. 101', '51987654321', 3);

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) 
VALUES ('Carla Santos', '987.654.321-00', '2000-11-30', 'carla.santos@gmail.com', 'Rua das Flores', '456', 'ap. 501', '51988776655', 1);

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) 
VALUES ('Maria Oliveira', '876.543.210-98', '2002-03-25', 'maria.oliveira@gmail.com', 'Rua da Paz', '789', 'ap. 301', '51991234567', 2);

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) 
VALUES ('Pedro Almeida', '234.567.890-12', '1998-08-10', 'pedro.almeida@gmail.com', 'Rua dos Girassóis', '987', 'ap. 401', '51983332211', 3);

INSERT INTO alunos(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade) 
VALUES ('Juliana Souza', '345.678.901-23', '2003-11-18', 'juliana.souza@gmail.com', 'Av. Independência', '567', 'ap. 201', '51985557788', 1);

INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (1, 1);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (3, 2);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (4, 3);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (5, 4);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (2, 5);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (1, 6);


INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) VALUES ('Jaime Tadeu', '678.334.233-89', '1987-04-07', 'jaime.tadeu@gmail.com', 'Rua Margareth Lins', '21', 'ap. 404', '51945231323', '1');

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Ana Paula', '987.654.321-98', '1985-10-15', 'ana.paula@gmail.com', 'Av. Getúlio Vargas', '123', 'ap. 101', '51987654321', 2, 2);

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Carlos Eduardo', '345.678.901-12', '1978-06-25', 'carlos.edu@gmail.com', 'Rua das Acácias', '456', 'ap. 201', '51988776655', 3, 3);

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Fernanda Lima', '234.567.890-34', '1990-03-12', 'fernanda.lima@gmail.com', 'Rua dos Ipês', '789', 'ap. 301', '51991234567', 1, 1);

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Roberto Santos', '876.543.210-56', '1983-09-30', 'roberto.santos@gmail.com', 'Av. Brasil', '987', 'ap. 401', '51983332211', 2, 2);

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Juliana Oliveira', '567.890.123-78', '1975-05-18', 'juliana.oliveira@gmail.com', 'Rua da Paz', '567', 'ap. 501', '51985557788', 3, 3);

INSERT INTO professores(nome, CPF, dataNasc, Email, Endereco, Numero, Complemento, Telefone, idCidade, idArea) 
VALUES ('Ricardo Almeida', '678.901.234-90', '1988-11-18', 'ricardo.almeida@gmail.com', 'Av. Independência', '890', 'ap. 601', '51985557799', 1, 1);

INSERT INTO disciplinas(descricao) VALUES('Banco de dados');

INSERT INTO turmas(turma, ano) 
VALUES 
('1º ano Info', 2022);

INSERT INTO disciplinas_turmas(idTurma, idDisciplina) 
VALUES (13, 4);

INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 1);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 2);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 3);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 4);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 5);
INSERT INTO alunos_turmas(idTurma, Matricula) VALUES (13, 6);
