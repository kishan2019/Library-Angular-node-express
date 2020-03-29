const Pool = require('pg').Pool
export const pool = new Pool({
  user: 'kishan',
  host: 'localhost',
  database: 'api',
  password: 'singh',
  port: 5432,
})