INSERT INTO Eleitor (nome, data_nascimento, titulo_eleitor, rg, cpf)
VALUES ('Alice Silva', '1980-01-01', '1234567890', '11111111111', '11111111111'),
       ('Bob Souza', '1990-02-02', '1234567891', '22222222222', '22222222222'),
       ('Carlos Mendes', '1985-03-03', '1234567892', '33333333333', '33333333333'),
       ('Diana Ferreira', '1992-04-04', '1234567893', '44444444444', '44444444444'),
       ('Eduardo Lima', '1988-05-05', '1234567894', '55555555555', '55555555555'),
       ('Fátima Costa', '1975-06-06', '1234567895', '66666666666', '66666666666'),
       ('Gabriel Alves', '2000-07-07', '1234567896', '77777777777', '77777777777'),
       ('Helena Rocha', '1995-08-08', '1234567897', '88888888888', '88888888888'),
	   ('José Silva', '1991-08-09', '1234547897', '88887788888', '88888889999');


INSERT INTO Partido (nome, sigla)
VALUES ('Partido dos Trabalhadores', 'PT'),
       ('Partido Liberal', 'PL'),
       ('Partido Progressista', 'PP'),
       ('Partido Solidariedade', 'PSOL'),
       ('Partido Novo', 'Novo'),
       ('Movimento Democrático Brasileiro', 'MDB'),
       ('Democratas', 'DEM'),
       ('Partido da República', 'PR');

INSERT INTO Candidato_Prefeito (id_partido, nome) VALUES (1, 'Prefeito Zezinho'), (2, 'prefeita Mariazinha'), (3, 'Prefeito Pedrinho'), (4, 'Prefeito Joãozinho'), (5, 'Prefeito Leozinho'), (6, 'Prefeita Moniquinha'), (7, 'Prefeita Martinha'), (8, 'Prefeita Marianinha');
INSERT INTO Candidato_Vereador (id_partido, nome) VALUES (1, 'Vereador Zezinho'), (2, 'Vereadora Mariazinha'), (3, 'Vereador Pedrinho'), (4, 'Vereador Joãozinho'), (5, 'Vereador Leozinho'), (6, 'Vereadora Moniquinha'), (7, 'Vereadora Martinha'), (8, 'Vereadora Marianinha');
INSERT INTO Voto_Prefeito (id_candidato_prefeito) VALUES  (1), (2), (3), (4), (5), (6), (7), (8);
INSERT INTO Voto_Vereador (id_candidato_vereador) VALUES (1), (2), (3), (4), (5), (6), (7), (8);
INSERT INTO Eleitor_Votante (id_eleitor) VALUES (1), (2), (3), (4), (5), (6), (7), (8);

