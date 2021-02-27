-- 2.10 Select all the data of employees, including each employee's department's data.
-- 2.11 Select the name and last name of each employee, along with the name and budget of the employee's department.
-- 2.12 Select the name and last name of employees working for departments with a budget greater than $60,000.
-- 2.14 Select the names of departments with more than two employees.

SELECT e.*, d.name FROM Employees e
JOIN Departments d
ON e.department = d.code;

SELECT e.name, e.lastname, d.name, d.budget FROM Employees e
JOIN Departments d
ON e.department = d.code;

SELECT e.name, e.lastname, d.name, d.budget FROM Employees e
JOIN Departments d
ON e.department = d.code
WHERE d.budget > 60000;

SELECT Department, d.name, COUNT(*) Funcionarios FROM Employees
JOIN Departments d ON department = d.code
GROUP BY Department
HAVING(funcionarios > 2);