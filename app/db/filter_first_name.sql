<<<<<<< HEAD
SELECT * FROM users WHERE UPPER (first_name) LIKE '%' || $1 || '%' ;
SELECT * FROM users WHERE LOWER (first_name) LIKE '%' || $1 || '%';
SELECT * FROM users WHERE first_name LIKE '%' || $1 || '%';
=======
SELECT * FROM users WHERE UPPER (first_name) LIKE '%' || $1 || '%' WHERE....;
SELECT * FROM users WHERE LOWER (first_name) LIKE '%' || $1 || '%' WHERE....;
SELECT * FROM users WHERE first_name LIKE '%' || $1 || '%' WHERE....;









>>>>>>> 41c6c247df6decd4296c88a4ee98e32f6d035d69
