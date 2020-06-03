var { Pool } = require('pg');

const testURL = 'postgres://jdkfzrdp:Rj2bM4jUptX89UEQEUiC0pyb6SMPZN6L@raja.db.elephantsql.com:5432/jdkfzrdp';

const devURL = 'postgres://xsuzfsll:sSa6qY83tfbIeykZ4Np1mROIohahR9w0@salt.db.elephantsql.com:5432/xsuzfsll';

const prodURL = 'postgres://jrzjwmlt:Y4Z6XpJfFVh4wqih79IW_CofZR1VzrbE@salt.db.elephantsql.com:5432/jrzjwmlt';

var env = process.env.NODE_ENV;

const connectionString = env === 'test' ? testURL : env === 'production' ? prodURL : devURL;

exports.pool = new Pool({connectionString});