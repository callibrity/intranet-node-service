var pg = require('pg');
var app = require('./app');

var testString = 'postgres://jdkfzrdp:Rj2bM4jUptX89UEQEUiC0pyb6SMPZN6L@raja.db.elephantsql.com:5432/jdkfzrdp';
var devString = 'postgres://xsuzfsll:sSa6qY83tfbIeykZ4Np1mROIohahR9w0@salt.db.elephantsql.com:5432/xsuzfsll';
var prodString = 'postgres://jrzjwmlt:Y4Z6XpJfFVh4wqih79IW_CofZR1VzrbE@salt.db.elephantsql.com:5432/jrzjwmlt';
var env = process.env.NODE_ENV;

var conString = env === 'test' ? testString : env === 'production' ? prodString : devString;
var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
});

module.exports = client;