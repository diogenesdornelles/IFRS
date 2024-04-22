SELECT categories.name, SUM(products.amount) as sum
from products
JOIN categories
ON products.id_categories = categories.id
GROUP BY categories.name;