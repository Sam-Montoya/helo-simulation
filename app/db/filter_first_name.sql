SELECT * FROM users WHERE UPPER (first_name) LIKE '%' || $1 || '%' ;
SELECT * FROM users WHERE LOWER (first_name) LIKE '%' || $1 || '%';
SELECT * FROM users WHERE first_name LIKE '%' || $1 || '%';
