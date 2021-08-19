import * as React from "react";

export const BookCard = (props) =>
    <div className={props.book.isRead ? "book book--read" : "book"}>
        <div className="book__title">{ props.book.title }</div>
        <div className="book__author">{ props.book.author }</div>
    </div>