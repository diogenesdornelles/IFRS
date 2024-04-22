WITH
  empregado_emp_venc AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div,
      d.cod_venc
    FROM
      empregado AS e
      LEFT JOIN emp_venc AS d ON e.matr = d.matr
  ),
  empregado_emp_venc_vencimento AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_vencimento
    FROM
      empregado_emp_venc AS e
      LEFT JOIN vencimento AS d ON e.cod_venc = d.cod_venc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div
  ),
  empregado_emp_desc AS (
    SELECT
      e.nome,
      e.matr,
      d.cod_desc,
      e.lotacao,
      e.lotacao_div
    FROM
      empregado AS e
      LEFT JOIN emp_desc AS d ON e.matr = d.matr
  ),
  empregado_emp_desc_desconto AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_desconto
    FROM
      empregado_emp_desc AS e
      LEFT JOIN desconto AS d ON e.cod_desc = d.cod_desc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div
  ),
  empregado_salario AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
      e.lotacao_div,
      ROUND(
        COALESCE((e.total_vencimento - d.total_desconto), 0),
        2
      ) AS salario
    FROM
      empregado_emp_venc_vencimento AS e
      JOIN empregado_emp_desc_desconto AS d ON e.matr = d.matr
  ),
  salario_departamento AS (
    SELECT
      d.nome AS "Departamento",
      e.nome AS "Empregado",
      CASE
        WHEN f.total_vencimento = 0.00 THEN 0
        ELSE f.total_vencimento
      END AS "Salario Bruto",
      CASE
        WHEN g.total_desconto = 0.00 THEN 0
        ELSE g.total_desconto
      END AS "Total Desconto",
      CASE
        WHEN e.salario = 0.00 THEN 0
        ELSE e.salario
      END AS "Salario Liquidoaws"
    FROM
      empregado_salario AS e
      JOIN departamento as d on e.lotacao = d.cod_dep
      JOIN divisao as h on e.lotacao_div = h.cod_divisao
      JOIN empregado_emp_venc_vencimento AS f ON e.matr = f.matr
      JOIN empregado_emp_desc_desconto AS g ON e.matr = g.matr
    ORDER BY
      e.salario DESC,
      e.nome DESC,
      e.lotacao_div,
      e.lotacao
  )
SELECT
  *
FROM
  salario_departamento;