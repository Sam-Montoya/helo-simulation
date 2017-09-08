UPDATE users SET friends = array_remove(friends, $1)
WHERE id = $2;