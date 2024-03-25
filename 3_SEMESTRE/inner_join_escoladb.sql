use escoladb;
-- 1 - Mostrar a matrícula e nome de todos os alunos que cursaram a disciplina de banco de dados em 2022
SELECT alunos.Matricula, alunos.Nome, turmas.Ano, disciplinas.descricao
FROM alunos 
INNER JOIN alunos_turmas ON alunos_turmas.Matricula = alunos.Matricula
INNER JOIN turmas ON turmas.idTurma = alunos_turmas.idTurma AND turmas.Ano = '2022'
INNER JOIN disciplinas_turmas ON disciplinas_turmas.idTurma = turmas.idTurma
INNER JOIN disciplinas ON disciplinas.idDisciplina = disciplinas_turmas.idDisciplina AND disciplinas.descricao LIKE 'Banco de dados';
-- 2 - Mostrar a matrícula e o nome de todos os alunos que cursaram o 3 ano info nos anos de 2021, 2020 e 2019.
SELECT alunos.Matricula, alunos.Nome, turmas.Ano, turmas.Turma
FROM alunos 
INNER JOIN alunos_turmas ON alunos.Matricula = alunos_turmas.Matricula
INNER JOIN turmas ON turmas.idTurma = alunos_turmas.idTurma AND turmas.Ano IN ('2019', '2020', '2021') AND turmas.Turma = '3º ano Info';
-- 3 - Mostrar todos os alunos que não estão matriculados em nenhuma turma.
SELECT alunos.Matricula, alunos.Nome
FROM alunos 
LEFT JOIN alunos_turmas ON alunos.Matricula = alunos_turmas.Matricula
WHERE alunos_turmas.Matricula IS NULL;
-- 4 - Mostrar todas as disciplinas não cursadas pelo aluno 'XXX'
SELECT alunos.Matricula, alunos.Nome, turmas.Ano, disciplinas.descricao
FROM alunos 
INNER JOIN alunos_turmas ON alunos_turmas.Matricula = alunos.Matricula AND alunos.Nome = 'Joao Silva'
INNER JOIN turmas ON turmas.idTurma = alunos_turmas.idTurma
INNER JOIN disciplinas_turmas ON disciplinas_turmas.idTurma = turmas.idTurma
INNER JOIN disciplinas ON disciplinas.idDisciplina = disciplinas_turmas.idDisciplina;

