 SELECT 
    CASE WHEN (S.grade >= 7) THEN CONCAT('Approved: ', S.name)
    ELSE NULL
    END as name,
    S.grade
FROM students AS S
WHERE S.grade >= 7
ORDER BY S.grade DESC;