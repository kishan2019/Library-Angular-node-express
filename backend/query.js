const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kishan',
  host: 'localhost',
  database: 'api',
  password: 'singh',
  port: 5432,
})

const getBooks = (request, response) => {
  pool.query('SELECT * FROM library ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    const books = [...results.rows];
    response.status(200).json({
      message: 'books fetched successfully',
        books: books
    })
      
  })
}

module.exports = {
  getBooks
}