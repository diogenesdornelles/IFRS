WITH
  home_score AS (
    SELECT
      t.name,
      CASE
        WHEN m.team_1_goals = m.team_2_goals THEN 1
        WHEN m.team_1_goals < m.team_2_goals THEN 0
        ELSE 3
      END AS score,
      CASE
        WHEN m.team_1_goals > m.team_2_goals THEN 1
        ELSE 0
      END AS victories,
      CASE
        WHEN m.team_1_goals < m.team_2_goals THEN 1
        ELSE 0
      END AS defeats,
      CASE
        WHEN m.team_1_goals = m.team_2_goals THEN 1
        ELSE 0
      END AS draws,
      CASE
        WHEN m.team_1 = t.id THEN 1
      END AS _match
    FROM
      matches AS m
      JOIN teams AS t ON t.id = m.team_1
  ),
  visitors_score AS (
    SELECT
      t.name,
      CASE
        WHEN m.team_1_goals = m.team_2_goals THEN 1
        WHEN m.team_1_goals > m.team_2_goals THEN 0
        ELSE 3
      END AS score,
      CASE
        WHEN m.team_1_goals < m.team_2_goals THEN 1
        ELSE 0
      END AS victories,
      CASE
        WHEN m.team_1_goals > m.team_2_goals THEN 1
        ELSE 0
      END AS defeats,
      CASE
        WHEN m.team_1_goals = m.team_2_goals THEN 1
        ELSE 0
      END AS draws,
      CASE
        WHEN m.team_2 = t.id THEN 1
      END AS _match
    FROM
      matches AS m
      JOIN teams AS t ON t.id = m.team_2
  ),
  final_table AS (
    SELECT
      *
    FROM
      home_score AS h
    UNION ALL
    SELECT
      *
    FROM
      visitors_score AS v
  )
SELECT
  f.name,
  COUNT(f._match) AS matches,
  SUM(f.victories) AS victories,
  SUM(f.defeats) AS defeats,
  SUM(f.draws) AS draws,
  SUM(f.score) AS score
FROM
  final_table AS f
GROUP BY
  f.name
ORDER BY
  score DESC;