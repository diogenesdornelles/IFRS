SELECT products.name, providers.name, categories.name
FROM products
JOIN providers
ON providers.id = products.id_providers AND providers.name = 'Sansul SA'
JOIN categories
ON categories.id = products.id_categories AND categories.name = 'Imported';