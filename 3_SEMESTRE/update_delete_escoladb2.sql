use escoladb2;

UPDATE alunos SET CPF='089.777.354-22' WHERE alunos.Matricula = '1000002';

UPDATE professores SET professores.Area='Informática Geral' WHERE professores.Area = 'Informática/Programação';

UPDATE professores SET professores.Area='Informática Geral' WHERE professores.Area = 'Informática/Redes';

UPDATE professores SET professores.Nome='Rogério da Nóbrega', professores.DataNasc='1987-04-22', professores.Area='Física', professores.Email='rogerio.nobrega@gmail.com' WHERE professores.Siape = ' 7700005';

DELETE FROM alunos WHERE alunos.Matricula >= 1000003 AND alunos.Matricula <= 1000005;

DELETE FROM professores WHERE professores.DataNasc < '2000-01-01';

DELETE FROM turmas WHERE turmas.Ano = '2020';