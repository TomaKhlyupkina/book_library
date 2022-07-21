import React, {useMemo, useState} from 'react';
import "../styles/App.css";
import BookList from "../components/bookList/BookList";
import AddBookForm from "../components/addBookForm/AddBookForm";
import CustomModal from "../components/UI/modal/CustomModal";
import CustomButton from "../components/UI/button/CustomButton";

function Books() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)

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
        setModal(false)
    }

    useMemo(() => {
        fetch("/book_list")
            .then((res) => res.json())
            .then((data) => { setData(JSON.parse(data)) })
    }, [])

    return (
        <div className={"books"}>
            <CustomButton onClick={() => setModal(true)}>
                Add book
            </CustomButton>
            <CustomModal
                visible={modal}
                setVisible={setModal}
            >
                <AddBookForm addBook={addBookToDB}/>
            </CustomModal>

            {(!data.length) &&
                <p style={{marginLeft: 10}}>Loading...</p>
            }
            <BookList books={data}/>
        </div>
    );
}

export default Books;