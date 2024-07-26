-- a) Mostrar o nome do aluno e o dia do aniversário de todos os alunos que fazem aniversário no mês corrente;

SELECT A.NOME,
	A.DATA_NASCIMENTO
FROM ALUNO A
WHERE DATE_PART('month',

							NOW()) = DATE_PART('month',

																	A.DATA_NASCIMENTO);

-- b) Mostrar o nome do aluno, nome do responsável e telefone de todos os alunos que estão inscritos no curso de Violão Básico no horário das 9h-10h (ter-qui);
 WITH IDS_ALUNO_FILTRADOS AS
	(SELECT DISTINCT HORARIO_ALUNO.ID_ALUNO
		FROM HORARIO_ALUNO
		JOIN
			(SELECT HORARIO.ID_HORARIO,
					HORARIO.INICIO,
					HORARIO.TERMINO
				FROM HORARIO
				JOIN DIA ON DIA.NOME = 'Terça-feira'
				OR DIA.NOME = 'Quinta-feira'
				JOIN CURSO ON CURSO.ID_CURSO = HORARIO.ID_CURSO
				WHERE CURSO.NOME = 'Violão Básico' ) AS FH ON FH.ID_HORARIO = HORARIO_ALUNO.ID_HORARIO
		WHERE FH.INICIO = 9
			AND FH.TERMINO = 10),
	ALUNOS_FILTRADOS AS
	(SELECT IDS_ALUNO_FILTRADOS.ID_ALUNO,
			NOME,
			ID_RESPONSAVEL
		FROM ALUNO
		JOIN IDS_ALUNO_FILTRADOS ON IDS_ALUNO_FILTRADOS.ID_ALUNO = ALUNO.ID_ALUNO),
	ALUNOS_RESP AS
	(SELECT ALUNOS_FILTRADOS.*,
			R.NOME AS NOME_RESPONSAVEL
		FROM ALUNOS_FILTRADOS
		JOIN RESPONSAVEL R ON ALUNOS_FILTRADOS.ID_RESPONSAVEL = R.ID_RESPONSAVEL),
	ALUNOS_RESP_ID_CONTATO AS
	(SELECT ALUNOS_RESP.*,
			ALUNO_CONTATO.ID_CONTATO
		FROM ALUNOS_RESP
		JOIN ALUNO_CONTATO ON ALUNOS_RESP.ID_ALUNO = ALUNO_CONTATO.ID_ALUNO),
	ALUNOS_RESP_CONTATO AS
	(SELECT ALUNOS_RESP_ID_CONTATO.*,
			CONTATO.CONTATO AS TELEFONE
		FROM ALUNOS_RESP_ID_CONTATO
		JOIN CONTATO ON ALUNOS_RESP_ID_CONTATO.ID_CONTATO = CONTATO.ID_CONTATO
		WHERE CONTATO.CONTATO LIKE '(99)%')
SELECT NOME,
	NOME_RESPONSAVEL,
	TELEFONE
FROM ALUNOS_RESP_CONTATO;

-- c) Mostrar a turma (curso + horário) e a quantidade de alunos inscritos em cada turma;

SELECT DISTINCT FH.CURSO_NOME AS "Curso",
	FH.INICIO AS "Inicio(Horas)",
	FH.TERMINO AS "Término(Horas)",
	FH.DIA_NOME AS "Dia",
	COUNT(HORARIO_ALUNO.ID_ALUNO) AS "Quantidade de alunos"
FROM HORARIO_ALUNO
JOIN
	(SELECT HORARIO.ID_HORARIO,
			HORARIO.INICIO,
			HORARIO.TERMINO,
			DIA.NOME AS DIA_NOME,
			CURSO.NOME AS CURSO_NOME,
			DIA.ID_DIA
		FROM HORARIO
		JOIN CURSO ON CURSO.ID_CURSO = HORARIO.ID_CURSO
		JOIN DIA ON HORARIO.ID_DIA = DIA.ID_DIA) AS FH ON FH.ID_HORARIO = HORARIO_ALUNO.ID_HORARIO
GROUP BY FH.CURSO_NOME,
	FH.INICIO,
	FH.TERMINO,
	FH.DIA_NOME
ORDER BY "Curso",
	"Inicio(Horas)";

-- d) Mostrar o nome dos alunos que estão inscritos em mais de um curso;
 WITH CURSO_HORARIO AS
	(SELECT HORARIO.ID_HORARIO,
			CURSO.ID_CURSO,
			CURSO.NOME AS CURSO_NOME
		FROM HORARIO
		JOIN CURSO ON HORARIO.ID_CURSO = CURSO.ID_CURSO),
	HORARIO_ALUNO_CURSO AS
	(SELECT CURSO_HORARIO.CURSO_NOME,
			HORARIO_ALUNO.ID_ALUNO
		FROM CURSO_HORARIO
		JOIN HORARIO_ALUNO ON HORARIO_ALUNO.ID_HORARIO = CURSO_HORARIO.ID_HORARIO)
SELECT DISTINCT AL.NOME
FROM ALUNO AL
JOIN HORARIO_ALUNO_CURSO HAC ON AL.ID_ALUNO = HAC.ID_ALUNO
GROUP BY AL.NOME
HAVING COUNT(DISTINCT HAC.CURSO_NOME) > 1;

-- e) Mostrar o dia, horário e curso que a professora Mary Keller tem aula;
 WITH PROFESSOR_HORARIO AS
	(SELECT HORARIO.INICIO AS "Início(Hora)",
			HORARIO.TERMINO AS "Término(Hora)",
			HORARIO.ID_CURSO,
			HORARIO.ID_DIA
		FROM HORARIO
		JOIN PROFESSOR ON PROFESSOR.ID_PROFESSOR = HORARIO.ID_PROFESSOR
		WHERE PROFESSOR.NOME LIKE 'Mary Keller'),
	PROFESSOR_HORARIO_CURSO AS
	(SELECT CURSO.NOME AS "Nome do curso",
			CURSO.ID_CURSO
		FROM CURSO
		JOIN PROFESSOR_HORARIO ON PROFESSOR_HORARIO.ID_CURSO = CURSO.ID_CURSO),
	PROFESSOR_HORARIO_DIA AS
	(SELECT PROFESSOR_HORARIO_CURSO."Nome do curso",
			DIA.NOME AS "Dia da semana",
			PROFESSOR_HORARIO."Início(Hora)",
			PROFESSOR_HORARIO."Término(Hora)"
		FROM DIA
		JOIN PROFESSOR_HORARIO ON PROFESSOR_HORARIO.ID_DIA = DIA.ID_DIA
		JOIN PROFESSOR_HORARIO_CURSO ON PROFESSOR_HORARIO_CURSO.ID_CURSO = PROFESSOR_HORARIO.ID_CURSO)
SELECT DISTINCT *
FROM PROFESSOR_HORARIO_DIA;