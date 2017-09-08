SELECT * FROM users WHERE UPPER (last_name) LIKE '%' || $1 || '%' ;
SELECT * FROM users WHERE LOWER (last_name) LIKE '%' || $1 || '%'; 
SELECT * FROM users WHERE last_name LIKE '%' || $1 || '%'; 



-- app.get('/api/friends', ( req, res, next ) => {
--     let { query } = req

--     req.app.get('db').filter_last_name( query.last_name ).then( filtered => res.status(200).send( filtered ) )
                     
-- })