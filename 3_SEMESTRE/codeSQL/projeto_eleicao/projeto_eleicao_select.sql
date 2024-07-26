-- * Mostrar o nome dos candidatos a prefeito, o partido e o número de votos de cada um;
SELECT Pr.nome as Candidato, Pa.nome as Partido, COUNT(V.id_candidato_prefeito) as Votos  
FROM voto_prefeito V
INNER JOIN candidato_prefeito as Pr
ON V.id_candidato_prefeito = Pr.id_candidato_prefeito
INNER JOIN Partido as Pa
ON Pr.id_partido = Pa.id_partido
GROUP BY Partido, Candidato
ORDER BY Votos DESC;

-- * Mostrar o nome dos candidatos a vereador, o partido e o número de votos de cada um;
SELECT Ver.nome as Candidato, Pa.nome as Partido, COUNT(V.id_candidato_vereador) as Votos  
FROM voto_vereador V
INNER JOIN candidato_vereador as Ver
ON V.id_candidato_vereador = Ver.id_candidato_vereador
INNER JOIN Partido as Pa
ON Ver.id_partido = Pa.id_partido
GROUP BY Partido, Candidato
ORDER BY Votos DESC;

-- * Mostrar o nome, data de nascimento, título de eleitor, RG e CPF de todos os eleitores que compareceram a votação e que tenham obrigatoriedade de votação (idade entre 18 e 65)
SELECT El.nome, El.data_nascimento, El.titulo_eleitor, El.rg, El.cpf
FROM Eleitor El
INNER JOIN Eleitor_Votante E_V
ON El.id_eleitor = E_V.id_eleitor
WHERE AGE(El.data_nascimento) BETWEEN interval '18 years 0 mons 0 days' AND interval '64 years 11 mons 29 days'
ORDER BY El.data_nascimento DESC;

-- * Mostrar o nome, data de nascimento, título de eleitor, RG e CPF de todos os eleitores que não compareceram a votação;
SELECT El.nome, El.data_nascimento, El.titulo_eleitor, El.rg, El.cpf
FROM Eleitor El
LEFT JOIN Eleitor_Votante E_V
ON El.id_eleitor = E_V.id_eleitor
WHERE E_V.id_eleitor IS NULL;




