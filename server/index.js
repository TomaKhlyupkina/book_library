const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json())

let books = []

const addAllBooksToDb = () => {
    fs.writeFile("./database/books.json", JSON.stringify(books), err => {
        if (err) {
            console.error(err);
        }}
    )
}

const readBooksFromDB = () => {
    if (!fs.existsSync("./database/books.json")) {
        console.log("File doesn't exist")
        return
    }
    fs.readFile("./database/books.json", "utf-8", function (err, data) {
        if (err) {
            console.error(err);
            return
        }
        if (!data.length) {
            console.log("File is empty, data hasn't been read")
            return
        }
        books = JSON.parse(data)
    })
}

readBooksFromDB()

app.get("/book_list", (req, res) => {
    res.json(JSON.stringify(books));
});

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