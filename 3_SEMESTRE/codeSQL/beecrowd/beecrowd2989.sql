WITH
  empregado_emp_venc AS (
    SELECT
      e.matr,
      e.lotacao_div,
      e.lotacao,
      d.cod_venc
    FROM
      empregado AS e
      LEFT JOIN emp_venc AS d ON e.matr = d.matr
  ),
  empregado_emp_venc_vencimento AS (
    SELECT
      e.matr,
      e.lotacao_div,
      e.lotacao,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) AS total_vencimento
    FROM
      empregado_emp_venc AS e
      LEFT JOIN vencimento AS d ON e.cod_venc = d.cod_venc
    GROUP BY
      e.matr,
      e.lotacao_div,
      e.lotacao
  ),
  empregado_emp_desc AS (
    SELECT
      e.matr,
      d.cod_desc,
      e.lotacao_div,
      e.lotacao
    FROM
      empregado AS e
      LEFT JOIN emp_desc AS d ON e.matr = d.matr
  ),
  empregado_emp_desc_desconto AS (
    SELECT
      e.matr,
      e.lotacao_div,
      e.lotacao,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_desconto
    FROM
      empregado_emp_desc AS e
      LEFT JOIN desconto AS d ON e.cod_desc = d.cod_desc
    GROUP BY
      e.matr,
      e.lotacao_div,
      e.lotacao
  ),
  empregado_salario AS (
    SELECT
      e.matr,
      e.lotacao_div,
      e.lotacao,
      ROUND(
        COALESCE((e.total_vencimento - d.total_desconto), 0),
        2
      ) AS salario
    FROM
      empregado_emp_venc_vencimento AS e
      JOIN empregado_emp_desc_desconto AS d ON e.matr = d.matr
  ),
  salario_divisao AS (
    SELECT
      e.lotacao_div,
      d.nome,
      e.lotacao,
      ROUND(AVG(COALESCE(e.salario, 0)), 2) AS media_salarial_div,
      MAX(e.salario) AS maior
    FROM
      empregado_salario AS e
      JOIN divisao AS d ON e.lotacao_div = d.cod_divisao
    GROUP BY
      e.lotacao_div,
      d.nome,
      e.lotacao
  )
SELECT
  d.nome AS departamento,
  e.nome AS divisao,
  e.media_salarial_div AS media,
  e.maior
FROM
  salario_divisao AS e
  JOIN departamento AS d ON e.lotacao = d.cod_dep
ORDER BY
  media DESC;