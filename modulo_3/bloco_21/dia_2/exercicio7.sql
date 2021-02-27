SELECT department_name, location_id, street_address, city, state_province, country_name
FROM locations
NATURAL JOIN countries
NATURAL JOIN departments;