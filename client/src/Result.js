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



        <section>
            <div class="container2">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i>How long did it take to find the password?</i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                Time :
                            </h3>
                            <p>tmps</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i>How many false alarms have there been?</i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                            False alarms :
                            </h3>
                            <p>almrs</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i>In which table was the password found?</i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                Table :
                            </h3>
                            <p>tab</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
}

export default Result;
