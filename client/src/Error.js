import React from "react";
import './Error.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";
import { NavLink } from "react-router-dom";


function getError(){ //récupération du mot de passe
  return localStorage.getItem("error_type");
}
function Error(){
  var error = getError();
  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
            <h3>ERROR : </h3>
            {error}
            <p> </p>
            <p> </p>
            <NavLink to="/onehash"><button class="button" role="button" >Retry</button></NavLink>
        </div>
      </header>
    </div>
    );
  }

 export default Error;