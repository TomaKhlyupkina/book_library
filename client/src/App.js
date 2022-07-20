import React, {useMemo} from "react";
import "./App.css";
import BookList from "./components/bookList/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
    const [data, setData] = React.useState([]);

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
        <div className={"App"}>
            <AddBookForm addBook={addBookToDB}/>
            {(!data.length) &&
                <p>Loading...</p>
            }
            <BookList books={data}/>
        </div>
    );
}

export default App;