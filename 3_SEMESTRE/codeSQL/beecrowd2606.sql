SELECT products.id, products.name 
FROM products
JOIN categories
ON categories.id = products.id_categories AND categories.name LIKE 'super%';