import React from "react";
import './Result.css';
import './OneHash'

import Header from "./Header";

function getPWD(){ //récupération du mot de passe
    return localStorage.getItem("pwd");
}

function Result() {
    var pwd = getPWD();
    return (
        <div className="App">
            <Header/>
        <header className="App-heade">
            <p>The result is : </p>
            {pwd}
        </header>
        </div>
    );
}

export default Result;
