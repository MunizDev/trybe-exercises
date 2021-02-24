USE hr;
SELECT * FROM employees;
SELECT job_id, GROUP_CONCAT(employee_id, '') FROM employees GROUP BY job_id;
UPDATE employees
SET phone_number = REPLACE(phone_number, '124', '999')
WHERE phone_number LIKE '%124%';
SELECT job_id,  LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary' 
FROM jobs;
UPDATE employees SET email = CONCAT(email, '@example.com');
SELECT employee_id, first_name, MID(hire_date, 6, 2) as hire_month FROM employees;
e:

SELECT employee_id,first_name,last_name,hire_date 
FROM employees 
WHERE POSITION("07" IN DATE_FORMAT(hire_date, '%d %m %Y'))>0;
