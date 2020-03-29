const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    }));

const db = require('./backend/querys');

app.get("/api/books", db.getBooks);
app.post("/api/book", db.addBook);
app.put('/api/book/:id', db.updateBook);
app.delete('/api/book/:id', db.deleteBook);

const port = 3000;

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});