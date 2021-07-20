import * as React from 'react'
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Catalog} from "./catalog";


export const App = () => {

    const bookList = [
        {
            title: "The lord of the Rings",
            author: "J.R.R Tolkien",
            genre: "Fantasy"
        },
        {
            title: "Harry Potter and the React Application",
            author: "J.K. Rowling",
            genre: "Fantasy"
        },
        {
            title: "Un mago de Terramar",
            author: "Ursula K. Le Guin",
            genre: "Fantasy"
        }
    ]



    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/catalog">
                <Catalog books={bookList} />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    </Router>

}