const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require('./backend/querys');

app.get("/api/books", db.getBooks);
app.get("/api/books/:id", db.getBookById);
app.post("/api/books", db.addBook);
app.put('/api/books/:id', db.updateBook);
app.delete('/api/books/:id', db.deleteBook);
app.get('/api/getUsers', db.getUsers);
app.post('/api/addReservedUser', db.addReservedUser);

const port = 3000;

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});