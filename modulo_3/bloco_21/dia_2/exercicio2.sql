SELECT DISTINCT building FROM employees;

SELECT * FROM buildings;

SELECT DISTINCT b.building_name, e.role
FROM buildings AS b
LEFT JOIN employees AS e
ON b.building_name = e.building;