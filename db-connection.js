const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT
    });

module.exports=pool;


// Client is a single connection to a postgres database server while 
// a Pool can have multiple connections to a database server.
// When using Client, you have one connection that needs to shared in your code. 
// You can't fire of two query with Clients at the same time. When using Pool,
// you ask the pool to query the records you need. 
// The Pool decides which underlying connection/client to use. 
// It is also possible to support multiple concurrent queries with Pool. 
// You can also specify how long and how many connections a pool can have at any time.