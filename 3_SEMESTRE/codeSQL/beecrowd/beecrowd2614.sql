SELECT customers.name, rentals.rentals_date
FROM customers
JOIN rentals
ON rentals.id_customers = customers.id AND rentals.rentals_date <= '2016-09-30' AND rentals.rentals_date >= '2016-09-01';