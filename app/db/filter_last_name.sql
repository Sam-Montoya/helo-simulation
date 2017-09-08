SELECT * FROM users WHERE UPPER (last_name) LIKE '%' || $1 || '%' ;
SELECT * FROM users WHERE LOWER (last_name) LIKE '%' || $1 || '%'; 
SELECT * FROM users WHERE last_name LIKE '%' || $1 || '%'; 