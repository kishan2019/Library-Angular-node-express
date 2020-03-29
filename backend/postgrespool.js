const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kishan',
  host: 'localhost',
  database: 'api',
  password: 'singh',
  port: 5432,
})

module.exports = {
  pool
}
