SELECT
  p.year,
  s.name AS sender,
  r.name AS receiver
FROM
  packages AS p
  JOIN users AS s ON s.id = p.id_user_sender
  JOIN users AS r ON r.id = p.id_user_receiver
WHERE
  (
    p.color = 'blue'
    OR p.year = 2015
  )
  AND s.address != 'Taiwan'
  AND r.address != 'Taiwan'
ORDER BY
  p.year DESC;