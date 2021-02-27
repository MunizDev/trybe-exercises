USE BeeMovies;

DELIMITER $$

 CREATE TRIGGER insertReleaseYear
 BEFORE INSERT ON movies
 FOR EACH ROW
BEGIN
 SET NEW.release_year=YEAR(NOW());
END $$

 CREATE TRIGGER insertLog
 AFTER INSERT ON movies
 FOR EACH ROW
BEGIN
 INSERT INTO movies_logs(movie_id, action, log_date)
 VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;