const { pool } = require('./postgrespool');

const getBookById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM library WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

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

const addBook = (request, response) => {
  const { title, author } = request.body

  pool.query('INSERT INTO library (title, author, registered) VALUES ($1, $2, false)', [title, author], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Book added with ID: ${result.insertId}`)
  })
}

const updateBook = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, author } = request.body

  pool.query(
    'UPDATE library SET title = $1, author = $2 WHERE id = $3',
    [title, author, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Book modified with ID: ${id}`)
    }
  )
}

const deleteBook = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM library WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Book deleted with ID: ${id}`)
  })
}

module.exports = {
  getBookById,
  getBooks,
  addBook,
  updateBook,
  deleteBook
}