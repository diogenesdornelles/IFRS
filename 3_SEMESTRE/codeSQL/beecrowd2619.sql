SELECT products.name, providers.name, products.price
FROM products
JOIN providers
ON providers.id = products.id_providers AND products.price > 1000
JOIN categories
ON categories.id = products.id_categories AND categories.name = 'Super Luxury';