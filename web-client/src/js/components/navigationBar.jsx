import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <Link to={"/catalog"}>Catálogo</Link>
        <Link to={"/about"}>Quiénes Somos</Link>
    </nav>
)