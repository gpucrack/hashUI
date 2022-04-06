import React from "react";
import './Result.css';
import './OneHash'

import Header from "./Header";

function getPWD(){ //récupération du mot de passe
    return localStorage.getItem("pwd");
}
function getTime(){ //récupération du mot de passe
    return localStorage.getItem("time");
}
function getAlert(){ //récupération du mot de passe
    return localStorage.getItem("alert");
}

function Result() {
    var pwd = getPWD();
    var time = getTime();
    var alert = getAlert();
    return (
        <div className="App">
            <Header/>
        <header className="App-heade">
            <h2>PASSWORD FOUND</h2>
            <p>The result is : </p>
            {pwd}
            {time}
            {alert}
        </header>
        </div>
    );
}

export default Result;
