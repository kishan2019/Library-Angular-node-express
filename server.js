const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/books", (req, res, next) => {
    const book = req.body;
    console.log(book);
    res.status(201).json({
        message: 'book added successfully'
    });

});

app.get("/api/books", (req, res, next) => {
    const books = [
        {
            id: "121",
            title: "first Title",
            author: "first author",
            reserved: true
        },
        {
            id: "122",
            title: "second Title",
            author: "second author",
            reserved: false
        },
        {
            id: "123",
            title: "third Title",
            author: "third author",
            reserved: true
        },
        {
            id: "124",
            title: "four Title",
            author: "four author",
            reserved: true
        },
        {
            id: "125",
            title: "five Title",
            author: "five author",
            reserved: true
        },
    ]

    res.json({
        message: 'books fetched successfully',
        books: books
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});