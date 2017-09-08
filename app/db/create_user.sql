INSERT INTO users
(picture, birth_date, hair_color, eye_color, hobby, gender, first_name, last_name, authid, friends)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;
