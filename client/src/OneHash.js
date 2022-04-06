import React from "react";
import './OneHash.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function OneHash() {
  const [dataReturn, setDataReturn] = React.useState(null);
  const [inputHash, setInputHash] = React.useState('');
  let navigate = useNavigate();

  function postHash() {
    navigate('/loading')
    if (isHash()) {
        axios
          .post('/postHash', {hash: inputHash})
          .then((response) => {
            console.log(response.data.password);
            setDataReturn(response.data.password);
            localStorage.setItem("pwd",response.data.password);
            console.log(response.data.time);
            setDataReturn(response.data.time);
            localStorage.setItem("time",response.data.time);
            console.log(response.data.number);
            setDataReturn(response.data.number);
            localStorage.setItem("alert",response.data.number);
            navigate('/result')
          
          })
          .catch(err => {
            console.error(err);
          });
    }else{
      navigate('/error')
    }
  }

  function isHash() {
    localStorage.setItem("error_type","wrong hash");
    return true;
  }

  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
            <h3>Enter a hashCode </h3>
            <p> </p>
            <input placeholder="Hash" class="input" value= {inputHash} onInput={e => setInputHash(e.target.value)}></input> 
            <p> </p>
            <p> </p>
          <button type="button" class="button" onClick={postHash}>Send</button>

        </div>
      </header>
    </div>
  );
}
 export default OneHash;