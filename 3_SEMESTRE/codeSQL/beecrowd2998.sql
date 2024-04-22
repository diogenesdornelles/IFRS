CREATE DATABASE IF NOT EXISTS beecrowd2988;

USE beecrowd2988;

CREATE TABLE
  IF NOT EXISTS teams (
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    CONSTRAINT pk_teams PRIMARY KEY (id)
  );

CREATE TABLE
  IF NOT EXISTS matches (
    id INT AUTO_INCREMENT,
    team_1 INT,
    team_2 INT,
    team_1_goals INT,
    team_2_goals INT,
    CONSTRAINT pk_matches PRIMARY KEY (id),
    CONSTRAINT fk_matches_team_1 FOREIGN KEY (team_1) REFERENCES teams (id),
    CONSTRAINT fk_matches_team_2 FOREIGN KEY (team_2) REFERENCES teams (id)
  );

INSERT INTO
  teams (name)
VALUES
  ('CEARA'),
  ('FORTALEZA'),
  ('GUARANY DE SOBRAL'),
  ('FLORESTA');

INSERT INTO
  matches (team_1, team_2, team_1_goals, team_2_goals)
VALUES
  (4, 1, 0, 4),
  (3, 2, 0, 1),
  (1, 3, 3, 0),
  (3, 4, 0, 1),
  (1, 2, 0, 0),
  (2, 4, 2, 1);

-- team name, number matches, victories, defeats, draws, scores
-- order by score
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