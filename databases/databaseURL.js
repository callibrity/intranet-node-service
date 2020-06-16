var { Pool } = require("pg");

exports.pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});