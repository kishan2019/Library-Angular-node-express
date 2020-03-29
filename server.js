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

const db = require('./backend/query');

app.post("/api/books", (req, res, next) => {
    const book = req.body;
    console.log(book);
    res.status(201).json({
        message: 'book added successfully'
    });

});

app.get("/api/books", db.getBooks);

const port = 3000;

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});