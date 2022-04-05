import React from "react";
import './Result.css';
import './OneHash';

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
            <h1 class="PwdFound">
                <span class="word">PASSWORD FOUND</span>
            </h1>
            <p>The result is : </p>
            <div className="Pwd">
                {pwd}
            </div>




        </header>

        </div>
    );
}

export default Result;
