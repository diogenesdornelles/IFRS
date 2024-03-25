use escoladb;

SELECT idCidade, nome FROM cidades WHERE cidades.UF = 'RS';

SELECT nome, Email FROM alunos;

SELECT Matricula, nome, CPF, Email FROM alunos WHERE Matricula <= 10;

SELECT nome from professores WHERE MONTH(professores.dataNasc) = 10;

SELECT * from turmas WHERE turmas.Ano = 2022;

SELECT * from alunos WHERE DATEDIFF(NOW(), alunos.dataNasc) > 15 * 365;