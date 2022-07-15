import React, {useEffect} from "react";
import "./App.css";
import CustomInput from "./components/UI/input/CustomInput";
import CustomButton from "./components/UI/button/CustomButton";

function App() {
    const [data, setData] = React.useState(null);
    const [book, setBook] = React.useState({name: "", author: "", date: ""})

    const addBookToDB = (e) => {
        e.preventDefault()
        let response = fetch("/add_book", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        })
        response.then((res) => {
            if (!res.ok) {
                console.log("ERROR: " + res.statusText)
            }
        })
        setBook({name: "", author: "", date: ""})
    }

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message))
    }, [])

    return (
        <div>
            <header>
                <form>
                    <CustomInput
                        placeholder={"Book's name"}
                        value={book.name}
                        onChange={e => setBook({...book, name: e.target.value})}
                    />
                    <CustomInput
                        placeholder={"Author"}
                        value={book.author}
                        onChange={e => setBook({...book, author: e.target.value})}
                    />
                    <CustomInput
                        placeholder={"Publication date"}
                        value={book.date}
                        onChange={e => setBook({...book, date: e.target.value})}
                    />
                    <CustomButton onClick={addBookToDB}>Add book</CustomButton>
                </form>
                <p>{!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}

export default App;