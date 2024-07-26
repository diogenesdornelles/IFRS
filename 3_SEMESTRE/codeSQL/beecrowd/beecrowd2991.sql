WITH
  empregado_emp_venc AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
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
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_vencimento
    FROM
      empregado_emp_venc AS e
      LEFT JOIN vencimento AS d ON e.cod_venc = d.cod_venc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao
  ),
  empregado_emp_desc AS (
    SELECT
      e.nome,
      e.matr,
      d.cod_desc,
      e.lotacao
    FROM
      empregado AS e
      LEFT JOIN emp_desc AS d ON e.matr = d.matr
  ),
  empregado_emp_desc_desconto AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
      ROUND(SUM(COALESCE(d.valor, 0)), 2) as total_desconto
    FROM
      empregado_emp_desc AS e
      LEFT JOIN desconto AS d ON e.cod_desc = d.cod_desc
    GROUP BY
      e.nome,
      e.matr,
      e.lotacao
  ),
  empregado_salario AS (
    SELECT
      e.nome,
      e.matr,
      e.lotacao,
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
      e.lotacao,
      d.nome,
      ROUND(AVG(COALESCE(e.salario, 0)), 2) AS media_salarial_dep,
      MAX(e.salario) as maior_salario_dep,
      MIN(e.salario) as menor_salario_dep,
      SUM(
        CASE
          WHEN e.lotacao = d.cod_dep THEN 1
          ELSE 0
        END
      ) AS qtn_empregado
    FROM
      empregado_salario AS e
      JOIN departamento as d on e.lotacao = d.cod_dep
    GROUP BY
      e.lotacao,
      d.nome
  )
SELECT
  s.nome AS "Nome Departamento",
  CASE
    WHEN s.qtn_empregado = 0.00 THEN 0
    ELSE s.qtn_empregado
  END AS "Numero de Empregados",
  CASE
    WHEN s.media_salarial_dep = 0.00 THEN 0
    ELSE s.media_salarial_dep
  END AS "Media Salarial",
  CASE
    WHEN s.maior_salario_dep = 0.00 THEN 0
    ELSE s.maior_salario_dep
  END AS "Maior Salario",
  CASE
    WHEN s.menor_salario_dep = 0.00 THEN 0
    ELSE s.menor_salario_dep
  END AS "Menor Salario"
FROM
  salario_departamento AS s
ORDER BY
  "Media Salarial" DESC;