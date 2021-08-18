import * as React from 'react'
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Catalog} from "./catalog";
import {useEffect, useState} from "react";


export const App = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/books")
            .then(response => response.json())
            .then(setBooks)
    }, [])

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/catalog">
                <Catalog books={books}/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    </Router>

}