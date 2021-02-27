SELECT f.title, s.Domestic_sales, s.International_sales 
FROM movies AS f
INNER JOIN boxoffice AS s
ON f.id = s.Movie_id
ORDER BY f.id;

SELECT f.title, s.Domestic_sales, s.International_sales 
FROM movies AS f
INNER JOIN boxoffice AS s
ON f.id = s.Movie_id
WHERE s.International_sales > s.Domestic_sales
ORDER BY f.id;

SELECT f.title, s.Domestic_sales, s.International_sales 
FROM movies AS f
INNER JOIN boxoffice AS s
ON f.id = s.Movie_id
ORDER BY s.rating DESC;