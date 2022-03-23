import React from "react";
import './Loading.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function OneHash() {
  const [dataReturn, setDataReturn] = React.useState(null);
  const [inputHash, setInputHash] = React.useState('');
  let navigate = useNavigate();



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