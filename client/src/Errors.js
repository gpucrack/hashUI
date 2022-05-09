import React from "react";
import './Errors.css';

import Header from "./Header";
import { NavLink } from "react-router-dom";


function getError(){ //récupération du mot de passe
  return localStorage.getItem("error_type");
}
function Errors(){
  var error = getError();
  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash2">
            <h3>ERROR</h3>
            {error}
            <p> </p>
            <p> </p>
            <NavLink to="/severalhash"><button class="button" role="button" >Retry</button></NavLink>
        </div>
      </header>
    </div>
    );
  }

 export default Errors;