const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "UPS_DataBase",
  user: "postgres",
  password: "001623"
})

module.exports = pool
