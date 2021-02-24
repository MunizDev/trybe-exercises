USE hr;
SELECT COUNT(DISTINCT job_id) FROM employees;
SELECT SUM(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees WHERE JOB_ID = 'IT_PROG';
SELECT AVG(salary), COUNT(*) FROM employees WHERE DEPARTMENT_ID = 90;
SELECT ROUND(MAX(salary),0), ROUND(MIN(salary),0), ROUND(SUM(salary),0), ROUND(AVG(salary),0) FROM employees;
SELECT JOB_ID, COUNT(*) FROM employees GROUP BY JOB_ID;
SELECT DEPARTMENT_ID, AVG(salary), COUNT(*) FROM employees GROUP BY DEPARTMENT_ID HAVING COUNT(*) > 10;