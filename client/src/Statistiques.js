import React from "react";
import { NavLink } from "react-router-dom";
import './Statistiques.css';

import Header from "./Header";

function Statistiques() {
    return (
        <div className="App">
            <Header/>
        <header className="App-header">
            <p>Statistiques</p>
            <NavLink className="nav-link" to="/">Home</NavLink>
        </header>
        </div>
    );
}

export default Statistiques;