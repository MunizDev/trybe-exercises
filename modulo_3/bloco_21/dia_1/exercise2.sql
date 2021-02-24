SELECT COUNT(*) as 'Atists Count'
FROM employees
WHERE Role = 'Artist';

SELECT *, COUNT(*) as 'Number of Employees'
FROM employees
GROUP BY Role;

SELECT SUM(Years_employed) as 'Total Years Employed'
FROM employees
WHERE Role = 'Engineer';