import React from "react";
import './Loading.css';

import Header from "./Header";

function OneHash() {
  
  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
          <h1>LOADING</h1>
          <p></p>
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
      </header>
    </div>
  );
}
 export default OneHash;