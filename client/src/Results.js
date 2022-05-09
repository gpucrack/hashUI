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

function Result() {
    var pwd = getPWD();
    var time = getTime();
    var alert = getAlert();
    var end_point = getEndPoint();
    var t = getT();
    return (
        <div className="App">
            <Header/>
        <header className="App-heade">
            <h1 class="PwdFound">
                <span class="word">COVERAGE PASSWORD</span>
            </h1>
            <p>Percentage of passwords found : </p>
            <div className="Pwd">
                {pwd} %
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
                            <p>{time} sec</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i>How many false alarms are there?</i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                            False alarms :
                            </h3>
                            {alert}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <h1>Statistics on the Rainbow tables that the interface uses : </h1>
        Total number of end points (mtTotal): {end_point} / 
        Chain length (t): {t}
    </div>
    );
}

export default Result;