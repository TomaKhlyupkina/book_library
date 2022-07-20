import React, {useMemo, useState} from 'react';
import "../styles/App.css";
import BookList from "../components/bookList/BookList";
import AddBookForm from "../components/AddBookForm";

function Books() {
    const [data, setData] = useState([]);

    const addBookToDB = (newBook) => {
        setData([...data, newBook])
        let response = fetch("/add_book", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newBook)
        })
        response.then((res) => {
            if (!res.ok) {
                console.log("ERROR: " + res.statusText)
            }
        })
    }

    useMemo(() => {
        fetch("/book_list")
            .then((res) => res.json())
            .then((data) => { setData(JSON.parse(data)) })
    }, [])

    return (
        <div className={"books"}>
            <AddBookForm addBook={addBookToDB}/>
            {(!data.length) &&
                <p>Loading...</p>
            }
            <BookList books={data}/>
        </div>
    );
}

export default Books;