var { Pool } = require("pg");

exports.client = new Pool({
  connectionString: process.env.CONNECTION_STRING
});