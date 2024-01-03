const { Pool } = require("pg");
const { stack } = require("../routers");

// Replace the following with your PostgreSQL connection details
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dms",
  password: "posgre default",
  port: 5432,
});

pool.connect((err) => {
    if(err){
        console.error('connection error', err)
    }else{
        console.log('connected')
    }
})

module.exports = pool;
