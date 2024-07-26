SELECT customers.name
FROM customers
JOIN legal_person
ON legal_person.id_customers = customers.id;