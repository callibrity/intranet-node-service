var { Pool, Client } = require('pg');
var app = require('./app');

var testString = 'postgres://jdkfzrdp:Rj2bM4jUptX89UEQEUiC0pyb6SMPZN6L@raja.db.elephantsql.com:5432/jdkfzrdp';
var devString = 'postgres://xsuzfsll:sSa6qY83tfbIeykZ4Np1mROIohahR9w0@salt.db.elephantsql.com:5432/xsuzfsll';
var prodString = 'postgres://jrzjwmlt:Y4Z6XpJfFVh4wqih79IW_CofZR1VzrbE@salt.db.elephantsql.com:5432/jrzjwmlt';
var env = process.env.NODE_ENV;

var conString = env === 'test' ? testString : env === 'production' ? prodString : devString;
var pool = new Pool({connectionString: conString});

module.exports = {
  query: (text, callback) => {
    const start = Date.now();
    return pool.query(text, (err, res) => {
      const duration = Date.now() - start;
      const rows = res ? res.rowCount : undefined;
      console.log('executed query', {text, duration, rows});
      callback(err, res)
    })
  }
};