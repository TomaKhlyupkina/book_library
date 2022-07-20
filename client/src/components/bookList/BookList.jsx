import React from 'react';
import BookItem from "../bookItem/BookItem";
import classes from "./BookList.module.css";

const BookList = ({books}) => {
    return (
        <div className={classes.book_list}>
            {books.map((book) =>
                <BookItem key={book.id}
                          book={book}
                />
            )}
        </div>
    );
};

export default BookList;