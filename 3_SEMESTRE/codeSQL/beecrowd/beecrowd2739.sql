SELECT loan.name, CAST(EXTRACT(DAY FROM loan.payday) AS INTEGER) AS day
FROM loan;