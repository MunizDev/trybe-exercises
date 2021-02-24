SELECT MAX(years_employed) as Max_years_employed
FROM employees;

SELECT Role, Years_employed, AVG(Years_employed)
FROM employees
GROUP BY Role;

SELECT *, SUM(Years_employed) 
FROM employees
GROUP BY Building;