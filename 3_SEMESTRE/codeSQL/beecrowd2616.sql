SELECT customers.id, customers.name
FROM customers
LEFT JOIN locations 
ON locations.id_customers = customers.id
WHERE locations.id_customers IS NULL;