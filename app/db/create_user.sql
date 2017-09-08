INSERT INTO users
<<<<<<< HEAD
(picture, birth_date, hair_color, eye_color, hobby, gender, first_name, last_name, authid, friends)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;
=======
(picture, birth_date, hair_color, eye_color, hobby, gender, first_name, last_name, authid)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
>>>>>>> 41c6c247df6decd4296c88a4ee98e32f6d035d69
