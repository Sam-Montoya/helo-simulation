UPDATE users SET friends = array_cat(friends, '{' $1 '}')
WHERE id = $2;