require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://eqrmjsqm:BGMU9LjVs6HbyoMjFS86cEyHXSjbjQ0g@tai.db.elephantsql.com/eqrmjsqm`; //`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  //connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  connectionString: connectionString,
  //ssl: isProduction
});

module.exports = { pool };
