--
USE mysql
--
SELECT 1 AS PING
--
SELECT count(*) AS cnt FROM sakila.city
--
SELECT id FROM sakila.address
--
INSERT INTO sakila.actor VALUES (1, 2, 'Hello')
INSERT INTO sakila.actor VALUES (3, 4, 'QueryPie')
INSERT INTO sakila.actor VALUES (5, 6, 'DELIMITER')
--
TRUNCATE TABLE sakila.actor
--
SELECT * FROM sakila.actor
--
CREATE PROCEDURE insert_test()
BEGIN 
    DECLARE i INT; 
    SET i = 0; 
    WHILE i < 100000 DO 
        INSERT INTO account(createDatetime) VALUES(now()); 
    SET i = i + 1; 
    END WHILE; 
END
CREATE PROCEDURE dorepeat(p1 INT)
BEGIN
  SET @x = 0;
  REPEAT SET @x = @x + 1; UNTIL @x > p1 END REPEAT;
END
--
WITH RECURSIVE CTE AS(
    SELECT 1 AS N
    UNION ALL
    SELECT N + 1 FROM CTE WHERE N < 10
)
SELECT * FROM CTE