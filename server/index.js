const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

let books = []

const addAllBooksToDb = () => {
    fs.writeFile("./database/books.json", JSON.stringify(books), err => {
        if (err) {
            console.error(err);
        }}
    )
}

app.post("/add_book", (req, res) => {
    if (!req.body) {
        res.status(500).end();
        return
    }

    books.push(req.body)
    addAllBooksToDb()

    res.status(200).end()
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});