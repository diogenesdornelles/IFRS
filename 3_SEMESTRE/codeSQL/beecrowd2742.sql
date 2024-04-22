SELECT L.name, ROUND(L.omega * 1.618, 3) AS "The N Factor"
FROM life_registry AS L
WHERE L.dimensions_id IN (
    SELECT D.id
    FROM dimensions AS D
    WHERE D.id = L.dimensions_id 
    AND D.name IN ('C875', 'C774') 
)
AND L.name LIKE 'Richard%'
ORDER BY L.omega;