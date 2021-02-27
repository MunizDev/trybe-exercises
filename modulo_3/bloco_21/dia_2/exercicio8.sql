--6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
--6b. Use JOIN to display the total amount rung up(sum) by each staff member in August of 2005. Use tables staff and payment.

SELECT stf.first_name, stf.last_name, adr.address, adr.district, adr.postal_code, adr.city_id 
FROM staff stf
LEFT JOIN address adr
ON stf.address_id = adr.address_id;

SELECT stf.first_name, stf.last_name, sum(pay.amount)
FROM staff stf
LEFT JOIN payment pay
ON stf.staff_id = pay.staff_id
WHERE month(pay.payment_date) = 8
AND year(pay.payment_date)  = 2005
GROUP BY stf.first_name, stf.last_name;