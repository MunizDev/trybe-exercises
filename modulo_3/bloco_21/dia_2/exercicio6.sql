-- 4.5 Select all data from all movie theaters 
    -- and, additionally, the data from the movie that is being shown in the theater (if one is being shown).
-- 4.6 Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.
-- 4.7 Show the titles of movies not currently being shown in any theaters.

SELECT * FROM MovieTheaters
LEFT JOIN Movies m
ON movie = m.code;

SELECT * FROM MovieTheaters
RIGHT JOIN Movies m
ON movie = m.code;

SELECT Title FROM Movies m
LEFT JOIN MovieTheaters
ON m.code = movie
WHERE movie is null;