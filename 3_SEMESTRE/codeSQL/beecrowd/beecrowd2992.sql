CREATE schema if not exists beecrowd2992;

use beecrowd2992;

create table
  if not exists departamento (
    cod_dep int not null,
    nome varchar(50),
    endereco varchar(50),
    constraint pk_departamento primary key (cod_dep)
  );

create table
  if not exists dependente (
    matr int not null,
    nome varchar(50),
    endereco varchar(50),
    constraint pk_dependente primary key (matr)
  );

create table
  if not exists vencimento (
    cod_venc int not null,
    nome varchar(50),
    tipo varchar(10),
    valor decimal(10, 2),
    constraint pk_vencimento primary key (cod_venc)
  );

CREATE TABLE
  IF NOT EXISTS desconto (
    cod_desc INT NOT NULL,
    nome VARCHAR(50),
    tipo VARCHAR(10),
    valor DECIMAL(10, 2),
    CONSTRAINT pk_deconto PRIMARY KEY (cod_desc)
  );

create table
  if not exists divisao (
    cod_divisao int not null,
    nome varchar(50),
    endereco varchar(50),
    cod_dep int,
    constraint pk_divisao primary key (cod_divisao),
    constraint fk_divisao_departamento foreign key (cod_dep) references departamento (cod_dep)
  );

create table
  if not exists empregado (
    matr int not null,
    nome varchar(50),
    endereco varchar(50),
    data_lotacao timestamp,
    lotacao int,
    gerencia_cod_dep int,
    lotacao_div int,
    gerencia_div int,
    constraint pk_empregado primary key (matr),
    constraint fk_empregado_departamento foreign key (lotacao) references departamento (cod_dep),
    constraint fk_empregado_divisao foreign key (lotacao_div) references divisao (cod_divisao)
  );

create table
  if not exists emp_desc (
    cod_desc int not null,
    matr int not null,
    constraint pk_cod_desc_emp_desc primary key (matr, cod_desc),
    constraint fk_cod_desc_emp_desc foreign key (cod_desc) references desconto (cod_desc),
    constraint fk_matr_emp_desc foreign key (matr) references empregado (matr)
  );

create table
  if not exists emp_venc (
    cod_venc int not null,
    matr int not null,
    constraint pk_cod_desc_emp_venc primary key (matr, cod_venc),
    constraint fk_cod_desc_emp_venc foreign key (cod_venc) references vencimento (cod_venc),
    constraint fk_matr_emp_venc foreign key (matr) references empregado (matr)
  );

INSERT INTO
  departamento (cod_dep, nome, endereco)
VALUES
  (1, 'Contabilidade', 'R. X'),
  (2, 'TI', 'R. Y'),
  (3, 'Engenharia', 'R. Y');

INSERT INTO
  dependente (matr, nome, endereco)
VALUES
  (9999, 'Francisco Jose', 'R. Z'),
  (88, 'Maria da Silva', 'R. T'),
  (55, 'Virgulino da Silva', 'R. 31');

INSERT INTO
  divisao (cod_divisao, nome, endereco, cod_dep)
VALUES
  (11, 'Ativo', 'R. X', 1),
  (12, 'Passivo', 'R. X', 1),
  (21, 'Desenvolvimento de Projetos', 'R. Y', 2),
  (22, 'Analise de Sistemas', 'R. Y', 2),
  (23, 'Programacao', 'R. W', 2),
  (31, 'Concreto', 'R. Y', 3),
  (32, 'Calculo Estrutural', 'R. Y', 3);

INSERT INTO
  desconto (cod_desc, nome, tipo, valor)
VALUES
  (91, 'IR', 'V', 400.00),
  (92, 'Plano de saúde', 'V', 300.00),
  (93, NULL, NULL, NULL);

INSERT INTO
  vencimento (cod_venc, nome, tipo, valor)
VALUES
  (
    1,
    'Salario base Analista de Sistemas',
    'V',
    5000.00
  ),
  (2, 'Salario base Contador', 'V', 3000.00),
  (3, 'Salario Base Engenheiro', 'V', 4500.00),
  (
    4,
    'Salario Base Projetista Software',
    'V',
    5000.00
  ),
  (
    5,
    'Salario Base Programador de Sistemas',
    'V',
    3000.00
  ),
  (
    6,
    'Gratificacao Chefia Departamento',
    'V',
    3750.00
  ),
  (7, 'Gratificacao Chefia Divisao', 'V', 2200.00),
  (
    8,
    'Salario Trabalhador Costrucao Civil',
    'V',
    800.00
  ),
  (9, 'Auxilio Salario Familia', 'V', 300.00),
  (10, 'Gratificacao Tempo de servico', 'V', 350.00),
  (11, 'Insalubridade', 'V', 800.00),
  (
    12,
    'Gratificacao por titulacao - Doutorado',
    'V',
    2000.00
  ),
  (
    13,
    'Gratificacao por Titularidade - Mestrado',
    'V',
    800.00
  );

INSERT INTO
  empregado (
    matr,
    nome,
    endereco,
    data_lotacao,
    lotacao,
    gerencia_cod_dep,
    lotacao_div,
    gerencia_div
  )
VALUES
  (
    9999,
    'Jose Sampaio',
    'R. Z',
    '2006-06-06',
    1,
    1,
    12,
    NULL
  ),
  (
    33,
    'Jose Maria',
    'R. 21',
    '2006-03-01',
    1,
    NULL,
    11,
    11
  ),
  (
    1,
    'Maria Jose',
    'R. 52',
    '2003-03-01',
    1,
    NULL,
    11,
    NULL
  ),
  (
    7,
    'Yasmim',
    'R. 13',
    '2010-07-02',
    1,
    NULL,
    11,
    NULL
  ),
  (
    5,
    'Rebeca',
    'R. 1',
    '2011-04-01',
    1,
    NULL,
    12,
    12
  ),
  (
    13,
    'Sofia',
    'R. 28',
    '2010-09-09',
    1,
    NULL,
    12,
    NULL
  ),
  (27, 'Andre', 'R. Z', '2005-05-01', 2, 2, 22, NULL),
  (88, 'Yami', 'R. T', '2014-02-01', 2, NULL, 21, 21),
  (
    431,
    'Joao da Silva',
    'R. Y',
    '2011-07-03',
    2,
    NULL,
    21,
    NULL
  ),
  (
    135,
    'Ricardo Reis',
    'R. 33',
    '2009-08-01',
    2,
    NULL,
    21,
    NULL
  ),
  (
    254,
    'Barbara',
    'R. Z',
    '2008-01-03',
    2,
    NULL,
    22,
    22
  ),
  (
    371,
    'Ines',
    'R. Y',
    '2005-01-01',
    2,
    NULL,
    22,
    NULL
  ),
  (
    476,
    'Flor',
    'R. Z',
    '2015-10-28',
    2,
    NULL,
    23,
    23
  ),
  (
    25,
    'Lina',
    'R. 67',
    '2014-09-01',
    2,
    NULL,
    23,
    NULL
  ),
  (
    3,
    'Jose da Silva',
    'R. 8',
    '2011-01-02',
    3,
    3,
    31,
    NULL
  ),
  (
    71,
    'Silverio dos Reis',
    'R. C',
    '2009-01-05',
    3,
    NULL,
    31,
    31
  ),
  (
    91,
    'Reis da Silva',
    'R. Z',
    '2011-11-05',
    3,
    NULL,
    31,
    NULL
  ),
  (
    55,
    'Lucas',
    'R. 31',
    '2013-07-01',
    3,
    NULL,
    32,
    32
  ),
  (
    222,
    'Marina',
    'R. 31',
    '2015-01-07',
    3,
    NULL,
    32,
    NULL
  ),
  (
    725,
    'Angelo',
    'R. X',
    '2001-03-01',
    2,
    NULL,
    21,
    NULL
  );

INSERT INTO
  emp_desc (cod_desc, matr)
VALUES
  (91, 3),
  (91, 27),
  (91, 9999),
  (92, 27),
  (92, 71),
  (92, 88),
  (92, 9999);

INSERT INTO
  emp_venc (cod_venc, matr)
VALUES
  (1, 27),
  (1, 88),
  (1, 135),
  (1, 254),
  (1, 431),
  (2, 1),
  (2, 5),
  (2, 7),
  (2, 13),
  (2, 33),
  (2, 9999),
  (3, 3),
  (3, 55),
  (3, 71),
  (3, 222),
  (4, 25),
  (4, 476),
  (5, 371),
  (6, 3),
  (6, 27),
  (6, 9999),
  (7, 5),
  (7, 33),
  (7, 55),
  (7, 71),
  (7, 88),
  (7, 254),
  (7, 476),
  (8, 25),
  (8, 91),
  (9, 1),
  (9, 27),
  (9, 91),
  (9, 135),
  (9, 371),
  (9, 9999),
  (10, 371),
  (10, 9999),
  (11, 91),
  (12, 3),
  (12, 27),
  (12, 254),
  (12, 9999),
  (13, 3),
  (13, 5),
  (13, 7),
  (13, 25),
  (13, 33),
  (13, 88),
  (13, 135);

WITH
  empregado_emp_venc AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao_div,
      d.cod_venc
    FROM
      empregado AS e
      JOIN emp_venc AS d ON e.matr = d.matr
  ),
  empregado_emp_venc_vencimento AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao_div,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_vencimento
    FROM
      empregado_emp_venc AS e
      JOIN vencimento AS d ON e.cod_venc = d.cod_venc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao_div
  ),
  empregado_emp_desc AS (
    SELECT
      e.nome,
      e.matr,
      d.cod_desc,
      e.lotacao_div
    FROM
      empregado AS e
      LEFT JOIN emp_desc AS d ON e.matr = d.matr
  ),
  empregado_emp_desc_desconto AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao_div,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_desconto
    FROM
      empregado_emp_desc AS e
      LEFT JOIN desconto AS d ON e.cod_desc = d.cod_desc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao_div
  ),
  empregado_salario AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao_div,
      ROUND(
        COALESCE((e.total_vencimento - d.total_desconto), 0),
        2
      ) AS salario
    FROM
      empregado_emp_venc_vencimento AS e
      JOIN empregado_emp_desc_desconto AS d ON e.matr = d.matr
  ),
  media_divisao AS (
    SELECT
      e.lotacao_div,
      d.nome,
      ROUND(AVG(COALESCE(e.salario, 0)), 2) AS media_salarial_div
    FROM
      empregado_salario AS e
      JOIN divisao as d on e.lotacao_div = d.cod_divisao
    GROUP BY
      e.lotacao_div,
      d.nome
  ),
  maior_media_departamento as (
    SELECT
      f.nome,
      max(e.media_salarial_div) as media
    FROM
      media_divisao AS e
      JOIN divisao AS d on e.lotacao_div = d.cod_divisao
      join departamento AS f on d.cod_dep = f.cod_dep
    group by
      f.nome
    order by
      media desc
  )
SELECT
  e.nome AS departamento,
  d.nome AS divisao,
  e.media
FROM
  maior_media_departamento AS e
  JOIN media_divisao as d on e.media = d.media_salarial_div;