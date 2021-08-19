import * as React from 'react'
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Catalog} from "./catalog";
import {useEffect, useState} from "react";
import {BookForm} from "./BookForm";
import {BookApi} from "../api/BookApi";


export const App = () => {

    const bookApi = new BookApi()

    const [books, setBooks] = useState([])

    const [needsUpdate, setNeedsUpdate] = useState(true)

    useEffect(() => {
        if (needsUpdate) {
            bookApi.getBooks()
                .then(setBooks)
                .then(_ => setNeedsUpdate(false))
        }
    }, [needsUpdate])

    const saveBook = book =>
        bookApi.saveBook(book)
            .then(_ => setNeedsUpdate(true))

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/" exact>
                <Catalog books={books}/>
            </Route>
            <Route path="/catalog">
                <Catalog books={books}/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/add-book">
                <BookForm onSubmit={saveBook}/>
            </Route>
        </Switch>
    </Router>

}