const Pool = require("pg").Pool;

//const databaseConfig = {connectionString: process.env.elephant_sql_url}; 
const databaseConfig = {connectionString: `postgres://eqrmjsqm:BGMU9LjVs6HbyoMjFS86cEyHXSjbjQ0g@tai.db.elephantsql.com/eqrmjsqm`}; 

//const pool = new Pool({host: "localhost",user: "postgres",password: "kthl8822",port: 5432,database: "jwtauth"});
const pool = new Pool(databaseConfig);

module.exports = pool;
