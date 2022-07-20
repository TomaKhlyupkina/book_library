import React from 'react';
import classes from "./BookItem.module.css"

const BookItem = ({book}) => {
    return (
        <div className={classes.book_item}>
            <div className={classes.book_name}>
                {book.name}
            </div>
            <div className={classes.book_author}>
                by {book.author}
            </div>
            <div className={classes.book_date}>
                published: {book.date}
            </div>
        </div>
    );
};

export default BookItem;