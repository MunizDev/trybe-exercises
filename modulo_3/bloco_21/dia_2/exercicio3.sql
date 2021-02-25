-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.
-- 1.11 Select the product name, price, and manufacturer name of all the products.
-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.
-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.

SELECT p.*, m.name 
FROM Products AS p
INNER JOIN Manufacturers AS m
ON p.manufacturer = m.code;

SELECT p.name, p.price, m.name 
FROM Products AS p
INNER JOIN Manufacturers AS m
ON p.manufacturer = m.code;

SELECT AVG(price), Manufacturer
FROM Products
GROUP BY Manufacturer;

SELECT AVG(p.price), m.name
FROM Products AS p
JOIN Manufacturers AS m
WHERE p.manufacturer = m.code
GROUP BY manufacturer;

SELECT AVG(p.price) AS avarage, m.name
FROM Products AS p
JOIN Manufacturers AS m
WHERE p.manufacturer = m.code
AND p.price >= 150
GROUP BY manufacturer;

