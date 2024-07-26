SELECT 
    v.amount AS most_frequent_value
FROM
    (SELECT t.amount, COUNT(t.amount) AS frequencia 
     FROM value_table AS t 
     GROUP BY t.amount
    ) AS v
ORDER BY v.frequencia DESC
LIMIT 1;