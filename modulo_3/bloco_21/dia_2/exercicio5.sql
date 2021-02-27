--3.7 Select the code of each box, along with the name of the city the box is located in.
--3.8 Select the warehouse codes, along with the number of boxes in each warehouse. 
    -- Optionally, take into account that some warehouses are empty (i.e., the box count should show up as zero, instead of omitting the warehouse from the result).
--3.9 Select the codes of all warehouses that are saturated (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).
--3.10 Select the codes of all the boxes located in Chicago.

SELECT b.code, w.Location 
FROM Boxes b JOIN Warehouses w
on b.warehouse = w.code;

SELECT warehouse, count(*) 
FROM Boxes 
GROUP BY warehouse;

SELECT b.warehouse, count(*), w.capacity 
FROM Boxes b JOIN Warehouses w
ON w.code = b.Warehouse 
GROUP BY warehouse
HAVING(count(*) > w.capacity);

SELECT b.code
FROM Boxes b JOIN Warehouses w
ON b.warehouse = w.code
WHERE w.location = 'Chicago';