var pg = require('pg');

var conString = "	postgres://jdkfzrdp:Rj2bM4jUptX89UEQEUiC0pyb6SMPZN6L@raja.db.elephantsql.com:5432/jdkfzrdp"
var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
});

module.exports = client;