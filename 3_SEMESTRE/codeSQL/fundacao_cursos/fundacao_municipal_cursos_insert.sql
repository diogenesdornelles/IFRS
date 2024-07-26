INSERT INTO public.responsavel (id_responsavel, nome) VALUES 
(1, 'Charles Babbage'), 
(2, 'Kristen Nygaard'), 
(3, 'Howard Aiken'), 
(4, 'Joan Clarke'), 
(5, 'Katherine Johnson');

INSERT INTO public.aluno (id_aluno, nome, data_nascimento, id_responsavel) VALUES 
(10, 'Ada Lovelace', '2009-12-10', 1), 
(11, 'Ole-Johan Dahl', '2008-10-12', 2), 
(12, 'Grace Hopper', '2010-09-12', 3), 
(13, 'Alan Turing', '2009-06-23', 4), 
(14, 'Dorothy Vaughan', '2009-09-20', 5);

INSERT INTO public.contato (id_contato, contato) VALUES 
(1, '(99)99999-0101'), 
(2, 'charles@babbage.com'), 
(3, '(99)99999-0091'), 
(4, '(99)99999-0095'), 
(5, '(99)99999-0231'), 
(6, '(99)99999-0201');

INSERT INTO public.aluno_contato (id_aluno, id_contato) VALUES 
(10, 1), 
(10, 2), 
(12, 3), 
(12, 4), 
(13, 5), 
(14, 6);


INSERT INTO public.curso (id_curso, nome) VALUES 
(1, 'Violão Básico'), 
(2, 'Desenho'), 
(3, 'Balé'),
(4, 'Dança'),
(5, 'Costura');

INSERT INTO public.professor (id_professor, nome) VALUES 
(1, 'Dennis Ritchie'), 
(2, 'John Backus'), 
(3, 'Mary Keller'), 
(4, 'Hedy Lamarr'),
(5, 'Terence Tao');

INSERT INTO public.dia (id_dia, nome) VALUES 
(1, 'Segunda-feira'), 
(2, 'Terça-feira'), 
(3, 'Quarta-feira'), 
(4, 'Quinta-feira'), 
(5, 'Sexta-feira');

INSERT INTO public.horario (id_horario, inicio, termino, id_dia, id_professor, id_curso) VALUES 
(1, 9, 10, 2, 1, 1), -- Dennis - violao 9/10 terça
(2, 9, 10, 4, 1, 1), -- Dennis - violao 9/10 quinta
(3, 10, 11, 1, 2, 2), -- john - Desenho 10/11 segunda
(4, 10, 11, 3, 2, 2), -- john - Desenho 10/11 quarta
(5, 9, 10, 1, 3, 2),  -- mary - Desenho 9/10 segunda
(6, 9, 10, 3, 3, 2),  -- mary - Desenho 9/10 quarta
(7, 8, 10, 5, 4, 3);  -- hedy - bale 8/10 sexta

INSERT INTO public.horario_aluno (id_aluno, id_horario) VALUES 
(10, 1), -- Ada
(10, 2),
(10, 3), 
(10, 4),

(11, 5), -- Ole
(11, 6),

(12, 7), -- Grace

(13, 1), -- Alan
(13, 2),
(13, 5),
(13, 6),

(14, 7); -- Dorothy




