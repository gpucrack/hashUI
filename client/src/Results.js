import React from "react";
import './Results.css';
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
function getEndPoint(){ //récupération du mot de passe
    return localStorage.getItem("end_point");
}
function getT(){ //récupération du mot de passe
    return localStorage.getItem("t");
}

function Results() {
    var pwd = getPWD();
    var time = getTime();
    var alert = getAlert();
    var end_point = getEndPoint();
    var t = getT();
    return (
        <div className="App">
            <Header/>
            <header className="App-heade">
                <div class="txt">
                    <h1 class="PwdFound">
                        <span class="word">PASSWORD FOUND</span>
                    </h1>
                    <br/>
                    <p>The password is :  </p>
                    
                    <div className="Pwd">
                        {pwd}
                        </div>
                    <div class="stats">
                        <h4>The rainbow tables used: </h4>
                        <p>
                            - Total number of endpoints (mtTotal): {end_point}
                        </p>
                        <p>
                            - Chain length (t): {t}
                        </p>
                    </div>
                    
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
                            <h4>
                                Time :
                            </h4>
                            <p>{time} sec</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i>How many false alarms were there?</i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h4>
                            False alarms :
                            </h4>
                            {alert}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
    );
}

export default Results;