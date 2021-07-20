import * as React from "react";

export const BookCard = (props) =>
    <div className="book">
        <div>{ props.book.title }</div>
        <div>{ props.book.author }</div>
        <div>{ props.book.genre }</div>
    </div>