import React, {useState} from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/button/CustomButton";

const AddBookForm = ({addBook}) => {
    const [book, setBook] = useState({name: "", author: "", date: ""})

    const createBook = (e) => {
        e.preventDefault()
        let newBook = {...book, id: Date.now()}
        addBook(newBook)
        setBook({name: "", author: "", date: ""})
    }
    return (
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
            <CustomButton onClick={createBook}>Add book</CustomButton>
        </form>
    );
};

export default AddBookForm;