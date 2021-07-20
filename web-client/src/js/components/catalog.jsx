import * as React from "react";
import {BookCard} from "./bookCard";

export const Catalog = (props) => (
    <section className="catalogSection">
        {props.books.map(book =>
            <BookCard book={book}/>
        )}
    </section>
);